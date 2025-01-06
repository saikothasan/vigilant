import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Prompt Generator - Create Creative Prompts with Gemini AI',
  description: 'Generate creative AI prompts using Google\'s Gemini AI models. Create, save, and manage prompts for any topic with our easy-to-use interface.',
  keywords: ['AI prompts', 'Gemini AI', 'prompt generator', 'creative writing', 'AI tools'],
  authors: [{ name: 'Your Name' }],
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
    google: 'your-google-verification-code',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

