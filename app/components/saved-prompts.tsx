'use client'

import { useState } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Copy, Star, Trash } from 'lucide-react'
import { SavedPrompt } from '../types'
import { formatDistanceToNow } from 'date-fns'

interface SavedPromptsProps {
  prompts: SavedPrompt[]
  onDelete: (id: string) => void
}

export function SavedPrompts({ prompts, onDelete }: SavedPromptsProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <ScrollArea className="h-[400px] rounded-md border p-4">
      <div className="space-y-4">
        {prompts.map((prompt) => (
          <Card key={prompt.id} className="bg-card/50 hover:bg-card/80 transition-colors">
            <CardContent className="p-4">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-primary mb-2">{prompt.topic}</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">{prompt.prompt}</p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {formatDistanceToNow(prompt.timestamp, { addSuffix: true })}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                  >
                    <Copy className={`w-4 h-4 ${copiedId === prompt.id ? 'text-green-500' : ''}`} />
                    <span className="sr-only">Copy prompt</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDelete(prompt.id)}
                  >
                    <Trash className="w-4 h-4" />
                    <span className="sr-only">Delete prompt</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  )
}

