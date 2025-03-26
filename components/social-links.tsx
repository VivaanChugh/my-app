import { FileText, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Link
        href="https://www.linkedin.com/in/vivaan-chugh/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
      >
        <Linkedin className="h-5 w-5" />
        LinkedIn
      </Link>
      <Link
        href="https://github.com/VivaanChugh"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
      >
        <Github className="h-5 w-5" />
        GitHub
      </Link>
      <Link
        href="mailto:vivaanc190@gmail.com"
        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
      >
        <Mail className="h-5 w-5" />
        vivaanc190@gmail.com
      </Link>

      <Link
        href="/Resume_Vivaan_Chugh.pdf"
        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
      >
        <FileText className="h-5 w-5" />
        Resume
      </Link>
    </div>
  )
}

