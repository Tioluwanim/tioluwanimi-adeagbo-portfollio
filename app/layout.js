import './globals.css'

export const metadata = {
  metadataBase: new URL('https://radet.me'),

  title: 'Tioluwanimi Adeagbo | Backend Developer & AI/ML Engineer',

  description:
    'Tioluwanimi Adeagbo is a Backend Developer and AI/ML Engineer from Nigeria, specializing in Python, FastAPI, JavaScript, machine learning, automation, and intelligent software systems.',

  keywords: [
    'Tioluwanimi Adeagbo',
    'Tioluwanimi',
    'Backend Developer',
    'AI Engineer',
    'Machine Learning Engineer',
    'Python Developer',
    'FastAPI',
    'JavaScript Developer',
    'Software Engineer',
    'Computer Science Student',
    'Obafemi Awolowo University',
    'OAU',
    'Nigeria',
  ],

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Tioluwanimi Adeagbo | Backend Developer & AI/ML Engineer',
    description:
      'Backend Developer and AI/ML Engineer building intelligent software, automation tools, and machine learning applications.',
    url: 'https://radet.me',
    siteName: 'Tioluwanimi Adeagbo Portfolio',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Tioluwanimi Adeagbo | Backend Developer & AI/ML Engineer',
    description:
      'Backend Developer and AI/ML Engineer building intelligent software and machine learning applications.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
