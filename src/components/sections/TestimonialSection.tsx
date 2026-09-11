"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { testimonial } from "@/constants";
import { useLanguage } from "@/contexts/LanguageContext";

// Helper to format bold text (markdown style **bold**)
const formatReview = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={i} className="text-ink bg-citrus/30 px-1 rounded-sm">
          {part.slice(2, -2)}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { t, language } = useLanguage();

  const dotColors = ["bg-mint", "bg-citrus", "bg-sky", "bg-lilac", "bg-coral"];

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonial.length);
  }, []);

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonial.length) % testimonial.length,
    );
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000); // auto slide every 5s
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <section
      id="testimoni"
      className="bg-cream relative border-b-2 border-ink py-20 sm:py-28 overflow-hidden"
    >
      <div className="bg-grid absolute inset-0 -z-10 opacity-50"></div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div
          style={{ transitionDelay: "0ms" }}
          className="reveal max-w-2xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-card px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase">
            <span className="size-2 rounded-full bg-coral"></span>{t("testimonial.badge")}
          </span>
          <h2 className="mt-5 text-3xl leading-tight font-black sm:text-4xl md:text-5xl">
            {t("testimonial.title1")}
            <span className="text-gradient-warm">{t("testimonial.title2")}</span>
          </h2>
        </div>

        <div
          style={{ transitionDelay: "100ms" }}
          className="reveal"
        >
          <div
            className="relative mt-14"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden rounded-[2rem] border-2 border-ink bg-card shadow-[8px_8px_0_var(--ink)]">
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonial.map((item, idx) => {
                  const dotColor = dotColors[idx % dotColors.length];
                  const imgSrc = item.image
                    ? item.image.replace("/images/", "/testimoni/")
                    : "/testimoni/placeholder-user.jpg";

                  return (
                    <figure key={idx} className="w-full shrink-0 relative">
                      <div className="flex flex-col md:flex-row gap-8 p-6 sm:p-10 lg:p-12 items-center md:items-start">
                        {/* Avatar */}
                        <div className="relative mx-auto w-fit shrink-0 mt-2">
                          <div
                            className={`absolute -inset-3 -rotate-6 rounded-[1.8rem] border-2 border-ink ${dotColor}`}
                          ></div>
                          <Image
                            src={imgSrc}
                            alt={`Photo of ${item.name}`}
                            width={144}
                            height={144}
                            className="relative size-28 rounded-[1.5rem] border-2 border-ink object-cover sm:size-36 bg-white"
                          />
                        </div>

                        {/* Content */}
                        <div className="min-w-0 flex flex-col flex-grow text-center md:text-left">
                          <blockquote className="text-lg leading-relaxed font-semibold sm:text-xl lg:text-2xl text-ink">
                            “{formatReview(item.review[language])}”
                          </blockquote>

                          <figcaption className="mt-8 flex flex-col sm:flex-row items-center gap-4 border-t-2 border-ink/10 pt-6">
                            <div className="flex-grow">
                              <p className="font-display text-lg font-black text-ink">
                                {item.name}
                              </p>
                              <p className="text-muted-foreground text-sm font-bold mt-0.5">
                                {item.designation}
                              </p>
                            </div>

                            {item.linkedin && (
                              <a
                                href={item.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-xl border-2 border-ink bg-citrus px-4 py-2 text-xs font-black shadow-[3px_3px_0_var(--ink)] hover:-translate-y-0.5 transition-transform gap-2"
                                aria-label={`LinkedIn ${item.name}`}
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                  <rect width="4" height="12" x="2" y="9" />
                                  <circle cx="4" cy="4" r="2" />
                                </svg>
                                LinkedIn
                              </a>
                            )}
                          </figcaption>
                        </div>
                      </div>
                    </figure>
                  );
                })}
              </div>
            </div>

            {/* Navigation & Pagination */}
            <div className="mt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-6 px-2 sm:px-4">
              <div className="flex flex-wrap justify-center gap-2 max-w-full sm:max-w-[60vw]">
                {testimonial.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`To testimonial ${idx + 1}`}
                    className={`h-2.5 rounded-full border-2 border-ink transition-all ${
                      currentIndex === idx
                        ? `w-8 ${dotColors[idx % dotColors.length]}`
                        : "w-2.5 bg-card hover:bg-cream"
                    }`}
                  ></button>
                ))}
              </div>

              <div className="flex gap-4 shrink-0">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="grid size-12 place-items-center rounded-xl border-2 border-ink bg-card shadow-[3px_3px_0_var(--ink)] transition-transform hover:-translate-y-0.5 hover:bg-cream"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="grid size-12 place-items-center rounded-xl border-2 border-ink bg-card shadow-[3px_3px_0_var(--ink)] transition-transform hover:-translate-y-0.5 hover:bg-cream"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
