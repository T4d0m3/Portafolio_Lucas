"use client"

import type React from "react"

import { motion } from "framer-motion"

interface HabitCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

export default function HabitCard({ icon, title, description, index }: HabitCardProps) {
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
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-lg bg-black/50 border border-primary/20 w-fit neon-box">
            <div className="relative z-10">{icon}</div>
          </div>
          <div className="w-12 h-12 flex items-center justify-center rounded-full border border-primary/30 bg-black/50 neon-box">
            <span className="text-xl font-bold text-primary neon-text">{index + 1}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 neon-text">{title}</h3>
        <p className="text-gray-400 text-sm flex-grow">{description}</p>
      </div>
    </motion.div>
  )
}

