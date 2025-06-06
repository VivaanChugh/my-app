import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Image from "next/image"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vivaan Chugh - Computer Engineering Student",
  description:
    "Portfolio of Vivaan Chugh, Computer Engineering student at University of Waterloo specializing in software development and AI/ML.",
  
  icons: {
    icon: '/public/favicon.ico',
    
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
