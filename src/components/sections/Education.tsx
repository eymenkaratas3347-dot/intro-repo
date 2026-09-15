"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { certifications, education } from "@/lib/data";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, ShieldCheck } from "lucide-react";
import Image from "next/image";

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 relative bg-surface/30">
      <div className="absolute inset-0 mesh-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Education & Certifications"
          title="Academic Foundation & Credentials"
          description="Rigorous computer science education complemented by industry-leading quality certifications."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 gradient-border"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <GraduationCap size={22} className="text-accent" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {education.institution}
                </h3>
                <p className="text-accent text-sm font-medium mt-1">
                  {education.degree}
                </p>
                <p className="text-sm text-muted mt-2">
                  {education.location} · {education.period}
                </p>
              </div>
            </div>

            <p className="text-muted text-sm leading-relaxed mb-6">
              {education.description}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {education.coursework.map((course) => (
                <div
                  key={course}
                  className="flex items-center gap-2 text-xs text-muted"
                >
                  <BookOpen size={12} className="text-accent shrink-0" />
                  {course}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/college-focus.png"
                  alt="Studying at ITU"
                  width={300}
                  height={200}
                  className="w-full h-28 object-cover"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/college-collaboration.png"
                  alt="Collaborating at university"
                  width={300}
                  height={200}
                  className="w-full h-28 object-cover"
                />
              </div>
            </div>
          </motion.div>

          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-3xl p-8 gradient-border"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <ShieldCheck size={22} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted mt-1">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {cert.period} · {cert.id}
                  </p>
                </div>
              </div>

              <ul className="space-y-2">
                {cert.areas.map((area) => (
                  <li
                    key={area}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span className="text-emerald-400 mt-1">✓</span>
                    {area}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
