"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Angular E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with Angular featuring product catalog, shopping cart, user authentication, and payment integration with Stripe.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["Angular", "NgRx", "Angular Material", "Stripe API"],
    liveUrl: "https://angular-ecommerce-platform.netlify.app/",
    githubUrl: "https://github.com/ikismail/Angular-ShoppingCart",
  },
  {
    title: "Task Management Dashboard",
    description:
      "A comprehensive project management tool with Kanban boards, real-time collaboration, task tracking, and team management features built with Angular and Firebase.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    tags: ["Angular", "Firebase", "RxJS", "Angular CDK"],
    liveUrl: "https://angular-kanban-fire.web.app/",
    githubUrl: "https://github.com/trungk18/angular-kanban",
  },
  {
    title: "Real Estate Listing App",
    description:
      "A modern real estate platform with property search, filtering, interactive maps, and detailed property views using Angular and Google Maps API.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    tags: ["Angular", "Google Maps API", "Angular Material", "TypeScript"],
    liveUrl: "https://angular-realtor-app.netlify.app/",
    githubUrl: "https://github.com/bobbyg603/angular-realtor-app",
  },
  {
    title: "Weather Forecast Application",
    description:
      "A responsive weather application with location-based forecasts, detailed weather data, and beautiful visualizations using OpenWeatherMap API.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
    tags: ["Angular", "OpenWeather API", "Chart.js", "PWA"],
    liveUrl: "https://angular-weather-pwa.netlify.app/",
    githubUrl: "https://github.com/angular-material-extensions/weather",
  },
  {
    title: "Social Media Dashboard",
    description:
      "An analytics dashboard for social media management with data visualization, post scheduling, and engagement tracking features.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Angular", "D3.js", "NgRx", "REST API"],
    liveUrl: "https://angular-social-dashboard.vercel.app/",
    githubUrl: "https://github.com/creativetimofficial/material-dashboard-angular2",
  },
  {
    title: "Personal Finance Tracker",
    description:
      "A comprehensive personal finance application with expense tracking, budget management, financial goals, and detailed reporting features.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    tags: ["Angular", "Chart.js", "Local Storage", "PWA"],
    liveUrl: "https://angular-expense-tracker.netlify.app/",
    githubUrl: "https://github.com/johnpapa/angular-expenses",
  },
]

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3)

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length))
  }

  return (
    <section id="projects" className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <motion.div
          className="w-20 h-1 bg-primary mx-auto mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {visibleProjects < projects.length && (
        <div className="flex justify-center mt-12">
          <Button onClick={loadMore} size="lg">
            Load More Projects
          </Button>
        </div>
      )}
    </section>
  )
}
