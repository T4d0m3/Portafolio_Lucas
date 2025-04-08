"use client"

import type React from "react"

import { motion } from "framer-motion"

interface SkillBarProps {
  name: string
  percentage: number
  icon: React.ReactNode
  index: number
}

export default function SkillBar({ name, percentage, icon, index }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group relative bg-black/40 backdrop-blur-sm border border-primary/20 rounded-sm p-4 hover:border-primary/50 transition-all duration-300 neon-border"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>

      <div className="relative flex items-center gap-3 mb-2">
        <div className="p-2 rounded-sm bg-black/50 border border-primary/20 neon-box">
          <div className="relative z-10 text-primary">{icon}</div>
        </div>
        <h3 className="font-mono text-sm">{name}</h3>
      </div>

      <div className="relative h-2 w-full bg-black/60 rounded-sm overflow-hidden border border-primary/30">
        <motion.div
          className="absolute top-0 left-0 h-full bg-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
          viewport={{ once: true }}
        />

        {/* Efecto de escaneo */}
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan"></div>
      </div>

      <div className="mt-1 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-1 h-3 bg-primary/50 mr-1"></div>
          <span className="text-xs font-mono text-primary/80">LEVEL</span>
        </div>
        <span className="text-xs font-mono">{percentage}%</span>
      </div>
    </motion.div>
  )
}

