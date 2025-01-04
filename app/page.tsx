import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PromptGenerator } from "./components/prompt-generator"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-4xl mx-auto pt-10 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            AI Prompt Generator
          </h1>
          <p className="text-muted-foreground">
            Create unique and inspiring prompts powered by Google&apos;s Gemini AI
          </p>
        </div>
        
        <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
          <CardHeader>
            <CardTitle>Generate Prompts</CardTitle>
            <CardDescription>
              Enter a topic and choose how many prompts you&apos;d like to generate
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PromptGenerator />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

