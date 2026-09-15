"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { journeyMilestones } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

export function Journey() {
  return (
    <section id="journey" className="py-24 md:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="My Journey"
          title="From Campus to Enterprise"
          description="A visual timeline of academic foundations, professional growth, and continuous learning."
          align="center"
        />

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {journeyMilestones.map((milestone, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                    isEven ? "" : "md:[direction:rtl]"
                  }`}
                >
                  <div
                    className={`${isEven ? "md:text-right" : "md:text-left"} md:[direction:ltr]`}
                  >
                    <span className="inline-block font-display text-4xl md:text-5xl font-bold text-accent/30 mb-3">
                      {milestone.year}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-muted leading-relaxed max-w-md md:ml-auto">
                      {milestone.description}
                    </p>
                  </div>

                  <div className="md:[direction:ltr]">
                    <div
                      className={`relative rounded-2xl overflow-hidden gradient-border group ${
                        "imageVariant" in milestone &&
                        milestone.imageVariant === "showcase"
                          ? "bg-[#0c1019]"
                          : ""
                      }`}
                    >
                      <Image
                        src={milestone.image}
                        alt={milestone.imageAlt}
                        width={
                          "imageVariant" in milestone &&
                          milestone.imageVariant === "showcase"
                            ? 1200
                            : 600
                        }
                        height={
                          "imageVariant" in milestone &&
                          milestone.imageVariant === "showcase"
                            ? 675
                            : 400
                        }
                        className={`w-full transition-transform duration-700 group-hover:scale-[1.02] ${
                          "imageVariant" in milestone &&
                          milestone.imageVariant === "showcase"
                            ? "h-64 md:h-80 object-cover object-center"
                            : "imageFit" in milestone &&
                                milestone.imageFit === "contain"
                              ? "h-56 md:h-64 object-contain bg-surface-elevated p-2"
                              : "h-56 md:h-64 object-cover"
                        }`}
                      />
                      {!("imageFit" in milestone) ||
                      milestone.imageFit !== "contain" ? (
                        "imageVariant" in milestone &&
                        milestone.imageVariant === "showcase" ? null : (
                          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                        )
                      ) : null}
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex">
                    <div className="w-4 h-4 rounded-full bg-accent border-4 border-background shadow-lg shadow-accent/30" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
