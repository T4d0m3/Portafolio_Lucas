"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  index: number
  githubLink?: string
}

export default function ProjectCard({ title, description, tags, index, githubLink }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group relative bg-black/40 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-all duration-500 neon-border"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur"></div>
      <div className="relative flex flex-col h-full">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 neon-text">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <Badge key={i} variant="outline" className="border-primary/30 text-primary/80 text-xs neon-box">
              <span className="relative z-10">{tag}</span>
            </Badge>
          ))}
        </div>

        <div className="flex gap-4">
          {githubLink && (
            <Button
              variant="ghost"
              className="w-fit p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group"
              asChild
            >
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Github className="mr-1 h-4 w-4 transition-transform group-hover:scale-110 duration-300" />
                <span className="neon-text">GitHub</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

