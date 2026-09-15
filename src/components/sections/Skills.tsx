"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillCategories } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Network,
  Shield,
  Smartphone,
  Wrench,
} from "lucide-react";

const iconMap = {
  code: Code2,
  smartphone: Smartphone,
  layers: Layers,
  network: Network,
  shield: Shield,
  wrench: Wrench,
};

const spanClasses = {
  large: "md:col-span-2 md:row-span-2",
  medium: "md:col-span-1 md:row-span-2",
  small: "md:col-span-1",
};

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-surface/30">
      <div className="absolute inset-0 mesh-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Skills"
          title="Technical Expertise"
          description="A comprehensive toolkit for building modern, performant, and maintainable applications."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-fr">
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={cn(
                  "glass rounded-2xl p-6 hover:bg-white/[0.05] transition-all group",
                  spanClasses[category.span]
                )}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 text-muted border border-border hover:border-accent/30 hover:text-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
