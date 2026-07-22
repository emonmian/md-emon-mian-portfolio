'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, ArrowRight } from 'lucide-react'
import { LinkedInIcon, ScholarIcon } from '@/components/brand-icons'

const stats = [
  { value: '4+', label: 'Conference Publications' },
  { value: '2+', label: 'Journal Manuscripts' },
  { value: '7+', label: 'Engineering Projects' },
  { value: '2+', label: 'Years Research & Engineering Experience' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-4 pb-16 pt-28 sm:px-6"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for research & engineering roles
          </span>

          <p className="mb-3 font-mono text-sm text-muted-foreground">
            Md. Emon Mian
          </p>

          <h1 className="gradient-text font-heading text-4xl font-bold tracking-tight text-balance sm:text-6xl md:text-7xl">
            RF Engineer &amp; Research Analyst
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 font-heading text-lg font-semibold text-foreground/90 sm:text-xl md:text-2xl"
          >
            Electrical Engineer | RF &amp; Hardware Design Engineer
          </motion.p>

          <p className="mt-6 max-w-3xl text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            RF and Microwave Engineering enthusiast with hands-on experience in
            antenna design, electromagnetic simulation, and metamaterial-based
            sensing systems. Experienced in CST Studio Suite, antenna
            optimization, RF communication, and embedded hardware integration for
            aerospace and biomedical applications. Currently focused on THz
            biosensing, metamaterials, and mmWave antenna research.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/cv-md-emon-mian.pdf"
              download="Md-Emon-Mian-CV.pdf"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/emonmian/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-5 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-secondary"
            >
              <LinkedInIcon className="h-4 w-4 text-primary" />
              LinkedIn
            </a>
            <a
              href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=kYZIt9YAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-5 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-secondary"
            >
              <ScholarIcon className="h-4 w-4 text-primary" />
              Google Scholar
            </a>
            <a
              href="mailto:emon.mian100@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-5 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-secondary"
            >
              <Mail className="h-4 w-4 text-primary" />
              Email Me
            </a>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:mt-20 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="glass gradient-border relative rounded-2xl p-5 text-center"
            >
              <div className="gradient-text font-heading text-3xl font-bold sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#about"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Explore my work
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
