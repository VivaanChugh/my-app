"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Calendar,
  Code,
  Database,
  Cpu,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-slate-50 text-slate-900 overflow-hidden">
      {/* Navigation Dots */}
      <Navigation activeSection={activeSection} />

      {/* Main Content Sections */}
      <HeroSection y={y} />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />

      {/* Decorative Background Elements */}
    </div>
  )
}

// Navigation dots on the right side
function Navigation({ activeSection }: { activeSection: string }) {
  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <motion.a
            key={section.id}
            href={`#${section.id}`}
            className="group relative"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === section.id ? "bg-blue-600 border-blue-600" : "border-slate-400 hover:border-blue-600"
              }`}
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-white px-2 py-1 rounded shadow-lg">
              {section.label}
            </span>
          </motion.a>
        ))}
      </div>
    </nav>
  )
}

// Hero section with name and intro
function HeroSection({ y }: { y: any }) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50"
    >
      {/* Background blur effects */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
            {/* Name and image section */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Name section */}
              <div className="text-center lg:text-left">
                {/* Name */}
                <motion.h1
                  className="text-6xl md:text-8xl lg:text-7xl xl:text-8xl font-bold mb-6"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
                    Vivaan
                  </span>
                  <br />
                  <span className="text-slate-800">Chugh</span>
                </motion.h1>
              </div>

              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex-shrink-0"
              >
                <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 relative">
                  <img
                    src="/PersonalPhoto (1).JPG"
                    alt="Vivaan Chugh"
                    className="w-full h-full rounded-full object-cover border-6 border-white shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-full" />
                  {/* Decorative ring */}
                  <div className="absolute -inset-4 rounded-full border-2 border-blue-200/30 animate-pulse" />
                </div>
              </motion.div>
            </div>

            {/* Content section below name and image */}
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              {/* Animated job titles */}
              <motion.div
                className="text-xl md:text-2xl lg:text-3xl text-slate-600 mb-8 font-light"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <TypewriterText
                  texts={[
                    "Computer Engineering Student",
                    "Software Developer",
                    "AI/ML Enthusiast",
                    "Data Engineer",
                    "Full-Stack Developer",
                  ]}
                />
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-lg text-slate-600 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Computer Engineering student at University of Waterloo with experience in full-stack development,
                machine learning, and robotics. Passionate about creating innovative solutions that make a difference.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link
                  href="https://github.com/VivaanChugh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
>
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/Resume_VivaanChugh.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-slate-300 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center gap-2"
                >
                  <FileText className="h-5 w-5" />
                  Download Resume
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Typewriter effect for job titles
function TypewriterText({ texts }: { texts: string[] }) {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex]

        if (isDeleting) {
          setCurrentText(current.substring(0, currentText.length - 1))
        } else {
          setCurrentText(current.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === current) {
          setTimeout(() => setIsDeleting(true), 1000)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentIndex((currentIndex + 1) % texts.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <span>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

// About section with profile and skills
function AboutSection() {
  // Stats to display
  const stats = [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies", value: "20+" },
    { label: "GPA", value: "3.8+" },
  ]

  // Skills with proficiency levels
  const skills = [
    { name: "Python", level: 95, icon: Code },
    { name: "JavaScript/TypeScript", level: 90, icon: Code },
    { name: "React/Next.js", level: 80, icon: Code },
    { name: "C/C++", level: 85, icon: Cpu },
    { name: "Machine Learning", level: 80, icon: Database },
    { name: "AWS/Cloud", level: 75, icon: Database },
  ]

  return (
    <section id="about" className="py-20 relative bg-white">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl rotate-6" />
                <div className="absolute inset-0 bg-white rounded-2xl p-8 flex items-center justify-center shadow-xl">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-white">
                      VC
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800">Vivaan Chugh</h3>
                    <p className="text-slate-600">Computer Engineering Student</p>
                    <div className="flex justify-center gap-4 mt-4">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-slate-600">Waterloo, ON</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About text and stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm a Computer Engineering student at the University of Waterloo with a passion for software development
              and emerging technologies. My experience spans full-stack development, machine learning, and robotics,
              with internships at leading companies like SBI Canada Bank and KnovaOne.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              Currently working with UW Orbital on satellite systems, I enjoy tackling complex technical challenges and
              building solutions that have real-world impact. My coursework in Digital Circuits, Linear Circuits, and
              Programming fundamentals provides a strong foundation for my practical work.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-slate-50 rounded-lg border border-slate-200"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <skill.icon className="w-8 h-8 text-blue-600" />
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-blue-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Experience timeline section
function ExperienceSection() {
  const experiences = [
    {
      title: "Software Developer",
      company: "UW Orbital",
      period: "January 2025 - Present",
      location: "Waterloo, ON",
      description:
        "Developing efficient software in C for satellite systems, optimizing performance on RM46 microcontroller. Implemented robust communication protocols achieving 28% improvement in data transmission reliability.",
      technologies: ["C", "Embedded Systems", "Microcontrollers", "Communication Protocols"],
    },
    {
      title: "Software Engineering Intern",
      company: "SBI Canada Bank",
      period: "May 2025 – August 2025",
      location: "Toronto, ON",
      description:
        "Developed DNN intranet module with C# and SQL Server for employee time log reports, improving efficiency by 60%. Led Flask web application development for compliance automation, reducing manual follow-ups by 70%.",
      technologies: ["C#", "SQL Server", "Flask", "Python", "PDF Generation"],
    },
    {
      title: "Software Engineering Intern",
      company: "KnovaOne",
      period: "May 2025 – August 2025",
      location: "Florida, USA",
      description:
        "Engineered document parsing backend in Python and MongoDB, improving review speed by 50%. Designed RBAC system using Flask-Login and SQLAlchemy for secure multi-user workflows.",
      technologies: ["Python", "MongoDB", "Flask", "SQLAlchemy", "RBAC"],
    },
    {
      title: "Software Developer",
      company: "Orbital Robotics",
      period: "September 2020 – June 2024",
      location: "Oakville, ON",
      description:
        "Developed automation algorithms in Java reducing execution time by 40% and increasing precision by 25%. Used SolidWorks for 3D modeling, collaborating with 50-person team to achieve top 10 provincial ranking.",
      technologies: ["Java", "SolidWorks", "3D Modeling", "Robotics", "Automation"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline dot and line */}
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10" />
                {index < experiences.length - 1 && <div className="absolute left-2 top-8 w-0.5 h-32 bg-slate-300" />}
              </div>

              {/* Experience card */}
              <div className="ml-8 bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors duration-300 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-600">{exp.title}</h3>
                    <p className="text-lg text-slate-800">{exp.company}</p>
                    <p className="text-sm text-slate-600">{exp.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-slate-700 mb-4">{exp.description}</p>

                {/* Technology tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Projects showcase section
function ProjectsSection() {
  const projects = [
    {
      title: "Findr: AI-Powered Hackathon Matchmaking",
      description:
        "Full-stack matchmaking platform connecting hackathon participants based on skills and interests. Features AI-powered resume parsing and dynamic user profiling.",
      image: "/gallery.jpg?height=300&width=400",
      
      technologies: ["FastAPI", "React", "Python", "MongoDB", "Gemini AI", "GCP"],
      github: "https://github.com/VivaanChugh",
      live: "#",
      category: "AI/ML",
      date: "March 2025",
    },
    {
      title: "Digit Classifier using CNN",
      description:
        "Convolutional Neural Network in PyTorch for handwritten digit classification from MNIST dataset with optimized performance and comprehensive metrics.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Python", "PyTorch", "TensorFlow", "Machine Learning", "CNN"],
      github: "https://github.com/VivaanChugh",
      live: "#",
      category: "Machine Learning",
      date: "March 2025",
    },
    {
      title: "Sales Data Analysis and Forecasting Tool",
      description:
        "Comprehensive data analysis tool with predictive modeling achieving 85% accuracy in sales forecasting. Features data cleaning, SQL optimization, and business insights.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "SQL"],
      github: "https://github.com/VivaanChugh",
      live: "#",
      category: "Data Science",
      date: "March 2025",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto" />
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              {/* Project image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-600/90 text-white rounded-full text-sm backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm">{project.date}</span>
                </div>
              </div>

              {/* Project details */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-slate-600 mb-4 line-clamp-3">{project.description}</p>

                {/* Technology tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-slate-100 text-blue-700 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact information section
function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6" />
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Interested in collaborating or have opportunities to discuss? I'd love to hear from you!
          </p>
        </motion.div>

        {/* Contact information */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 max-w-md"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-slate-600">vivaanc190@gmail.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-slate-600">Waterloo, ON</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social media links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/VivaanChugh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 border border-slate-200"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/vivaan-chugh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 border border-slate-200"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:vivaanc190@gmail.com"
                  
                  className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 border border-slate-200"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
