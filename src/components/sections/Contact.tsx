"use client";

import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/data";
import { motion } from "framer-motion";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { Mail, MapPin, Send } from "lucide-react";

const contactLinks = [
  {
    icon: "mail" as const,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: "linkedin" as const,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: siteConfig.linkedin,
    external: true,
  },
  {
    icon: "github" as const,
    label: "GitHub",
    value: "View GitHub Profile",
    href: siteConfig.github,
    external: true,
  },
  {
    icon: "location" as const,
    label: "Location",
    value: siteConfig.location,
    href: undefined,
  },
];

function ContactIcon({ type }: { type: "mail" | "linkedin" | "github" | "location" }) {
  const className = "text-accent";
  switch (type) {
    case "mail":
      return <Mail size={18} className={className} />;
    case "linkedin":
      return <LinkedInIcon size={18} />;
    case "github":
      return <GitHubIcon size={18} />;
    case "location":
      return <MapPin size={18} className={className} />;
  }
}

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 mesh-bg" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Contact"
          title="Let's Build Something Great"
          description="Open to front-end engineering, full-stack development, and quality-focused software roles. Reach out — I'd love to connect."
          align="center"
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 gradient-border text-center"
          >
            <p className="text-muted leading-relaxed mb-10 max-w-xl mx-auto">
              Whether you have a project in mind, an opportunity to discuss, or
              simply want to connect — I&apos;m always interested in meaningful
              conversations about technology, software quality, and building
              products that make an impact.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {contactLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-border hover:border-accent/30 hover:bg-white/[0.05] transition-all group text-left"
                    >
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <ContactIcon type={link.icon} />
                      </div>
                      <div>
                        <p className="text-xs text-muted uppercase tracking-wider">
                          {link.label}
                        </p>
                        <p className="text-sm text-foreground font-medium mt-0.5">
                          {link.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-border text-left">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                        <ContactIcon type={link.icon} />
                      </div>
                      <div>
                        <p className="text-xs text-muted uppercase tracking-wider">
                          {link.label}
                        </p>
                        <p className="text-sm text-foreground font-medium mt-0.5">
                          {link.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button href={`mailto:${siteConfig.email}`} size="lg">
                <Send size={18} />
                Send an Email
              </Button>
              <Button
                href={siteConfig.linkedin}
                variant="secondary"
                size="lg"
              >
                <LinkedInIcon size={18} />
                LinkedIn Profile
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
