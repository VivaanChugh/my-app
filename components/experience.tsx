import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeInSection } from "./fade-in-section"

export function Experience() {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "SBI Canada Bank",
      location: "Toronto, ON",
      period: "May 2025 - August 2025",
      description: [
        
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "KnovaOne",
      location: "Florida, USA",
      period: "May 2025 - August 2025",
      description: [
        
      ]
    },
    {
      title: "Software Developer",
      company: "UW Orbital",
      location: "Waterloo, ON",
      period: "January 2025 - Present",
      description: [
        "Developed efficient software in C for satellite systems, optimizing performance and resource utilization on the RM46 microcontroller while ensuring robust operation in space-critical environments through error handling.",
        "Implemented and debugged robust communication protocols for satellite systems, resulting in a 28% improvement in data transmission reliability in simulated space environments."
      ]
    },
    {
      title: "Software Programmer",
      company: "Orbital Robotics",
      location: "Oakville, ON",
      period: "September 2020 – June 2023",
      description: [
        "Developed advanced automation algorithms in Java to optimize robotic movement patterns, reducing execution time by 40% while enhancing path efficiency and increasing operational precision by 25%.",
        "Utilized SolidWorks to design, refine, and simulate 3D models of critical robot components, collaborating closely with a 50-person team to enhance functionality and secure a top 10 ranking in provincial robotics competitions."
      ]
    },
    {
      title: "President, Hackathon",
      company: "Hack The Ridge",
      location: "Oakville, ON",
      period: "September 2023 – June 2024",
      description: [
        "Led strategic planning with a team of 10 student executives, resulting in a 75% increase in participant registration and expanding the event to include 200+ students from across the region.",
        "Secured over $10,000 in sponsorships by developing compelling partnership packages, enabling the purchase of new equipment and doubling the prize pool for competitors."
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