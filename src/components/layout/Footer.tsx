import { siteConfig } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <Link
              href="#"
              className="font-display text-xl font-bold tracking-tight text-foreground"
            >
              Eymen Karatas
            </Link>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-xs">
              Front-End Developer & Full-Stack Engineer crafting exceptional
              digital experiences for enterprise applications.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                >
                  <Mail size={16} />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                >
                  <LinkedInIcon size={15} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                >
                  <GitHubIcon size={16} />
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted">
                <MapPin size={16} />
                {siteConfig.location}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/Eymen-Karatas-CV.pdf"
                  target="_blank"
                  className="text-sm text-muted hover:text-accent transition-colors"
                >
                  Download CV
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-sm text-muted hover:text-accent transition-colors"
                >
                  View Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-muted hover:text-accent transition-colors"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
