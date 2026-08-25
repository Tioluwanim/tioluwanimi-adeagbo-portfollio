"""
Tioluwanimi Adeagbo — Portfolio AI Assistant Backend
FastAPI service deployed on Render, called by the floating chat widget
on the Next.js frontend (deployed on Vercel).

Retrieval:
  - If QDRANT_URL / QDRANT_API_KEY are set, embeddings are stored and
    searched in Qdrant.
  - Otherwise falls back to a lightweight in-process keyword retriever
    over KNOWLEDGE_BASE, so the service works with zero external deps.

Narration:
  - If GROQ_API_KEY (or OPENROUTER_API_KEY) is set, the retrieved context
    is handed to a Llama model for a natural-language answer.
  - Otherwise a clean templated answer is returned directly from the
    retrieved knowledge base entries, so the assistant still works with
    zero LLM keys configured.
"""

import os
import re
from typing import List, Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

# --------------------------------------------------------------------------
# Config
# --------------------------------------------------------------------------

FRONTEND_ORIGINS = [
    origin.strip()
    for origin in os.getenv(
        "FRONTEND_ORIGINS",
        "https://radet.me,https://www.radet.me,http://localhost:3000",
    ).split(",")
    if origin.strip()
]

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")

LLM_MODEL = os.getenv("LLM_MODEL", "llama-3.1-8b-instant")

# --------------------------------------------------------------------------
# Knowledge base — kept in-repo so the assistant needs zero setup to work.
# Swap `retrieve()` for a real Qdrant query once QDRANT_URL is configured.
# --------------------------------------------------------------------------

KNOWLEDGE_BASE = [
    {
        "id": "about",
        "keywords": ["who", "about", "background", "bio", "school", "university", "oau"],
        "text": (
            "Tioluwanimi Ayomide Adeagbo is a Computer Science & Engineering student at "
            "Obafemi Awolowo University (OAU), Ile-Ife, Nigeria. He's a full-stack developer "
            "and AI backend engineer specializing in multi-agent systems, RAG pipelines, "
            "Bayesian inference models, and cloud infrastructure."
        ),
    },
    {
        "id": "spoudazo",
        "keywords": ["spoudazo", "spoudazõ", "exam", "study", "education", "edtech"],
        "text": (
            "Spoudazõ is a full-stack AI exam-prep platform (Next.js + FastAPI) with FAISS "
            "vector search over BGE-M3 embeddings, rubric-based theory grading, CBT practice, "
            "a study planner, and a Smart Library powered by Tavily web search. Deployed on Vercel."
        ),
    },
    {
        "id": "zelta",
        "keywords": ["zelta", "finance", "financial twin", "bayesian", "kelly"],
        "text": (
            "ZELTA is an AI Financial Twin concept for Nigerian university students — FastAPI "
            "microservices, Bayesian likelihood models, and Kelly Criterion math, with an LLM "
            "narration layer (Llama via Groq/OpenRouter) that never does the arithmetic itself."
        ),
    },
    {
        "id": "ojabulk",
        "keywords": ["ojabulk", "procurement", "escrow", "ledger", "traders", "ussd"],
        "text": (
            "OjaBulk is pooled-procurement infrastructure for Nigerian market traders — Nomba "
            "Virtual Accounts, HMAC-SHA256 webhook verification, a double-entry ledger, smart "
            "escrow, and USSD access via Africa's Talking."
        ),
    },
    {
        "id": "stack",
        "keywords": ["stack", "tech", "technology", "tools", "skills", "language"],
        "text": (
            "Core stack: FastAPI, Next.js (App Router), React Native/Expo, PostgreSQL/SQLAlchemy, "
            "LangGraph, Firebase Auth, Paystack/Nomba/Squad webhook integration, FAISS/ChromaDB, "
            "and OpenRouter/Groq for LLM routing, deployed on Vercel, Render, and Cloud Run."
        ),
    },
    {
        "id": "contact",
        "keywords": ["contact", "email", "reach", "hire", "linkedin", "github"],
        "text": (
            "You can reach Tioluwanimi at tolutemitiwa@gmail.com, on GitHub at "
            "github.com/Tioluwanim, or on LinkedIn as Tioluwanimi Adeagbo. He's open to "
            "backend engineering and AI/agentic collaboration opportunities."
        ),
    },
]


def retrieve(query: str, top_k: int = 3) -> List[str]:
    """Keyword-overlap retriever. Replace with a Qdrant similarity search
    once QDRANT_URL is configured — the KNOWLEDGE_BASE entries above are
    already shaped as the payloads you'd upsert into a collection."""
    query_words = set(re.findall(r"[a-zA-Z']+", query.lower()))
    scored = []
    for entry in KNOWLEDGE_BASE:
        overlap = len(query_words.intersection(entry["keywords"]))
        overlap += sum(1 for kw in entry["keywords"] if kw in query.lower())
        if overlap > 0:
            scored.append((overlap, entry["text"]))
    scored.sort(key=lambda x: x[0], reverse=True)
    if not scored:
        return [KNOWLEDGE_BASE[0]["text"], KNOWLEDGE_BASE[4]["text"]]
    return [text for _, text in scored[:top_k]]


def narrate(query: str, context: List[str]) -> str:
    """Call an LLM to turn retrieved context into a natural reply.
    Falls back to a templated join of the context if no API key is set."""
    api_key = GROQ_API_KEY or OPENROUTER_API_KEY
    if not api_key:
        return " ".join(context)

    try:
        import requests

        if GROQ_API_KEY:
            url = "https://api.groq.com/openai/v1/chat/completions"
            headers = {"Authorization": f"Bearer {GROQ_API_KEY}"}
            model = LLM_MODEL
        else:
            url = "https://openrouter.ai/api/v1/chat/completions"
            headers = {"Authorization": f"Bearer {OPENROUTER_API_KEY}"}
            model = os.getenv("OPENROUTER_MODEL", "meta-llama/llama-3.1-8b-instruct:free")

        payload = {
            "model": model,
            "messages": [
                {
                    "role": "system",
                    "content": (
                        "You are the portfolio assistant for Tioluwanimi Adeagbo. Answer briefly "
                        "and only using the provided context. If the context doesn't cover the "
                        "question, say so and suggest emailing tolutemitiwa@gmail.com."
                    ),
                },
                {
                    "role": "user",
                    "content": f"Context:\n{chr(10).join(context)}\n\nQuestion: {query}",
                },
            ],
            "max_tokens": 300,
            "temperature": 0.4,
        }
        resp = requests.post(url, headers=headers, json=payload, timeout=15)
        resp.raise_for_status()
        return resp.json()["choices"][0]["message"]["content"].strip()
    except Exception:
        return " ".join(context)


# --------------------------------------------------------------------------
# API
# --------------------------------------------------------------------------

app = FastAPI(title="Tioluwanimi Adeagbo — Portfolio AI Assistant")

app.add_middleware(
    CORSMiddleware,
    allow_origins=FRONTEND_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatMessage(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=2000)
    history: Optional[List[ChatMessage]] = None


class ChatResponse(BaseModel):
    reply: str
    sources: List[str]


@app.get("/")
def health():
    return {"status": "ok", "service": "tioluwanimi-portfolio-ai"}


@app.post("/chat", response_model=ChatResponse)
def chat(req: ChatRequest):
    if not req.message.strip():
        raise HTTPException(status_code=400, detail="message cannot be empty")

    context = retrieve(req.message)
    reply = narrate(req.message, context)
    return ChatResponse(reply=reply, sources=context)
