import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Calendar } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "AI Fitness Tracker",
      description:
        "Developed a Python desktop app with a modern PyQt GUI to track exercises via webcam, automatically counting sets and reps in real-time, improving workout accuracy and reducing manual tracking time by 70% for users.",
      achievements: [
        "Leveraged Mediapipe and OpenCV for AI-powered pose estimation, enabling reliable detection of joint angles and rep counting for multiple exercises",
        "Logged data to CSV and implemented interactive charts using PyQtGraph, allowing users to track performance trends",
      ],
      technologies: ["Python", "PyQt", "OpenCV", "Mediapipe", "NumPy"],
      date: "August 2025",
      github: "#",
      demo: "#",
    },
    {
      title: "Findr: AI-Powered Hackathon Matchmaking",
      description:
        "Developed a full-stack matchmaking platform to connect hackathon participants based on skills and interests using AI-powered resume parsing and intelligent matching algorithms.",
      achievements: [
        "Built a FastAPI backend with MongoDB for data storage/user authentication via GCP Identity Platform",
        "Implemented an AI-powered resume parser using PyPDF2, Google Vision API, and Gemini AI, extracting and structuring user profiles dynamically",
      ],
      technologies: ["FastAPI", "React", "Python", "MongoDB", "Gemini AI", "GCP"],
      date: "March 2025",
      github: "#",
      demo: "#",
    },
    {
      title: "Digit Classifier using CNN",
      description:
        "Developed a Convolutional Neural Network in PyTorch to classify handwritten digits from the MNIST dataset with high accuracy, demonstrating deep learning expertise.",
      achievements: [
        "Optimized network performance by designing multiple convolutional layers and fine-tuning hyperparameters, leveraging the Adam optimizer for efficient training, faster convergence, and improved accuracy",
        "Evaluated model accuracy on test data by implementing comprehensive performance metrics and visualized training progress through detailed loss curve analysis",
      ],
      technologies: ["Python", "PyTorch", "TensorFlow", "Machine Learning"],
      date: "March 2025",
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            A showcase of my technical projects demonstrating expertise in AI/ML, full-stack development, and innovative
            problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{project.date}</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{achievement}</p>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/20 text-secondary-foreground text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
