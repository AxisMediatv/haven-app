import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

export function detectEmotion(text: string): string {
  const lowerText = text.toLowerCase()
  
  if (lowerText.includes('happy') || lowerText.includes('joy') || lowerText.includes('excited')) {
    return 'happy'
  }
  if (lowerText.includes('sad') || lowerText.includes('depressed') || lowerText.includes('down')) {
    return 'sad'
  }
  if (lowerText.includes('angry') || lowerText.includes('frustrated') || lowerText.includes('mad')) {
    return 'angry'
  }
  if (lowerText.includes('anxious') || lowerText.includes('worried') || lowerText.includes('nervous')) {
    return 'anxious'
  }
  if (lowerText.includes('stressed') || lowerText.includes('overwhelmed')) {
    return 'stressed'
  }
  
  return 'neutral'
}

export function getCrisisLevel(text: string): 'low' | 'medium' | 'high' {
  const crisisKeywords = [
    'suicide', 'kill myself', 'want to die', 'end it all', 'no reason to live',
    'hurt myself', 'self harm', 'cut myself', 'overdose', 'give up',
    'hopeless', 'worthless', 'better off dead', 'no one cares', 'alone forever'
  ]
  
  const lowerText = text.toLowerCase()
  const matches = crisisKeywords.filter(keyword => lowerText.includes(keyword))
  
  if (matches.length >= 3) return 'high'
  if (matches.length >= 1) return 'medium'
  return 'low'
}

export function generateResponseId(): string {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
} 