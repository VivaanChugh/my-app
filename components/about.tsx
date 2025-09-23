import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Code, Database, Cloud } from "lucide-react"

export function About() {
  const skills = {
    languages: ["Python", "C", "C#", "C++", "SQL", "Ruby", "JavaScript", "TypeScript", "Java", "Bash"],
    libraries: ["React", "Next.js", "Angular", "Flask", "Django", "PyTorch", "TensorFlow", "Pandas", "NumPy"],
    tools: ["AWS", "Git", "Docker", "DynamoDB", "Lambda", "S3", "MongoDB", "PostgreSQL", "SolidWorks"],
  }

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            I'm a Computer Engineering student at the University of Waterloo with a passion for building innovative
            solutions using AI/ML and modern software technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">University of Waterloo</p>
                  <p className="text-muted-foreground">BASc. in Computer Engineering</p>
                  <p className="text-muted-foreground">Expected Graduation: 2029</p>
                  <p className="text-sm text-muted-foreground mt-3">
                    <strong>Relevant Coursework:</strong> Fundamentals of Programming, Digital Circuits and Systems,
                    Data Structures and Algorithms
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Libraries & Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.libraries.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Tools & Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
