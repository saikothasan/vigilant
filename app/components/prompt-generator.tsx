'use client'

import { useState, useEffect } from "react"
import { Loader2, Sparkles, Copy, Save } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SavedPrompts } from "./saved-prompts"
import { generatePrompts } from "../actions"
import { SavedPrompt } from "../types"
import { nanoid } from 'nanoid'

export function PromptGenerator() {
  const [topic, setTopic] = useState("")
  const [count, setCount] = useState("5")
  const [prompts, setPrompts] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [savedPrompts, setSavedPrompts] = useState<SavedPrompt[]>([])
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('savedPrompts')
    if (saved) {
      setSavedPrompts(JSON.parse(saved))
    }
  }, [])

  const saveToLocalStorage = (prompts: SavedPrompt[]) => {
    localStorage.setItem('savedPrompts', JSON.stringify(prompts))
    setSavedPrompts(prompts)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!topic) return

    setIsLoading(true)
    setError(null)
    setPrompts(null)
    setCopied(false)

    const result = await generatePrompts(topic, parseInt(count))
    
    if (result.success && result.prompts) {
      setPrompts(result.prompts)
    } else {
      setError(result.error || 'Something went wrong')
    }
    
    setIsLoading(false)
  }

  const handleSave = () => {
    if (!prompts) return
    const newPrompt: SavedPrompt = {
      id: nanoid(),
      topic,
      prompt: prompts,
      timestamp: Date.now()
    }
    const updated = [newPrompt, ...savedPrompts]
    saveToLocalStorage(updated)
  }

  const handleDelete = (id: string) => {
    const updated = savedPrompts.filter(p => p.id !== id)
    saveToLocalStorage(updated)
  }

  const copyToClipboard = async () => {
    if (!prompts) return
    await navigator.clipboard.writeText(prompts)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Enter a topic (e.g., space exploration, cooking, art)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="flex-1"
          />
          <Select value={count} onValueChange={setCount}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Count" />
            </SelectTrigger>
            <SelectContent>
              {[3, 5, 7, 10].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} prompts
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button 
          type="submit" 
          disabled={!topic || isLoading}
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Creative Prompts
            </>
          )}
        </Button>
      </form>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {prompts && (
        <div className="rounded-lg border bg-card/50 backdrop-blur-sm p-6 space-y-4">
          <pre className="whitespace-pre-wrap text-sm">{prompts}</pre>
          <div className="flex gap-2 justify-end">
            <Button
              variant="secondary"
              size="sm"
              onClick={copyToClipboard}
              className="text-xs"
            >
              <Copy className={`mr-2 h-3 w-3 ${copied ? 'text-green-500' : ''}`} />
              {copied ? 'Copied!' : 'Copy'}
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleSave}
              className="text-xs"
            >
              <Save className="mr-2 h-3 w-3" />
              Save
            </Button>
          </div>
        </div>
      )}

      {savedPrompts.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Saved Prompts</h2>
          <SavedPrompts prompts={savedPrompts} onDelete={handleDelete} />
        </div>
      )}
    </div>
  )
}

