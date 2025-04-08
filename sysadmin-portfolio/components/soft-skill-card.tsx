"use client"

import type React from "react"

import { motion } from "framer-motion"

interface SoftSkillCardProps {
  name: string
  description: string
  icon: React.ReactNode
  index: number
}

export default function SoftSkillCard({ name, description, icon, index }: SoftSkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group relative bg-black/40 backdrop-blur-sm border border-primary/20 rounded-sm p-4 hover:border-primary/50 transition-all duration-300 neon-border"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>

      <div className="relative">
        {/* Esquinas decorativas industriales */}
        <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-primary"></div>
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-primary"></div>
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-primary"></div>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-primary"></div>

        <div className="flex flex-col items-center text-center p-2">
          <div className="p-3 rounded-full bg-black/50 border border-primary/20 w-fit mb-3 neon-box">
            <div className="relative z-10">{icon}</div>
          </div>

          <h3 className="text-lg font-bold mb-2 neon-text">{name}</h3>

          <div className="w-12 h-0.5 bg-primary/50 mb-3"></div>

          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

