import './globals.css'
import SmoothScrollProvider from '../components/SmoothScrollProvider'
import CustomCursor from '../components/CustomCursor'
import FilmGrain from '../components/FilmGrain'
import ChatWidget from '../components/ChatWidget'

export const metadata = {
  metadataBase: new URL('https://radet.me'),

  title: 'Tioluwanimi Adeagbo | Engineering Intelligence',

  description:
    'Tioluwanimi Adeagbo is a Full-Stack Developer and AI Backend Engineer from Nigeria, specializing in multi-agent systems, RAG pipelines, Bayesian inference models, and cloud infrastructure.',

  keywords: [
    'Tioluwanimi Adeagbo',
    'Tioluwanimi',
    'AI Backend Engineer',
    'Multi-Agent Systems',
    'LangGraph Developer',
    'FastAPI Developer',
    'Full-Stack Developer',
    'Computer Science Student',
    'Obafemi Awolowo University',
    'OAU',
    'Nigeria',
  ],

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Tioluwanimi Adeagbo | Engineering Intelligence',
    description:
      'Full-Stack Developer and AI Backend Engineer building multi-agent systems, RAG pipelines, and fintech infrastructure.',
    url: 'https://radet.me',
    siteName: 'Tioluwanimi Adeagbo Portfolio',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Tioluwanimi Adeagbo | Engineering Intelligence',
    description:
      'Full-Stack Developer and AI Backend Engineer building multi-agent systems, RAG pipelines, and fintech infrastructure.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-void text-obsidian">
        <SmoothScrollProvider>
          <FilmGrain />
          <CustomCursor />
          {children}
          <ChatWidget />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
