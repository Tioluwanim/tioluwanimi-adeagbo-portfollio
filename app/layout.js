import './globals.css'

export const metadata = {
  title: 'Tioluwanimi Adeagbo — Backend Developer & AI/ML Engineer',
  description:
    'Backend-focused Python and JavaScript developer building real-world applications, automation tools, and early-stage AI/ML systems, with growing interest in intelligent systems and LLM development.',
  keywords: [
    'Tioluwanimi Adeagbo',
    'Backend Developer',
    'Python Developer',
    'AI ML Engineer',
    'FastAPI',
    'JavaScript',
    'Nigeria',
    'Lagos',
  ],
  openGraph: {
    title: 'Tioluwanimi Adeagbo — Backend Developer',
    description: 'Building real-world applications, automation tools, and early-stage AI/ML systems.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
