import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      company: "State Bank of India (Canada)",
      role: "Software Engineering Intern",
      location: "Toronto, ON",
      period: "May 2025 – August 2025",
      achievements: [
        "Built a C#/SQL Server intranet tool to automate HR reports, improving accuracy and cutting log processing time by 60%",
        "Automated server log processing by developing a robust DNN/C# module, parsing and validating logs to generate actionable reports, reduced manual labor by 8 hours/week",
        "Leveraged SQL Server, .NET, and Python scripts to streamline workflows and improve operational efficiency",
      ],
      technologies: ["C#", "SQL Server", ".NET", "Python", "DNN"],
    },
    {
      company: "KnovaOne",
      role: "Software Engineering Intern",
      location: "Florida, USA (Remote)",
      period: "May 2025 – August 2025",
      achievements: [
        "Developed a high-throughput document parsing pipeline in Python integrating OCR (Tesseract, easyOCR) and MongoDB, automating keyword extraction and metadata logging, accelerating internal review cycles by 50%",
        "Enhanced document workflows by developing a full-stack PDF automation platform with FastAPI and a modern React frontend for advanced merging, compression, and redaction, significantly reducing manual processing time",
        "Led and participated in client meetings to demo solutions, gather product requirements, and translate feedback into technical features, ensuring alignment between stakeholders and the development team",
      ],
      technologies: ["Python", "FastAPI", "React", "MongoDB", "OCR", "Tesseract"],
    },
    {
      company: "UW Orbital",
      role: "Software Developer",
      location: "Waterloo, ON",
      period: "January 2025 - Present",
      achievements: [
        "Developed efficient software in C for satellite systems, optimizing performance and resource utilization on the RM46 microcontroller while ensuring robust operation in space-critical environments through error handling",
        "Implemented communication protocols for satellite systems, resulting in a 28% improvement in data transmission",
      ],
      technologies: ["C", "RM46 Microcontroller", "Embedded Systems"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            My professional journey in software engineering and development across various industries.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-primary">{exp.company}</CardTitle>
                    <p className="text-lg font-semibold text-foreground">{exp.role}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CalendarDays className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-primary/20 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
