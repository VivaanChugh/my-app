import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Image from "next/image"
import "./globals.css"

import Head from "next/head"

// 


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vivaan Chugh - Computer Engineering Student",
  description:
    "Portfolio of Vivaan Chugh, Computer Engineering student at University of Waterloo specializing in software development and AI/ML.",
  
  icons: "/favicon.ico"
    
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    
    <html lang="en" className="scroll-smooth">
      <Head>
        <title>Vivaan Chugh - Computer Engineering Student</title>
        <meta name="description" content="Portfolio of Vivaan Chugh, Computer Engineering student at University of Waterloo specializing in software development and AI/ML." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
    
  )
}
