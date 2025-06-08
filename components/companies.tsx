"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays } from "lucide-react"

const companies = [
  {
    name: "Encooders",
    role: "Senior Frontend Engineer",
    period: "June 2024 - Present",
    description:
      "Currently serving as Senior Frontend Engineer, leading the architecture and development of complex Angular applications. Responsible for code reviews, mentoring junior developers, and implementing best practices across the development team. Focus on creating scalable, maintainable solutions using modern Angular features.",
    technologies: ["Angular 17+", "TypeScript", "RxJS", "NgRx", "Angular Material", "SCSS", "Jest", "Cypress"],
    achievements: [
      "Led migration of legacy applications to Angular 17",
      "Implemented micro-frontend architecture",
      "Reduced bundle size by 40% through optimization",
    ],
  },
  {
    name: "COE",
    role: "Senior Frontend Engineer",
    period: "June 2023 - January 2025",
    description:
      "Promoted to Senior Frontend Engineer role, taking ownership of enterprise-level web application development. Collaborated closely with UX/UI designers and backend teams to deliver pixel-perfect, performant applications. Established coding standards and development workflows for the frontend team.",
    technologies: ["Angular", "TypeScript", "RxJS", "Bootstrap", "RESTful APIs", "Git", "Azure DevOps"],
    achievements: [
      "Delivered 5+ enterprise applications on time",
      "Improved application performance by 35%",
      "Mentored 3 junior developers",
    ],
  },
  {
    name: "Shgardi",
    role: "Frontend Developer",
    period: "2023 - June 2024",
    description:
      "Started my professional journey developing and maintaining features for a comprehensive food delivery platform. Gained extensive experience in responsive design, API integration, and modern Angular development practices while working in an agile environment.",
    technologies: ["Angular", "JavaScript", "SCSS", "Angular Material", "Firebase", "Git"],
    achievements: [
      "Developed 10+ responsive web components",
      "Integrated payment gateway systems",
      "Improved user experience metrics by 25%",
    ],
  },
]

export default function Companies() {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="companies" ref={sectionRef} className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        <motion.div
          className="w-20 h-1 bg-primary mx-auto mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>

      <div className="space-y-8">
        {companies.map((company, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{company.name}</h3>
                    <p className="text-primary font-medium">{company.role}</p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <CalendarDays className="h-4 w-4 text-muted-foreground mr-1" />
                    <span className="text-sm text-muted-foreground">{company.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{company.description}</p>

                {company.achievements && (
                  <div className="mb-4">
                    <h4 className="font-medium mb-2 text-sm">Key Achievements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {company.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {company.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
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
