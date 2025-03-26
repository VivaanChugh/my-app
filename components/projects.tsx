import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FadeInSection } from "./fade-in-section"

export function Projects() {
  const projects = [
    {
      title: "Findr: AI-Powered Hackathon Matchmaking",
      description: "Developed a full-stack matchmaking platform to connect hackathon participants based on skills and interests.",
      tags: ["FastAPI", "React", "Python", "MongoDB", "Gemini AI"],
      github: "https://github.com/VivaanChugh/Findr",
      demo: "#"
    },
    {
      title: "Digit Classifier using CNN",
      description: "Developed a CNN in PyTorch to classify handwritten digits from the MNIST dataset with high accuracy.",
      tags: ["Python", "PyTorch", "TensorFlow", "Machine Learning"],
      github: "https://github.com/VivaanChugh/MNIST-Classifier-CNN",
      demo: "#"
    },
    {
      title: "SmartSpend: A Personal Finance Tracker",
      description: "Developed a Django finance tracker with user authentication, allowing users to log in and manage transactions.",
      tags: ["Django", "Python", "HTML", "Matplotlib", "Bootstrap"],
      github: "https://github.com/VivaanChugh/SmartSpend",
      demo: "#"
    }
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <FadeInSection key={index}>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Badge key={i} >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              <Button asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
              {project.demo !== "#" && (
                <Button asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        </FadeInSection>
      ))}
    </div>
  )
}