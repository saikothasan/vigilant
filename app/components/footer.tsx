import { BrainCircuit, Github } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <BrainCircuit className="h-6 w-6" />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{' '}
            <Link
              href="https://github.com/saikothasan"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              saikothasan
            </Link>
            . Powered by Google Gemini AI.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href="https://github.com/saikothasan/vigilant"
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 hover:bg-accent"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

