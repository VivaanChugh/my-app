import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeInSection } from "./fade-in-section"

export function Experience() {
  const experiences = [
    {
      title: "Hackathon Event: Hack The Ridge - President",
      company: "Iroquois Ridge High School",
      location: "Oakville, ON",
      period: "September 2021 – June 2024",
      description: [
        "Led and managed a team of 10 executives, fostering collaboration and driving strategic initiatives",
        "Secured sponsorships to support team activities, ensuring financial sustainability and expanding opportunities",
        "Coordinated and facilitated the setup of a hackathon event, overseeing logistics, team operations, and more"
      ]
    },
    {
      title: "Python Lead Teacher",
      company: "Coding is Fun",
      location: "Oakville, ON",
      period: "September 2022 – June 2024",
      description: [
        "Delivered engaging Python lessons to students, ensuring comprehensive understanding of key programming concepts",
        "Regularly evaluated and provided feedback on weekly homework assignments to track student progress",
        "Managed classroom activities, including answering student queries to maintain a smooth learning environment"
      ]
    },
    {
      title: "Assistant Teacher",
      company: "Halton STEM Robotics",
      location: "Oakville, ON",
      period: "July 2023 - August 2023",
      description: [
        "Assisted in planning lessons on Microbits and Tinkercad design, making a dynamic learning environment",
        "Provided mentorship and technical support to students, helping them understand and apply concepts in Microbits, coding, and 3D modeling using Tinkercad",
        "Supervised students during activities, ensuring their safety while fostering a collaborative learning atmosphere where they could confidently explore technology and problem-solving"
      ]
    },
    {
      title: "Programming and Design Team Member",
      company: "First Robotics Competition - 1360",
      location: "Oakville, ON",
      period: "September 2020 – June 2023",
      description: [
        "Utilized SolidWorks for 3D modeling and design, contributing to the creation and refinement of the robot in collaboration with the team",
        "Programmed key functionalities using Java, implementing software solutions to optimize performance",
        "Participated in various competitions throughout the season, applying technical knowledge to achieve goals"
      ]
    }
  ]

  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <FadeInSection key={index}>
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{exp.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </FadeInSection>
      ))}
    </div>
  )
}

