import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeInSection } from "./fade-in-section"

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C", "C++", "Python", "Java", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Frameworks/Libraries",
      skills: ["React", "Next.js", "Flask", "Pandas", "Matplotlib", "Difflib"]
    },
    {
      title: "Tools & Others",
      skills: ["Excel", "SolidWorks", "Arduino", "Git", "GitHub"]
    }
  ]

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {skillCategories.map((category, index) => (
        <FadeInSection key={index}>
          <Card>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge key={i}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeInSection>
      ))}
    </div>
  )
}

