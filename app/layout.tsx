import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { TelegramBanner } from './components/telegram-banner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Prompt Generator - Create Creative Prompts with Gemini AI',
  description: 'Generate creative AI prompts using Google\'s Gemini AI models. Create, save, and manage prompts for any topic with our easy-to-use interface.',
  keywords: ['AI prompts', 'Gemini AI', 'prompt generator', 'creative writing', 'AI tools'],
  authors: [{ name: 'saikothasan' }],
  openGraph: {
    title: 'AI Prompt Generator - Create Creative Prompts with Gemini AI',
    description: 'Generate creative AI prompts using Google\'s Gemini AI models. Create, save, and manage prompts for any topic with our easy-to-use interface.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Prompt Generator Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Prompt Generator - Create Creative Prompts with Gemini AI',
    description: 'Generate creative AI prompts using Google\'s Gemini AI models. Create, save, and manage prompts for any topic with our easy-to-use interface.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'VFOQfy__erVvmj4v6M9wXQ7kfOrsIephtjouoPrg3NE',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <TelegramBanner />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

