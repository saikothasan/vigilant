export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">About</h1>
          <p className="text-muted-foreground">
            Learn more about our AI Prompt Generator
          </p>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <p>
            The AI Prompt Generator is a powerful tool designed to help creators, writers, 
            and AI enthusiasts generate high-quality prompts for various use cases. Built 
            with modern web technologies and powered by Google&apos;s Gemini AI, our platform 
            offers a seamless and intuitive experience for prompt generation.
          </p>
          
          <h2>Our Mission</h2>
          <p>
            Our mission is to simplify the process of creating effective AI prompts. 
            Whether you&apos;re working on creative writing, image generation, or any other 
            AI-powered project, we aim to provide you with the tools you need to craft 
            the perfect prompts.
          </p>
          
          <h2>Technology Stack</h2>
          <p>
            We use cutting-edge technologies to ensure the best possible experience:
          </p>
          <ul>
            <li>Next.js for the frontend framework</li>
            <li>Google Gemini AI for prompt generation</li>
            <li>TypeScript for type safety</li>
            <li>Tailwind CSS for styling</li>
            <li>Shadcn UI for component library</li>
          </ul>
          
          <h2>Open Source</h2>
          <p>
            This project is open source and available on GitHub. We welcome contributions 
            from the community to help make the AI Prompt Generator even better.
          </p>
        </div>
      </div>
    </div>
  )
}

