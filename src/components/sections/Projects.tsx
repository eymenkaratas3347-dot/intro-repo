"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

export function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Projects"
          title="Selected Work"
          description="Enterprise mobile applications and front-end systems built for production at scale."
        />

        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-3xl p-8 md:p-12 gradient-border mb-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors" />

            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <Star size={16} className="text-accent fill-accent" />
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Featured Project
                </span>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {featured.title}
                  </h3>
                  <p className="text-sm text-muted">
                    {featured.company} · {featured.category}
                  </p>
                </div>
              </div>

              <p className="text-muted leading-relaxed mb-8 max-w-3xl">
                {featured.description}
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {featured.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <ArrowUpRight
                      size={16}
                      className="text-accent mt-0.5 shrink-0"
                    />
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {featured.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-accent/10 text-accent-light border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {others.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 md:p-8 hover:bg-white/[0.05] transition-all group"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                {project.category}
              </p>
              <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-accent-light transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted mb-4">{project.company}</p>
              <p className="text-sm text-muted leading-relaxed mb-6">
                {project.description}
              </p>
              <ul className="space-y-2 mb-6">
                {project.highlights.slice(0, 2).map((h) => (
                  <li
                    key={h}
                    className="text-xs text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-accent">→</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-full bg-white/5 text-muted"
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
