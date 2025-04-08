"use client"

import type React from "react"

import { motion } from "framer-motion"

interface SkillCardProps {
  icon: React.ReactNode
  name: string
  description: string
  index: number
}

export default function SkillCard({ icon, name, description, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-black/40 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 neon-border"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
      <div className="relative flex flex-col h-full">
        <div className="p-3 rounded-lg bg-black/50 border border-primary/20 w-fit mb-4 neon-box">
          <div className="relative z-10">{icon}</div>
        </div>
        <h3 className="text-xl font-bold mb-2 neon-text">{name}</h3>
        <p className="text-gray-400 text-sm flex-grow">{description}</p>
      </div>
    </motion.div>
  )
}

