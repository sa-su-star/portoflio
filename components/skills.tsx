"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Layout, Smartphone, Database, GitBranch, Layers } from "lucide-react"

const skills = [
  {
    title: "Angular Development",
    icon: <Layout className="h-10 w-10 text-primary" />,
    description:
      "Expert in Angular framework with deep knowledge of components, services, and modern Angular features.",
    technologies: ["Angular 17+", "TypeScript", "RxJS", "NgRx", "Angular CLI", "Angular Universal"],
  },
  {
    title: "State Management",
    icon: <Database className="h-10 w-10 text-primary" />,
    description: "Proficient in managing complex application state using NgRx and reactive programming patterns.",
    technologies: ["NgRx", "RxJS", "Observables", "State Patterns", "Redux DevTools"],
  },
  {
    title: "UI/UX Implementation",
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    description: "Creating responsive, accessible, and beautiful user interfaces with modern CSS frameworks.",
    technologies: ["Angular Material", "Bootstrap", "SCSS/SASS", "Tailwind CSS", "CSS Grid", "Flexbox"],
  },
  {
    title: "JavaScript Ecosystem",
    icon: <Code className="h-10 w-10 text-primary" />,
    description: "Strong foundation in modern JavaScript and TypeScript with build tools and package management.",
    technologies: ["ES6+", "TypeScript", "Webpack", "Vite", "npm/yarn", "Module Bundlers"],
  },
  {
    title: "API Integration",
    icon: <GitBranch className="h-10 w-10 text-primary" />,
    description: "Experience with RESTful APIs, GraphQL, and real-time data integration in Angular applications.",
    technologies: ["REST APIs", "GraphQL", "HTTP Client", "WebSockets", "Firebase", "Authentication"],
  },
  {
    title: "Testing & Quality",
    icon: <Layers className="h-10 w-10 text-primary" />,
    description: "Ensuring code quality through comprehensive testing strategies and modern development practices.",
    technologies: ["Jasmine", "Karma", "Jest", "Cypress", "Unit Testing", "E2E Testing"],
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const skillCards = document.querySelectorAll(".skill-card")
    skillCards.forEach((card) => observer.observe(card))

    return () => {
      skillCards.forEach((card) => observer.unobserve(card))
    }
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.div
          className="w-20 h-1 bg-primary mx-auto mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
