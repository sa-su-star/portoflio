"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Code, GraduationCap, Briefcase, Award } from "lucide-react"

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="w-20 h-1 bg-primary mx-auto mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-08%20at%202.17.53%20PM-wUIWN1YxYfl3PeQPp6UCkpyU0YGzVF.jpeg"
              alt="Sameh Darwesh coding"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full z-[-1]"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full z-[-1]"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Sameh Darwesh</h3>
          <h4 className="text-xl text-primary mb-6">Frontend Angular Developer</h4>

          <p className="text-muted-foreground mb-6">
            I'm a passionate and dedicated Frontend Engineer specializing in Angular with over 2 years of professional
            experience in building modern, scalable, and user-centric web applications. My journey began with a deep
            curiosity about creating digital experiences that make a real difference in people's lives.
          </p>

          <p className="text-muted-foreground mb-6">
            Throughout my career at Shgardi, COE, and currently at Encooders, I've had the privilege of working on
            diverse projects ranging from food delivery platforms to enterprise-level applications. I believe in the
            power of clean, maintainable code and am committed to staying at the forefront of frontend technologies.
          </p>

          <p className="text-muted-foreground mb-8">
            <strong>My Vision:</strong> To create exceptional digital experiences that seamlessly blend functionality
            with beautiful design, while continuously learning and sharing knowledge with the developer community. I'm
            passionate about mentoring others and contributing to the evolution of modern web development.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <Code className="h-5 w-5 text-primary mr-2" />
              <span>2+ Years Experience</span>
            </div>
            <div className="flex items-center">
              <GraduationCap className="h-5 w-5 text-primary mr-2" />
              <span>Computer Science</span>
            </div>
            <div className="flex items-center">
              <Briefcase className="h-5 w-5 text-primary mr-2" />
              <span>20+ Projects Delivered</span>
            </div>
            <div className="flex items-center">
              <Award className="h-5 w-5 text-primary mr-2" />
              <span>Senior Engineer</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
