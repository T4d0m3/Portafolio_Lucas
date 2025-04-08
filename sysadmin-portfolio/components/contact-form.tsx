"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    submitting: false,
    submitted: false,
    error: false,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    setFormState({ ...formState, submitting: true })

    // Simulate form submission
    setTimeout(() => {
      setFormState({
        ...formState,
        submitting: false,
        submitted: true,
        name: "",
        email: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, submitted: false }))
      }, 5000)
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          placeholder="Your Name"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          required
          className="bg-black/30 border-primary/30 focus:border-primary focus:ring-primary/20 neon-border"
        />
      </div>

      <div>
        <Input
          type="email"
          placeholder="Your Email"
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          required
          className="bg-black/30 border-primary/30 focus:border-primary focus:ring-primary/20 neon-border"
        />
      </div>

      <div>
        <Textarea
          placeholder="Your Message"
          rows={5}
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          required
          className="bg-black/30 border-primary/30 focus:border-primary focus:ring-primary/20 resize-none neon-border"
        />
      </div>

      <Button
        type="submit"
        disabled={formState.submitting || formState.submitted}
        className="w-full bg-primary hover:bg-primary/80 text-white neon-box"
      >
        <span className="relative z-10">
          {formState.submitting ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : formState.submitted ? (
            <span className="flex items-center">Message Sent!</span>
          ) : (
            <span className="flex items-center">
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </span>
          )}
        </span>
      </Button>

      {formState.error && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm">
          There was an error sending your message. Please try again.
        </motion.p>
      )}
    </form>
  )
}

