'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function Nav() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.25}  
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const navItems = ['about', 'education', 'experience', 'skills', 'projects']

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-primary hover-effect">VC</Link>
          <div className="flex gap-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`text-sm capitalize transition-colors nav-item ${
                  activeSection === item ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
