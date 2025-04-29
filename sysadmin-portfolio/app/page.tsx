"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Terminal,
  Users,
  Mail,
  Github,
  Linkedin,
  Code,
  BrainCircuit,
  Lightbulb,
  Repeat,
  Target,
  Handshake,
  HeartHandshake,
  Hammer,
  Download,
  Server,
  Shield,
  Database,
  Cloud,
  Cpu,
  Zap,
  BookOpen,
  Clock,
  MessageSquare,
  Briefcase,
} from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import ServerModel from "@/components/server-model"
import ProjectCard from "@/components/project-card"
import CertificateCard from "@/components/certificate-card"
import HabitCard from "@/components/habit-card"
import ResumeTimeline from "@/components/resume-timeline"
import ContactForm from "@/components/contact-form"
import IndustrialNavbar from "@/components/industrial-navbar"
import IndustrialFooter from "@/components/industrial-footer"
import StarryBackground from "@/components/starry-background"
import SpaceDust from "@/components/space-dust"
import SkillBar from "@/components/skill-bar"
import SoftSkillCard from "@/components/soft-skill-card"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Aplicar clase dark al body para mantener el tema oscuro
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  const skills = [
    {
      icon: <Terminal className="h-8 w-8" />,
      name: "Server Management",
      description: "Linux & Windows server administration, virtualization, and cloud infrastructure management.",
    },
    {
      icon: <Code className="h-8 w-8" />,
      name: "Network Administration",
      description: "LAN/WAN configuration, firewall setup, VPN implementation, and network security.",
    },
    {
      icon: <BrainCircuit className="h-8 w-8" />,
      name: "Database Administration",
      description: "SQL & NoSQL database management, optimization, backup, and recovery procedures.",
    },
  ]

  // Hard Skills con porcentajes de dominio
  const hardSkills = [
    { name: "Linux Administration", percentage: 95, icon: <Terminal className="h-5 w-5" /> },
    { name: "Windows Server", percentage: 90, icon: <Server className="h-5 w-5" /> },
    { name: "Network Security", percentage: 85, icon: <Shield className="h-5 w-5" /> },
    { name: "Secure Networking", percentage: 85, icon: <Shield className="h-5 w-5" /> },
    { name: "AWS Cloud", percentage: 88, icon: <Cloud className="h-5 w-5" /> },
    { name: "Docker & Docker Swarm", percentage: 85, icon: <Database className="h-5 w-5" /> },
    { name: "Monitoring Systems", percentage: 92, icon: <Zap className="h-5 w-5" /> },
    { name: "Database Management", percentage: 87, icon: <Database className="h-5 w-5" /> },
    { name: "Shell Scripting", percentage: 90, icon: <Terminal className="h-5 w-5" /> },
    { name: "Python", percentage: 75, icon: <Code className="h-5 w-5" /> },
    { name: "Threat Analysis", percentage: 75, icon: <Code className="h-5 w-5" /> },
    { name: "Penetration Testing ", percentage: 75, icon: <Code className="h-5 w-5" /> },
  ]

  // Soft Skills
  const softSkills = [
    {
      name: "Problem Solving",
      description: "Analytical approach to complex technical challenges",
      icon: <BrainCircuit className="h-6 w-6 text-primary" />,
    },
    {
      name: "Communication",
      description: "Clear technical communication with teams and stakeholders",
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
    },
    {
      name: "Leadership",
      description: "Team leadership and project coordination",
      icon: <Users className="h-6 w-6 text-primary" />,
    },
    {
      name: "Time Management",
      description: "Efficient prioritization of tasks and deadlines",
      icon: <Clock className="h-6 w-6 text-primary" />,
    },
    {
      name: "Adaptability",
      description: "Quick adaptation to new technologies and environments",
      icon: <Repeat className="h-6 w-6 text-primary" />,
    },
    {
      name: "Continuous Learning",
      description: "Commitment to ongoing professional development",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
    },
  ]

  // Reemplazar el array de proyectos con un solo proyecto
  const projects = [
    {
      title: "Sistema de Gestión de Incidencias de IT",
      description:
        "Plataforma integral para la gestión, seguimiento y resolución de incidencias técnicas en entornos empresariales. Optimiza el flujo de trabajo del departamento de IT y mejora los tiempos de respuesta.",
      tags: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/BrandonMieres/Gestion-de-incidencias-IT",
    },
  ]

  const certificates = [
    {
      title: "Ethical Hacker",
      issuer: "Cisco Networking Academy",
      date: "2023",
      credentialLink: "#",
      image: "/cisco-certificate.png",
    },
  ]

  // Actualizado con el contenido personalizado
  const habits = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Be Proactive",
      description:
        "After a narrow loss in a volleyball match, I identified an opportunity for team improvement through game footage analysis. I proposed and facilitated a session to review the video, encouraging constructive discussions on strengths, weaknesses, positioning, and communication. This initiative enhanced technical skills, teamwork, and mutual understanding, resulting in improved performance and stronger bonds. It reflects my proactive mindset, where I could provide a solution to a problem we were facing.",
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Begin with the End in Mind",
      description:
        "My mission is to empower and inspire growth, connection, and understanding by offering clear guidance, creative solutions, and meaningful support. Through knowledge, adaptability, and collaboration, I aim to help others unlock their potential, overcome challenges, and create a positive impact in their lives and communities.",
    },
    {
      icon: <Hammer className="h-8 w-8 text-primary" />,
      title: "Put First Things First",
      description:
        "Big Rocks: Career advancement, meaningful relationships, and personal growth. Pebbles: Daily responsibilities like walking my dogs, prioritizing homework and studies, and training physically and mentally. Sand: Low-priority distractions such as excessive social media, unnecessary meetings, and procrastination.",
    },
    {
      icon: <Handshake className="h-8 w-8 text-primary" />,
      title: "Think Win-Win",
      description:
        "Win-Win Experience: Studying Together. A friend and I struggled with a subject, so we teamed up. I explained concepts, and they helped me stay organized. We both improved our grades and strengthened our friendship, proving that collaboration leads to mutual growth.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Seek First to Understand",
      description:
        "Effective communication starts with listening—truly understanding others before expecting to be heard. Habit 5 emphasizes empathy, patience, and connection beyond words. \"Healing isn't linear; progress, no matter how small, is still progress.\" This quote reflects the essence of understanding: everyone's journey is unique, and growth takes time. By embracing this mindset, we foster compassion and deeper connections in our interactions.",
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-primary" />,
      title: "Synergize",
      description:
        "As an example of synergy and cooperation, in primary school, our class recreated Guernica piece by piece. Each student contributed their section with dedication, and together, we formed a complete masterpiece through teamwork.",
    },
    {
      icon: <Repeat className="h-8 w-8 text-primary" />,
      title: "Sharpen the Saw",
      description:
        "Hug your loved ones more often, at least once a day. Be grateful and conscious about the people who surround you. Walk my dogs for at least 1 hour a day to disconnect from everything and get closer to nature. Meditate for at least 10 minutes a day. Organize my setup, focusing on little things to improve the bigger ones. Sleep at least 6 hours a day to take care of myself. Train at least 4 days a week to stay in healthy shape. Drink 3L of water a day to stay hydrated.",
    },
  ]

  // Modificar el array resumeItems para incluir solo los elementos educativos
  const resumeItems = [
    {
      title: "Higher Technician in Computer Network Systems Management",
      organization: "Institut Sapalomera",
      period: "12/9/2023 - CURRENT",
      description:
        "Advanced studies in network systems management, focusing on enterprise infrastructure, cloud solutions, and security. EQF level 5.",
      type: "education",
      location: "Blanes, Spain",
      index: 0,
    },
    {
      title: "Technician in Microcomputer Systems and Networks",
      organization: "Institut Sapalomera",
      period: "12/9/2016 - 30/5/2018",
      description:
        "Foundational education in computer systems and networking technologies. Developed skills in hardware maintenance, network configuration, and system administration. EQF level 4.",
      type: "education",
      location: "Blanes, Spain",
      index: 1,
    },
  ]

  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      {/* Fondo de estrellas en capas para mayor profundidad */}
      <StarryBackground />
      <SpaceDust />

      {/* Efecto de líneas de escaneo */}
      <div className="scan-lines"></div>

      <IndustrialNavbar />

      <main className="pt-20 relative z-10">
        {/* About Me Section - REDESIGNED MORE FUTURISTIC & INDUSTRIAL */}
        <section id="about" className="relative min-h-screen flex items-center justify-center pt-20">
          {/* Elementos decorativos industriales */}
          <div className="absolute top-20 left-10 w-40 h-1 bg-primary/30"></div>
          <div className="absolute top-20 right-10 w-40 h-1 bg-primary/30"></div>
          <div className="absolute bottom-20 left-10 w-40 h-1 bg-primary/30"></div>
          <div className="absolute bottom-20 right-10 w-40 h-1 bg-primary/30"></div>

          {/* Líneas verticales decorativas */}
          <div className="absolute top-20 left-10 w-1 h-40 bg-primary/30"></div>
          <div className="absolute top-20 right-10 w-1 h-40 bg-primary/30"></div>
          <div className="absolute bottom-20 left-10 w-1 h-40 bg-primary/30"></div>
          <div className="absolute bottom-20 right-10 w-1 h-40 bg-primary/30"></div>

          {/* Círculos decorativos */}
          <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary"></div>
          <div className="absolute top-20 right-10 w-2 h-2 rounded-full bg-primary"></div>
          <div className="absolute bottom-20 left-10 w-2 h-2 rounded-full bg-primary"></div>
          <div className="absolute bottom-20 right-10 w-2 h-2 rounded-full bg-primary"></div>

          <div className="container mx-auto px-4">
            {/* Encabezado con estilo industrial */}
            <div className="relative mb-12 border-b border-primary/30 pb-4">
              <div className="absolute -top-4 left-0 w-20 h-1 bg-primary"></div>
              <div className="absolute -top-4 left-0 w-1 h-4 bg-primary"></div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight inline-flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <span className="text-white">System</span>
                <span className="text-primary neon-text glitch-text">Administrator</span>
              </h1>

              <div className="absolute -bottom-1 right-0 w-20 h-1 bg-primary"></div>
              <div className="absolute -bottom-4 right-0 w-1 h-4 bg-primary"></div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 items-start">
              {/* Columna izquierda: Foto y modelo 3D */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="md:col-span-4 space-y-6"
              >
                {/* Marco de foto con estilo industrial */}
                <div className="relative">
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary"></div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary"></div>

                  <div className="relative aspect-square overflow-hidden border border-primary/50 neon-border flex items-center justify-center">
                    <Image
                      src="/profile-photo.png"
                      alt="Professional headshot of a System Administrator"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                      style={{ objectPosition: "center center" }}
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                    {/* Información personal con estilo de terminal */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/80 border-t border-primary/50">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        <p className="text-sm font-mono text-primary">SYS_ADMIN:~$</p>
                      </div>
                      <p className="text-sm font-mono">
                        <span className="text-primary">user:</span> Lucas Pampillon
                      </p>
                      <p className="text-sm font-mono">
                        <span className="text-primary">role:</span> System Administrator
                      </p>
                    </div>
                  </div>
                </div>

                {/* Modelo 3D con marco industrial */}
                <div className="relative">
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-primary"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-primary"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-primary"></div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-primary"></div>

                  <div className="h-[250px] rounded-sm overflow-hidden border border-primary/30 bg-black/50 backdrop-blur-sm neon-border">
                    <Canvas>
                      <ambientLight intensity={0.5} />
                      <pointLight position={[10, 10, 10]} intensity={1} color="#8a2be2" />
                      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.4}>
                        <ServerModel position={[0, 0, 0]} scale={1.5} />
                      </Float>
                      <Environment preset="city" />
                      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                    </Canvas>

                    /* Etiqueta de modelo con estilo industrial */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 border-t border-primary/30 py-1 px-3">
                      <p className="text-xs font-mono text-primary">SERVER_MODEL // INTERACTIVE</p>
                    </div>
                    </div>
                    </div>

                    {/* Botones de acción con estilo industrial */}
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        className="bg-black border border-primary hover:bg-primary/20 text-primary neon-box transition-all duration-300"
                        onClick={() => window.open("/CV_IT_Lucas_pampillon.pdf", "_blank")}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        <span className="relative z-10 font-mono text-xs">DOWNLOAD_CV</span>
                      </Button>
                      <Button className="bg-primary hover:bg-primary/80 text-white neon-box transition-all duration-300">
                        <Briefcase className="mr-2 h-4 w-4" />
                        <span className="relative z-10 font-mono text-xs">HIRE_ME</span>
                      </Button>
                    </div>
                    </motion.div>

                    {/* Columna central: About Me y Career */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                className="md:col-span-8 space-y-6"
              >
                {/* Panel About Me con estilo de terminal/industrial */}
                <div className="bg-black/60 backdrop-blur-sm border border-primary/30 rounded-sm overflow-hidden neon-border">
                  {/* Barra de título estilo terminal */}
                  <div className="bg-primary/20 border-b border-primary/30 p-2 flex items-center">
                    <div className="flex gap-1 mr-2">
                      <div className="w-3 h-3 rounded-full bg-primary/60"></div>
                      <div className="w-3 h-3 rounded-full bg-primary/40"></div>
                      <div className="w-3 h-3 rounded-full bg-primary/20"></div>
                    </div>
                    <p className="text-xs font-mono text-primary">about.me // system_profile</p>
                  </div>

                  {/* Contenido con estilo de terminal */}
                  <div className="p-4 space-y-4">
                    <div className="flex items-start">
                      <span className="text-primary font-mono mr-2">$</span>
                      <div>
                        <p className="text-gray-300 mb-4">
                          I'm a <span className="text-primary font-semibold">Senior System Administrator</span> and{" "}
                          <span className="text-primary font-semibold">Cybersecurity Analsyt</span> with over 8 years of
                          experience designing, implementing, and maintaining robust IT infrastructure for enterprise
                          environments.
                        </p>

                        <div className="mb-6">
                          <h3 className="text-lg font-bold text-primary mb-3">PERSONAL PARADIGM</h3>
                          <div className="bg-black/40 backdrop-blur-sm border border-primary/20 rounded-sm p-4 mb-4">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center font-bold">
                                    1
                                  </div>
                                  <h4 className="font-bold">PERSONAL EMPOWERMENT</h4>
                                </div>
                                <p className="text-xs text-gray-400">
                                  I live with willpower and self-esteem. I make things happen! Life has its challenges,
                                  and I love the obstacles that make me grow.
                                </p>
                              </div>

                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-bold">
                                    2
                                  </div>
                                  <h4 className="font-bold">TECHNOLOGICAL EXPERIENCE</h4>
                                </div>
                                <p className="text-xs text-gray-400">
                                  I don't deny the expansive possibilities that science and human technology bring us. I
                                  like to use them freely and consciously, learning to handle them with criteria,
                                  effectiveness, and purpose.
                                </p>
                              </div>

                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center font-bold">
                                    3
                                  </div>
                                  <h4 className="font-bold">MULTIDIMENSIONAL LEARNING</h4>
                                </div>
                                <p className="text-xs text-gray-400">
                                  Everything teaches me something. I know that behind all my learning are my own
                                  experiences and the inspiration I draw from people and reality itself.
                                </p>
                              </div>

                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                                    4
                                  </div>
                                  <h4 className="font-bold">CONNECTED VOCATION</h4>
                                </div>
                                <p className="text-xs text-gray-400">
                                  I am awakening to what I was born to do the contribution that existence expects me to
                                  offer to the world. I recognize my unique abilities and my Element.
                                </p>
                              </div>

                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold">
                                    5
                                  </div>
                                  <h4 className="font-bold">SELF KNOWLEDGE</h4>
                                </div>
                                <p className="text-xs text-gray-400">
                                  I need to explore my inner self with compassion. My unconscious mind and all the
                                  voices that battle in the dungeons of my own being. From my vulnerability, I also
                                  recognize my potential.
                                </p>
                              </div>

                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-bold">
                                    6
                                  </div>
                                  <h4 className="font-bold">TRAVELING AND GLOBAL VISION</h4>
                                </div>
                                <p className="text-xs text-gray-400">
                                  I move through multiple contexts, embracing both the old and the new. I don't get
                                  trapped in rigid ideologies; instead, I go beyond them, integrating contradictions.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-300">
                          My expertise spans across Linux and Windows server administration, cloud infrastructure (AWS,
                          Azure), network security, automation, and CI/CD pipelines. I specialize in creating scalable,
                          resilient systems that balance performance, security, and cost-efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Panel de Career Choice con estilo industrial */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/60 backdrop-blur-sm border border-primary/30 rounded-sm overflow-hidden neon-border">
                    <div className="bg-primary/20 border-b border-primary/30 p-2">
                      <div className="flex items-center">
                        <div className="w-1 h-4 bg-primary mr-2"></div>
                        <p className="text-xs font-mono text-primary">WHY_THIS_CAREER</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-400 text-sm">
                        My fascination with technology began when I built my first computer at age 12. What started as
                        curiosity evolved into a passion for understanding complex systems and solving infrastructure
                        challenges. I chose system administration because it combines technical problem-solving with the
                        satisfaction of building reliable foundations that businesses depend on.
                      </p>
                    </div>
                  </div>

                  <div className="bg-black/60 backdrop-blur-sm border border-primary/30 rounded-sm overflow-hidden neon-border">
                    <div className="bg-primary/20 border-b border-primary/30 p-2">
                      <div className="flex items-center">
                        <div className="w-1 h-4 bg-primary mr-2"></div>
                        <p className="text-xs font-mono text-primary">FUTURE_GOALS</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-400 text-sm">
                        My goal is to continue evolving as a Cloud Architecture Specialist, focusing on designing
                        zero-trust security models and implementing infrastructure-as-code practices at scale. I'm
                        currently pursuing advanced certifications in Kubernetes and cloud security, with the aim of
                        leading enterprise-wide digital transformation initiatives.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hard Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <div className="relative mb-8 border-b border-primary/30 pb-2">
                <div className="absolute -top-4 left-0 w-12 h-1 bg-primary"></div>
                <div className="absolute -top-4 left-0 w-1 h-4 bg-primary"></div>
                <h2 className="text-2xl font-bold text-primary neon-text">HARD_SKILLS</h2>
                <div className="absolute -bottom-1 right-0 w-12 h-1 bg-primary"></div>
                <div className="absolute -bottom-4 right-0 w-1 h-4 bg-primary"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hardSkills.map((skill, index) => (
                  <SkillBar
                    key={index}
                    name={skill.name}
                    percentage={skill.percentage}
                    icon={skill.icon}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>

            {/* Soft Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <div className="relative mb-8 border-b border-primary/30 pb-2">
                <div className="absolute -top-4 left-0 w-12 h-1 bg-primary"></div>
                <div className="absolute -top-4 left-0 w-1 h-4 bg-primary"></div>
                <h2 className="text-2xl font-bold text-primary neon-text">SOFT_SKILLS</h2>
                <div className="absolute -bottom-1 right-0 w-12 h-1 bg-primary"></div>
                <div className="absolute -bottom-4 right-0 w-1 h-4 bg-primary"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {softSkills.map((skill, index) => (
                  <SoftSkillCard
                    key={index}
                    name={skill.name}
                    description={skill.description}
                    icon={skill.icon}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="relative py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text glitch-text">Professional Journey</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                My career path and educational background in system administration and infrastructure management.
              </p>
            </motion.div>

            <ResumeTimeline items={resumeItems} />

            <div className="mt-12 text-center">
              <Button className="bg-primary hover:bg-primary/80 text-white neon-box transition-all duration-300">
                <span className="relative z-10">Download Full Resume</span>
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="relative py-20 bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text glitch-text">Certifications</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Professional certifications and credentials that validate my expertise and knowledge in the field.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {certificates.map((certificate, index) => (
                <CertificateCard
                  key={index}
                  title={certificate.title}
                  issuer={certificate.issuer}
                  date={certificate.date}
                  credentialLink={certificate.credentialLink}
                  image={certificate.image}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text glitch-text">Featured Projects</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A selection of infrastructure and system administration projects that demonstrate my technical
                capabilities and problem-solving approach.
              </p>
            </motion.div>

            {/* Modificar la sección de proyectos para incluir el enlace a GitHub */}
            <div className="grid md:grid-cols-1 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  githubLink={project.githubLink}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        </section>

        {/* 7 Habits Section */}
        <section id="habits" className="relative py-20 bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text glitch-text">
                7 Habits of Highly Effective People
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                These principles guide my professional approach and personal development, helping me achieve
                effectiveness in all areas.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {habits.map((habit, index) => (
                <HabitCard
                  key={index}
                  icon={habit.icon}
                  title={habit.title}
                  description={habit.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text glitch-text">Get In Touch</h2>
                <p className="text-gray-400 mb-6">
                  Interested in working together or have a question about my services? Feel free to reach out using the
                  contact form or through my social channels.
                </p>

                <div className="flex flex-col gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Mail className="h-5 w-5 text-primary" />
                      <div className="absolute inset-0 bg-primary/30 blur-sm rounded-full -z-10"></div>
                    </div>
                    <span>l.pampillon@sapalomera.cat</span>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-primary/50 hover:border-primary hover:bg-primary/10 neon-box transition-all duration-300"
                      onClick={() => window.open("https://github.com/T4d0m3", "_blank")}
                    >
                      <Github className="h-5 w-5 relative z-10" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-primary/50 hover:border-primary hover:bg-primary/10 neon-box transition-all duration-300"
                      onClick={() => window.open("https://www.linkedin.com/in/lucas-pampillon-969b04178", "_blank")}
                    >
                      <Linkedin className="h-5 w-5 relative z-10" />
                    </Button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-primary/20 neon-border"
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </section>
      </main>

      <IndustrialFooter />
    </div>
  )
}

