import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Brain, Clock, CloudCog, Copy, Save, Sparkles } from 'lucide-react'

const features = [
  {
    title: "Powered by Gemini AI",
    description: "Leverage Google's advanced AI models for creative and contextual prompt generation",
    icon: Brain
  },
  {
    title: "Multiple AI Models",
    description: "Choose between Gemini Pro and Gemini Pro Vision models for different use cases",
    icon: Bot
  },
  {
    title: "Customizable Generation",
    description: "Generate between 3 to 10 prompts at once based on your needs",
    icon: Sparkles
  },
  {
    title: "Save Favorites",
    description: "Save your favorite prompts locally for quick access later",
    icon: Save
  },
  {
    title: "Quick Copy",
    description: "Copy prompts to your clipboard with a single click",
    icon: Copy
  },
  {
    title: "Real-time Generation",
    description: "Get instant results with our optimized API integration",
    icon: Clock
  },
  {
    title: "Cloud Integration",
    description: "Seamlessly integrated with Google's cloud infrastructure",
    icon: CloudCog
  }
]

export default function FeaturesPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Features</h1>
          <p className="text-muted-foreground">
            Discover what makes our AI Prompt Generator special
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <feature.icon className="h-5 w-5" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

