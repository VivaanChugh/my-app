import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FadeInSection } from "./fade-in-section"

export function Projects() {
  const projects = [
    {
      title: "OBC-Firmware-Onboarding Project",
      description: "Developed a peripheral driver for a temperature sensor and implemented a thermal management task as part of a design team onboarding challenge",
      tags: ["C", "STM32 HAL", "Peripheral Drivers"],
      github: "https://github.com/vivaanc/obc-firmware-onboarding",
      demo: "#"
    },
    {
      title: "STM32 Nucleo Board Alarm System",
      description: "Designed and implemented an alarm system using STM32 Nucleo board with I2C communication for sensor integration",
      tags: ["C", "I2C", "Motion Sensors/Buzzers", "Hardware Circuitry"],
      github: "https://github.com/VivaanChugh/ECE198-Alarm-System",
      demo: "#"
    },
    {
      title: "MNIST Digit Classifier using CNN",
      description: "Developed a CNN model in PyTorch to classify handwritten digits from the MNIST dataset with high accuracy",
      tags: ["Python", "PyTorch", "Machine Learning"],
      github: "https://github.com/VivaanChugh/MNIST-Classifier-CNN",
      demo: "#"
    },
    {
      title: "Football Top Player Analytics",
      description: "Developed a Python-based tool to analyze and evaluate player performance using data from FIFA 21",
      tags: ["Python", "File I/O", "OOP", "Algorithms", "Data Structures"],
      github: "https://github.com/VivaanChugh/Fifa-21-Top-Player-Analytics",
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

