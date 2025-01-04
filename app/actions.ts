'use server'

import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export async function generatePrompts(topic: string, count: number = 5) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
    
    const prompt = `Generate ${count} highly creative and detailed AI prompts related to "${topic}".
    
    Requirements for each prompt:
    - Make it specific and descriptive
    - Include relevant style references or artistic direction
    - Add technical details when applicable
    - Consider composition and mood
    - Make it unique and innovative
    
    Format each prompt as a numbered list with a title for each prompt.
    `
    
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()
    
    return { success: true, prompts: text }
  } catch (error) {
    console.error('Gemini API Error:', error)
    return { 
      success: false, 
      error: 'Failed to generate prompts. Please try again.' 
    }
  }
}

