"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface CertificateCardProps {
  title: string
  issuer: string
  date: string
  credentialLink?: string
  image?: string
  index: number
}

export default function CertificateCard({ title, issuer, date, credentialLink, image, index }: CertificateCardProps) {
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
        {image && (
          <div className="mb-4 w-full overflow-hidden rounded-md border border-primary/30">
            <Image
              src={image || "/placeholder.svg"}
              alt={`${title} Certificate`}
              width={600}
              height={400}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-3 rounded-lg bg-black/50 border border-primary/20 w-fit mb-4 neon-box">
          <Award className="h-6 w-6 relative z-10 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-2 neon-text">{title}</h3>
        <p className="text-gray-400 text-sm mb-1">Issued by: {issuer}</p>
        <p className="text-gray-500 text-xs mb-4">{date}</p>

        {credentialLink && (
          <Button
            variant="ghost"
            className="w-fit p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group mt-auto"
            asChild
          >
            <a href={credentialLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <span className="neon-text">View Credential</span>
              <ExternalLink className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  )
}

