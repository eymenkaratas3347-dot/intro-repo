"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { experiences } from "@/lib/data";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative bg-surface/30">
      <div className="absolute inset-0 mesh-bg opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Experience"
          title="Professional Journey"
          description="Building enterprise-grade applications at one of Turkey's leading technology companies."
        />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-3xl p-8 md:p-10 gradient-border"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Briefcase size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-accent font-medium mt-1">{exp.company}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted leading-relaxed mb-6 max-w-3xl">
                {exp.description}
              </p>

              <ul className="grid md:grid-cols-2 gap-3 mb-8">
                {exp.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 text-muted border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
