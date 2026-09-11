"use client";

import { useState } from "react";
import Image from "next/image";
import { experienceList } from "@/constants";

export function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState<any>(null);

  const dotColors = ["bg-mint", "bg-citrus", "bg-sky", "bg-lilac", "bg-coral"];

  return (
    <section id="pengalaman" className="relative py-20 sm:py-28 border-y-2 border-ink bg-cream">
      <div className="bg-dots absolute inset-0 opacity-30"></div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
        <div
          style={{ transitionDelay: "0ms" }}
          className="reveal max-w-2xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-card px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase text-ink">
            <span className="size-2 rounded-full bg-coral"></span>Karir
          </span>
          <h2 className="mt-5 text-3xl leading-tight font-black sm:text-4xl md:text-5xl">
            Perjalanan{" "}
            <span className="text-gradient-warm">pengalaman kerja</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
            Lima tahun tumbuh dari junior developer sampai memimpin proyek development.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute inset-y-0 left-4 w-1 rounded-full bg-gradient-to-b from-mint via-citrus to-coral md:left-1/2 md:-translate-x-1/2"></div>

          <div className="flex flex-col gap-8 md:block">
            {experienceList.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              const dotColor = dotColors[idx % dotColors.length];

              return (
                <div
                  key={idx}
                  style={{ transitionDelay: `${(idx % 3) * 80}ms` }}
                  className={`reveal ${idx > 0 ? "md:-mt-6 lg:-mt-10" : ""}`}
                >
                  <div className="relative pl-12 md:grid md:grid-cols-2 md:gap-10 md:pl-0">
                    {/* Timeline Dot */}
                    <span
                      className={`absolute left-4 top-12 sm:top-14 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ink ${dotColor} md:left-1/2 z-10`}
                    ></span>
                    {/* Connector Line */}
                    <span
                      className={`absolute top-12 sm:top-14 hidden h-0.5 w-10 -translate-y-1/2 bg-ink/10 md:block ${isEven ? "left-1/2" : "right-1/2"}`}
                    ></span>

                    <div
                      className={
                        isEven
                          ? "md:col-start-1 md:pr-10"
                          : "md:col-start-2 md:pl-10"
                      }
                    >
                      <button
                        onClick={() => setSelectedExp(exp)}
                        className={`cursor-pointer group w-full text-left rounded-[2rem] border-2 border-ink bg-card p-4 sm:p-6 shadow-[6px_6px_0_var(--ink)] transition-transform duration-300 hover:-translate-y-1.5 focus:outline-none focus:ring-4 focus:ring-ink flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 ${isEven ? "md:flex-row-reverse md:text-right" : ""}`}
                      >
                        <div className="shrink-0 rounded-2xl bg-white p-1.5 border-2 border-ink transition-transform group-hover:scale-105 overflow-hidden">
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            width={64}
                            height={64}
                            className="rounded-xl object-contain mix-blend-multiply"
                          />
                        </div>

                        {/* Content */}
                        <div
                          className={`flex-grow min-w-0 ${isEven ? "md:text-right" : ""}`}
                        >
                          <div
                            className={`flex flex-wrap items-center gap-2 mb-1 ${isEven ? "md:justify-end" : ""}`}
                          >
                            <span className="rounded-full border border-ink/20 bg-citrus px-2.5 py-0.5 text-[10px] sm:text-xs font-black tracking-widest uppercase text-ink">
                              {exp.start} — {exp.end}
                            </span>
                            {exp.isActive && (
                              <span
                                className="flex size-2 rounded-full bg-mint animate-pulse"
                                title="Current Job"
                              ></span>
                            )}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-black text-ink transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-muted-foreground text-sm sm:text-base font-bold mt-1 leading-tight">
                            {exp.company}
                          </p>
                          <div
                            className={`mt-3 flex flex-wrap gap-1.5 ${isEven ? "md:justify-end" : ""}`}
                          >
                            <span className="rounded-md bg-secondary border border-ink/15 px-2 py-0.5 text-[10px] font-bold text-ink uppercase">
                              {exp.job}
                            </span>
                            <span className="rounded-md bg-secondary border border-ink/15 px-2 py-0.5 text-[10px] font-bold text-ink uppercase">
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedExp && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedExp(null)}
          ></div>

          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[2rem] border-2 border-ink bg-cream p-6 sm:p-8 shadow-[8px_8px_0_var(--ink)] animate-in fade-in zoom-in-95 duration-200 text-ink">
            <button
              onClick={() => setSelectedExp(null)}
              className="cursor-pointer absolute right-4 top-4 sm:right-6 sm:top-6 grid size-10 place-items-center rounded-xl border-2 border-ink bg-card shadow-[2px_2px_0_var(--ink)] transition-transform hover:-translate-y-0.5"
              aria-label="Tutup detail"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            {/* Header Modal */}
            <div className="flex flex-col sm:flex-row items-start gap-6 pr-12">
              <div className="shrink-0 rounded-[2rem] bg-white p-2 border-4 border-ink shadow-[4px_4px_0_var(--ink)] overflow-hidden">
                <Image
                  src={selectedExp.logo}
                  alt={selectedExp.company}
                  width={90}
                  height={90}
                  className="rounded-2xl object-contain mix-blend-multiply"
                />
              </div>
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="rounded-full border border-ink/20 bg-citrus px-3 py-1 text-[10px] font-black uppercase text-ink">
                    {selectedExp.start} — {selectedExp.end}
                  </span>
                  <span className="rounded-full border border-ink/20 bg-card px-3 py-1 text-[10px] font-black uppercase text-ink">
                    {selectedExp.job}
                  </span>
                  <span className="rounded-full border border-ink/20 bg-card px-3 py-1 text-[10px] font-black uppercase flex items-center gap-1 text-ink">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {selectedExp.location}
                  </span>
                </div>
                <h3 className="text-2xl font-black sm:text-4xl text-ink">
                  {selectedExp.role}
                </h3>
                <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-muted-foreground">
                  <p className="text-lg font-bold flex items-center gap-2 text-ink">
                    {selectedExp.company}
                    {selectedExp.isActive && (
                      <span
                        className="size-2 rounded-full bg-mint animate-pulse"
                        title="Current Job"
                      ></span>
                    )}
                  </p>
                  <span className="hidden sm:inline-block size-1.5 rounded-full bg-ink/20"></span>
                  <p className="text-sm font-semibold">
                    {selectedExp.city}, {selectedExp.country}
                  </p>
                </div>
              </div>
            </div>

            {/* Body Modal */}
            <div className="mt-8 space-y-8">
              <div>
                <h4 className="text-lg font-black border-b-2 border-ink/10 pb-2 mb-4 text-ink">
                  About The Company
                </h4>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {selectedExp.description}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-black border-b-2 border-ink/10 pb-2 mb-4 text-ink">
                  Key Responsibilities & Achievements
                </h4>
                <ul className="space-y-4">
                  {selectedExp.responsibilities.map(
                    (resp: string, idx: number) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-muted-foreground text-sm sm:text-base leading-relaxed"
                      >
                        <span className="text-coral shrink-0 mt-1">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                        <span>{resp}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {selectedExp.website && (
                <div className="pt-6 border-t-2 border-ink/10">
                  <a
                    href={selectedExp.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full sm:w-max justify-center items-center gap-2 rounded-xl border-2 border-ink bg-citrus px-6 py-3.5 text-sm font-black text-ink shadow-[4px_4px_0_var(--ink)] hover:-translate-y-1 transition-transform"
                  >
                    Visit Company Website
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
