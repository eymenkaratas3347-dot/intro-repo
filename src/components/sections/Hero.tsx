"use client";

import { Button } from "@/components/ui/Button";
import { siteConfig, stats } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted mb-6"
            >
              <Sparkles size={14} className="text-accent" />
              Available for new opportunities
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              <span className="gradient-text">{siteConfig.name}</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted leading-relaxed mb-4 max-w-lg">
              Front-End Developer & Full-Stack Engineer specializing in
              enterprise mobile applications, UI engineering, and scalable
              client-side architecture.
            </p>

            <p className="text-sm text-muted-foreground mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {siteConfig.location}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button href="#contact" size="lg">
                Get in Touch
              </Button>
              <Button
                href="/Eymen-Karatas-CV.pdf"
                variant="secondary"
                size="lg"
              >
                <Download size={18} />
                Download CV
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-xs text-muted mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-indigo-500/20 rounded-3xl blur-2xl scale-95 animate-float" />
              <div className="relative gradient-border rounded-3xl overflow-hidden">
                <Image
                  src="/images/hero-professional.png"
                  alt="Eymen Karatas - Front-End Developer"
                  width={600}
                  height={750}
                  priority
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-4 sm:-left-8 glass rounded-2xl px-5 py-4 shadow-xl"
              >
                <p className="text-xs text-muted uppercase tracking-wider mb-1">
                  Currently
                </p>
                <p className="font-display font-semibold text-foreground">
                  CMMI Lead Appraiser
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -top-2 -right-2 sm:-right-6 glass rounded-2xl px-5 py-4 shadow-xl"
              >
                <p className="text-xs text-muted uppercase tracking-wider mb-1">
                  Experience
                </p>
                <p className="font-display font-semibold text-accent">
                  OBSS · Front-End
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
