import { BellIcon as BrandTelegram } from 'lucide-react'
import Link from 'next/link'

export function TelegramBanner() {
  return (
    <div className="bg-blue-500/10 border-b">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <Link 
          href="https://t.me/drkingbd/9" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition-colors"
        >
          <BrandTelegram className="w-4 h-4" />
          <span>Join our Telegram channel for updates</span>
        </Link>
      </div>
    </div>
  )
}

