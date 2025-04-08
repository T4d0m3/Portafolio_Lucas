"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Terminal, Menu, X, ChevronRight, FileText, Award, FolderOpen, Users, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function IndustrialNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const handleNavClick = (href) => {
    if (isOpen) toggleMenu()
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }

  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
      },
    },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  // Actualizado el orden de los elementos del menú según lo solicitado
  const menuItems = [
    { name: "About Me", href: "#about", icon: <Terminal className="h-6 w-6" /> },
    { name: "Resume", href: "#resume", icon: <FileText className="h-6 w-6" /> },
    { name: "Certificates", href: "#certificates", icon: <Award className="h-6 w-6" /> },
    { name: "Projects", href: "#projects", icon: <FolderOpen className="h-6 w-6" /> },
    { name: "7 HHEP", href: "#habits", icon: <Users className="h-6 w-6" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="h-6 w-6" /> },
  ]

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 industrial-navbar transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <a href="#" className="flex items-center gap-2">
              <div className="relative">
                <Terminal className="h-6 w-6 text-primary" />
                <div className="absolute inset-0 bg-primary/30 blur-md rounded-full -z-10"></div>
              </div>
              <span className="font-mono text-xl font-bold tracking-tight text-primary neon-text glitch-text">
                SYS.ADMIN
              </span>
            </a>
          </motion.div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition-colors relative group cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                >
                  <span className="neon-text">{item.name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/20 neon-box hidden md:flex"
              onClick={() => handleNavClick("#resume")}
            >
              <span className="relative z-10">Resume</span>
            </Button>

            <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-md -z-10"></div>
              {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
            </Button>
          </div>
        </div>

        {/* Líneas decorativas industriales */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-1/4 w-20 h-1 bg-primary/30"></div>
        <div className="absolute bottom-0 right-1/4 w-20 h-1 bg-primary/30"></div>
      </header>

      {/* Menú móvil a pantalla completa - REDISEÑADO Y CORREGIDO */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md overflow-hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Fondo con efectos */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Gradientes de fondo */}
              <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-70"></div>
              <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-70"></div>

              {/* Círculos decorativos */}
              <div className="absolute top-[10%] left-[10%] w-40 h-40 rounded-full bg-primary/5 blur-3xl"></div>
              <div className="absolute bottom-[10%] right-[10%] w-60 h-60 rounded-full bg-primary/5 blur-3xl"></div>

              {/* Líneas horizontales */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

              {/* Líneas verticales */}
              <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>
              <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>

              {/* Esquinas decorativas */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/30"></div>
              <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-primary/30"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-primary/30"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/30"></div>
            </div>

            {/* Botón de cierre en la esquina superior derecha */}
            <div className="absolute top-4 right-4">
              <Button variant="ghost" size="icon" onClick={toggleMenu} className="relative">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-md -z-10"></div>
                <X className="h-6 w-6 text-primary" />
              </Button>
            </div>

            {/* Logo en la parte superior */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="relative">
                <Terminal className="h-6 w-6 text-primary" />
                <div className="absolute inset-0 bg-primary/30 blur-md rounded-full -z-10"></div>
              </div>
              <span className="font-mono text-xl font-bold tracking-tight text-primary neon-text">SYS.ADMIN</span>
            </div>

            {/* Contenido del menú - CORREGIDO para adaptarse a todas las pantallas */}
            <div className="h-full w-full flex flex-col justify-center items-center px-4 sm:px-6">
              <div className="w-full max-w-md mx-auto">
                <div className="space-y-4">
                  {menuItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      custom={i}
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <a
                        href={item.href}
                        className="flex items-center w-full gap-4 p-3 rounded-lg hover:bg-primary/10 transition-colors group cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick(item.href)
                        }}
                      >
                        <div className="relative flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-black/70 border border-primary/30 neon-box">
                          <div className="relative z-10 text-primary">{item.icon}</div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xl font-bold neon-text truncate">{item.name}</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                      </a>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  custom={menuItems.length}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="mt-8 px-3"
                >
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/20 neon-box w-full"
                    onClick={() => handleNavClick("#resume")}
                  >
                    <span className="relative z-10">Download CV</span>
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Texto decorativo en la parte inferior */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-xs text-primary/50 font-mono tracking-wider">
                SYSTEM.ADMINISTRATOR // NETWORK.ENGINEER
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

