"use client"

import { Terminal, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function IndustrialFooter() {
  const handleNavClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="relative py-12 border-t border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Terminal className="h-6 w-6 text-primary" />
                <div className="absolute inset-0 bg-primary/30 blur-md rounded-full -z-10"></div>
              </div>
              <span className="font-mono text-xl font-bold tracking-tight text-primary neon-text">SYS.ADMIN</span>
            </div>
            <p className="text-gray-400 text-sm">
              Building and maintaining robust, secure, and scalable infrastructure for the digital world.
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-primary/50 hover:border-primary hover:bg-primary/10 neon-box"
                onClick={() => window.open("https://github.com/T4d0m3", "_blank")}
              >
                <Github className="h-5 w-5 relative z-10" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-primary/50 hover:border-primary hover:bg-primary/10 neon-box"
                onClick={() => window.open("https://www.linkedin.com/in/lucas-pampillon-969b04178", "_blank")}
              >
                <Linkedin className="h-5 w-5 relative z-10" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold neon-text">Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("#about")
                }}
                className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
              >
                <ChevronRight className="h-4 w-4 text-primary" />
                <span>About Me</span>
              </a>
              <a
                href="#resume"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("#resume")
                }}
                className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
              >
                <ChevronRight className="h-4 w-4 text-primary" />
                <span>Resume</span>
              </a>
              <a
                href="#certificates"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("#certificates")
                }}
                className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
              >
                <ChevronRight className="h-4 w-4 text-primary" />
                <span>Certificates</span>
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("#projects")
                }}
                className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
              >
                <ChevronRight className="h-4 w-4 text-primary" />
                <span>Projects</span>
              </a>
              <a
                href="#habits"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("#habits")
                }}
                className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
              >
                <ChevronRight className="h-4 w-4 text-primary" />
                <span>7 HHEP</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("#contact")
                }}
                className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
              >
                <ChevronRight className="h-4 w-4 text-primary" />
                <span>Contact</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold neon-text">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-gray-400">
                <div className="relative">
                  <Mail className="h-5 w-5 text-primary" />
                  <div className="absolute inset-0 bg-primary/30 blur-sm rounded-full -z-10"></div>
                </div>
                <span>l.pampillon@sapalomera.cat</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="relative">
                  <Terminal className="h-5 w-5 text-primary" />
                  <div className="absolute inset-0 bg-primary/30 blur-sm rounded-full -z-10"></div>
                </div>
                <span>System Administrator</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} System Administrator Portfolio. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 text-sm hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Elementos decorativos industriales */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="absolute bottom-0 left-1/4 w-20 h-1 bg-primary/30"></div>
      <div className="absolute bottom-0 right-1/4 w-20 h-1 bg-primary/30"></div>

      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary/5 blur-3xl"></div>
    </footer>
  )
}

// Componente ChevronRight para el footer
function ChevronRight({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  )
}

