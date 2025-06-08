"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Animation effect similar to GSAP
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center py-20 md:py-0"
    >
      <div className="w-full md:w-1/2 space-y-6 md:pr-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-lg font-medium text-primary">Hello, I'm</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-2">Sameh Darwesh</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mt-4">Frontend Angular Developer</p>
        </motion.div>

        <motion.p
          className="text-muted-foreground max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Senior Frontend Engineer specializing in Angular development. I create scalable, performant web applications
          with modern technologies, focusing on exceptional user experiences and clean, maintainable code architecture.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Button size="lg">
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Download CV
            <Download className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BG_Image.jpg-Uo4Wk45bD69S4r3PYCP8v2xNuWXYzR.jpeg"
            alt="Sameh Darwesh"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  )
}
