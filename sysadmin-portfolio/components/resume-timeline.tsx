"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"

interface TimelineItemProps {
  title: string
  organization: string
  period: string
  description: string
  type: "work" | "education"
  index: number
  location?: string
}

export default function ResumeTimeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <div className="relative">
      {/* Línea vertical */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 transform md:translate-x-[-0.5px]"></div>

      <div className="space-y-12">
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} index={index} />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ title, organization, period, description, type, index, location }: TimelineItemProps) {
  // Forzar que el primer elemento esté a la izquierda y el segundo a la derecha
  const isLeft = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {/* Punto en la línea de tiempo */}
      <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-black border-2 border-primary rounded-full transform translate-x-[-14px] md:translate-x-[-16px] flex items-center justify-center z-10 neon-box">
        <div className="relative z-10">
          {type === "work" ? (
            <Briefcase className="h-4 w-4 text-primary" />
          ) : (
            <GraduationCap className="h-4 w-4 text-primary" />
          )}
        </div>
      </div>

      {/* Contenido para la izquierda */}
      {isLeft ? (
        <>
          <div className="md:col-span-1 pl-16 md:pl-0 md:pr-12">
            <div className="bg-black/40 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/30 transition-all duration-300 neon-border group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
              <div className="relative">
                <span className="text-xs text-primary/80 font-mono tracking-wider">{period}</span>
                {location && <span className="text-xs text-gray-400 font-mono ml-2">| {location}</span>}
                <h3 className="text-xl font-bold mt-1 mb-1 neon-text">{title}</h3>
                <h4 className="text-base text-gray-300 mb-3">{organization}</h4>
                <p className="text-gray-400 text-sm">{description}</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block"></div>
        </>
      ) : (
        <>
          <div className="hidden md:block"></div>
          <div className="md:col-span-1 pl-16 md:pl-0">
            <div className="bg-black/40 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/30 transition-all duration-300 neon-border group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
              <div className="relative">
                <span className="text-xs text-primary/80 font-mono tracking-wider">{period}</span>
                {location && <span className="text-xs text-gray-400 font-mono ml-2">| {location}</span>}
                <h3 className="text-xl font-bold mt-1 mb-1 neon-text">{title}</h3>
                <h4 className="text-base text-gray-300 mb-3">{organization}</h4>
                <p className="text-gray-400 text-sm">{description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </motion.div>
  )
}

