import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the AI Prompt Generator?",
    answer: "The AI Prompt Generator is a tool that uses Google's Gemini AI to create customized prompts for various purposes. It helps users generate creative and effective prompts for writing, content creation, and AI interactions."
  },
  {
    question: "How does it work?",
    answer: "Simply enter a topic, select the number of prompts you want (3-10), choose your preferred Gemini model, and click generate. The AI will create unique prompts based on your input."
  },
  {
    question: "Which AI models are available?",
    answer: "We currently support Gemini Pro and Gemini Pro Vision models from Google's AI suite. Each model has its strengths and can be selected based on your specific needs."
  },
  {
    question: "Are the generated prompts saved?",
    answer: "Yes, you can save your favorite prompts locally in your browser. The saved prompts can be accessed later and managed through the interface."
  },
  {
    question: "Is it free to use?",
    answer: "Yes, the AI Prompt Generator is currently free to use. However, we may introduce premium features in the future to support development and maintenance."
  },
  {
    question: "Can I contribute to the project?",
    answer: "The project is open source and available on GitHub. We welcome contributions from the community, whether it's code, bug reports, or feature suggestions."
  }
]

export default function FAQPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
          <p className="text-muted-foreground">
            Find answers to common questions about our AI Prompt Generator
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

