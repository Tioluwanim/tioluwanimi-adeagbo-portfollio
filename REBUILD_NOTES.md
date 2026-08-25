# Tioluwanimi Adeagbo — Cinematic Portfolio (v2)

A full rebuild of the original Next.js portfolio into an Awwwards-style
cinematic developer site: deep black + gold palette, glassmorphic bento
cards, a custom magnetic cursor, film-grain overlay, Lenis smooth scroll,
a React Three Fiber particle field in the hero, a GSAP ScrollTrigger
"Trophy Room" timeline, and a floating AI assistant wired to a FastAPI
backend on Render.

Verified in this environment: `npm install` + `npm run build` complete
with **zero errors**.

## 1. Project structure

```
.
├── app/
│   ├── layout.js          # Root shell: Lenis, cursor, film grain, chat widget
│   ├── page.js             # Assembles all sections
│   ├── globals.css         # Fonts, glass/gold utilities, cursor & grain styles
│   ├── robots.js
│   └── sitemap.js
├── components/
│   ├── SmoothScrollProvider.jsx   # Lenis + GSAP ScrollTrigger wiring
│   ├── CustomCursor.jsx           # Magnetic dot + ring cursor
│   ├── FilmGrain.jsx              # SVG grain + vignette overlay
│   ├── ParticleField.jsx          # R3F particle node network (hero bg)
│   ├── Navbar.jsx
│   ├── Hero.jsx                   # Staggered Framer Motion reveal
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx               # Bento showcase: Spoudazõ / ZELTA / OjaBulk + more
│   ├── Timeline.jsx                # GSAP-pinned "Trophy Room" achievements
│   ├── Learning.jsx
│   ├── Insights.jsx                # Blog/research placeholders
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── ChatWidget.jsx              # Floating AI assistant (calls the backend)
├── public/
│   └── profile.jpg
├── backend/
│   ├── main.py             # FastAPI: CORS, retrieval, optional Qdrant + Groq
│   ├── requirements.txt
│   └── render.yaml
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
├── package.json
└── .env.local.example
```

## 2. Run the frontend locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 3. Deploy the frontend (Vercel)

1. Push this folder to your GitHub repo (it replaces the current contents
   of `tioluwanimi-adeagbo-portfollio`).
2. Import the repo in Vercel — it auto-detects Next.js.
3. Set the environment variable `NEXT_PUBLIC_AI_BACKEND_URL` to your
   Render backend URL (see below). Copy `.env.local.example` →
   `.env.local` for local dev.
4. Deploy.

## 4. Deploy the AI backend (Render)

The `backend/` folder is a standalone FastAPI service — deploy it as a
**separate** Render web service (Blueprint via `backend/render.yaml`, or
manually: root directory `backend`, build `pip install -r
requirements.txt`, start `uvicorn main:app --host 0.0.0.0 --port $PORT`).

Environment variables (all optional — the assistant works with none set,
falling back to templated answers from its built-in knowledge base):

| Variable            | Purpose                                             |
|---------------------|------------------------------------------------------|
| `FRONTEND_ORIGINS`  | Comma-separated allowed origins for CORS            |
| `GROQ_API_KEY`      | Enables real LLM narration via Llama on Groq        |
| `OPENROUTER_API_KEY`| Alternative LLM narration via OpenRouter            |
| `QDRANT_URL` / `QDRANT_API_KEY` | Swap the built-in keyword retriever for real vector search |
| `LLM_MODEL`         | Groq model name (default `llama-3.1-8b-instant`)    |

Once deployed, set `NEXT_PUBLIC_AI_BACKEND_URL` on Vercel to the Render
URL (e.g. `https://tioluwanimi-portfolio-ai.onrender.com`).

## 5. What changed from the original repo

- Full visual rebuild: light blue/white theme → deep black (`#050505`) +
  gold (`#D4AF37`/`#FFD700`) cinematic theme.
- Added Lenis smooth scroll, a magnetic custom cursor, and a film-grain +
  vignette overlay across the whole site.
- Added an R3F particle-node hero background responding to mouse movement.
- Rebuilt the Projects section as a bento grid: three deep case-study
  cards (Spoudazõ, ZELTA, OjaBulk) plus the rest of your real GitHub
  projects as smaller cards.
- Added a new GSAP ScrollTrigger-pinned "Trophy Room" achievements
  timeline (InnovateX Africa, AI Academy Pitchathon, DSN × BCT, Nomba
  Hackathon, OPay Innovation Challenge, GDG OAU).
- Added a new "Insights Hub" section with placeholder articles matching
  your stated writing topics.
- Added a floating glassmorphic AI assistant widget + a production FastAPI
  backend (`backend/main.py`) with CORS, retrieval, and optional
  Qdrant/Groq integration, plus `render.yaml` for one-click Render deploy.
- All copy (About, Skills, Contact, real GitHub project links) preserved
  and extended from your existing content — nothing fabricated beyond
  what's in your repo and known project history.
