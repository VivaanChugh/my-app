'use client'

import { useState, useEffect } from 'react'

interface TypingAnimationProps {
  text: string
  delay: number
}

export function TypingAnimation({ text, delay}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {

    let i = 0
    const typingInterval = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, delay)

    return () => clearInterval(typingInterval)
  }, [text, delay])

  return (
    <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
      {displayText}
      <span className="animate-blink">|</span>
    </h1>
  )
}

