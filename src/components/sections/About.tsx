"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { aboutParagraphs, languages } from "@/lib/data";
import { motion } from "framer-motion";
import { Award, Code2, Rocket } from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "Building maintainable, component-driven frontends with scalable patterns and best practices.",
  },
  {
    icon: Rocket,
    title: "Performance First",
    description:
      "Optimizing application responsiveness, load times, and user experience across devices.",
  },
  {
    icon: Award,
    title: "Quality Standards",
    description:
      "CMMI-certified expertise in software process improvement and engineering excellence.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="About Me"
          title="Engineering with Purpose & Precision"
          description="Transforming complex business requirements into elegant, production-ready digital products."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden gradient-border">
              <Image
                src="/images/about-professional.png"
                alt="Eymen Karatas professional portrait"
                width={560}
                height={700}
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl border border-accent/20" />
          </motion.div>

          <div className="space-y-6">
            {aboutParagraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-muted leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                Languages
              </h3>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground font-medium">
                        {lang.name}
                      </span>
                      <span className="text-muted">{lang.level}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 hover:bg-white/[0.05] transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <item.icon size={22} className="text-accent" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
