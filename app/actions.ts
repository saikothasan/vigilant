'use server'

import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export async function generatePrompts(topic: string, count: number = 5) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
    
    const prompt = `Write ${count} prompt${count > 1 ? 's' : ''} for ${topic}.`
    
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

