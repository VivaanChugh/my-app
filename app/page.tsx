import { Nav } from '@/components/nav'
import { Section } from '@/components/section'
import { SocialLinks } from '@/components/social-links'
import { NetworkAnimation } from '@/components/network-animation'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { FadeInSection } from '@/components/fade-in-section'
import { TypingAnimation } from '@/components/typing-animation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <>
      <NetworkAnimation />
      <div className="min-h-screen bg-transparent">
        <Nav />
        
        <Section id="about" title="About Me">
          <FadeInSection>
            <div className="space-y-6">
              <TypingAnimation key="typing-animation" text="Hey, I am Vivaan Chugh!" delay={160} />
              <div className="space-y-4 text-foreground">
                <p>
                  I am a passionate Computer Engineering student at the University of Waterloo, 
                  with a keen interest in software development, robotics, and machine learning. 
                  My diverse experience ranges from leading hackathons to teaching Python, 
                  showcasing my ability to both create and share knowledge in the tech world.
                </p>
                <p>
                  When I am not coding or working on projects, you can find me exploring new 
                  technologies, participating in robotics competitions, or collaborating with 
                  peers on innovative solutions to real-world problems.
                </p>
              </div>
              <SocialLinks />
            </div>
          </FadeInSection>
        </Section>

        <Section id="education" title="Education">
          <FadeInSection>
            <Card>
              <CardHeader>
                <CardTitle>University of Waterloo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Candidate for BASc. in Computer Engineering</p>
                <p className="text-sm text-muted-foreground">Sep. 2024 – April 2029</p>
                <p> Cumulative Average: 82%</p>
                <ul className="list-disc list-inside mt-2 text-sm">
                  <li>University of Waterloo President Scholarship of Distinction</li>
                  <li>Nortel Networks Undergraduate Scholarship</li>
                </ul>
              </CardContent>
            </Card>
          </FadeInSection>
        </Section>

        <Section id="experience" title="Experience">
          <Experience />
        </Section>

        <Section id="skills" title="Skills">
          <Skills />
        </Section>

        <Section id="projects" title="Projects">
          <Projects />
        </Section>
      </div>
    </>
  )
}

