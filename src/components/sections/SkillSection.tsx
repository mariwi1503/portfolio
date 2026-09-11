"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaServer, FaDatabase, FaLaptopCode, FaInfinity, FaSitemap, FaToolbox } from "react-icons/fa6";

const techIcons = [
  { name: "Android", src: "/icons/android.png" },
  { name: "CSS", src: "/icons/css.png" },
  { name: "Express", src: "/icons/express.png" },
  { name: "FastAPI", src: "/icons/fastapi.png" },
  { name: "Git", src: "/icons/git.png" },
  { name: "HTML", src: "/icons/html.png" },
  { name: "JavaScript", src: "/icons/js.png" },
  { name: "MongoDB", src: "/icons/mongo.png" },
  { name: "MySQL", src: "/icons/mysql.png" },
  { name: "NestJS", src: "/icons/nestjs.png" },
  { name: "Next.js", src: "/icons/nextjs.png" },
  { name: "Node.js", src: "/icons/nodejs.png" },
  { name: "PostgreSQL", src: "/icons/postgres.png" },
  { name: "Prisma", src: "/icons/prisma.png" },
  { name: "Python", src: "/icons/python.png" },
  { name: "React", src: "/icons/react.png" },
  { name: "Redis", src: "/icons/redis.png" },
  { name: "Sequelize", src: "/icons/sequelize.png" },
  { name: "Tailwind", src: "/icons/tailwind.png" },
  { name: "TypeScript", src: "/icons/typescript.png" },
  { name: "Vite", src: "/icons/vite.png" },
];

const row1 = techIcons.slice(0, 11);
const row2 = techIcons.slice(11);

export function SkillSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="skill"
      className="bg-cream relative border-y-2 border-ink py-20 sm:py-28 overflow-hidden"
    >
      <div className="bg-dots absolute inset-0 -z-10 opacity-70"></div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          style={{ transitionDelay: "0ms" }}
          className="reveal max-w-2xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-card px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase">
            <span className="size-2 rounded-full bg-coral"></span>Tech Stack
          </span>
          <h2 className="mt-5 text-3xl leading-tight font-black sm:text-4xl md:text-5xl">
            Tools I{" "}
            <span className="text-gradient-warm">use</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
            A combination of tools I use daily to build digital products from scratch to production.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
          <div
            style={{ transitionDelay: "0ms" }}
            className="reveal"
          >
            <article className="group h-full rounded-3xl border-2 border-ink bg-card p-6 shadow-[6px_6px_0_var(--ink)] transition-transform duration-300 hover:-translate-y-1.5">
              <div className="grid size-12 place-items-center rounded-2xl border-2 border-ink bg-mint transition-transform duration-300 group-hover:rotate-6">
                <FaServer className="text-xl" />
              </div>
              <h3 className="mt-5 text-xl font-black">Backend Engineering</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  Node.js
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  Express
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  NestJS
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  Python
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  FastAPI
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  REST API
                </li>
              </ul>
            </article>
          </div>
          <div
            style={{ transitionDelay: "70ms" }}
            className="reveal"
          >
            <article className="group h-full rounded-3xl border-2 border-ink bg-card p-6 shadow-[6px_6px_0_var(--ink)] transition-transform duration-300 hover:-translate-y-1.5">
              <div className="grid size-12 place-items-center rounded-2xl border-2 border-ink bg-sky transition-transform duration-300 group-hover:rotate-6">
                <FaDatabase className="text-xl" />
              </div>
              <h3 className="mt-5 text-xl font-black">Database</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  PostgreSQL
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  MySQL
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  MongoDB
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  SQLite
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  Redis
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  Sequelize
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  Prisma
                </li>
              </ul>
            </article>
          </div>
          <div
            style={{ transitionDelay: "140ms" }}
            className="reveal"
          >
            <article className="group h-full rounded-3xl border-2 border-ink bg-card p-6 shadow-[6px_6px_0_var(--ink)] transition-transform duration-300 hover:-translate-y-1.5">
              <div className="grid size-12 place-items-center rounded-2xl border-2 border-ink bg-citrus transition-transform duration-300 group-hover:rotate-6">
                <FaLaptopCode className="text-xl" />
              </div>
              <h3 className="mt-5 text-xl font-black">Frontend</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  React
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  Next.js
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  TypeScript
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  Tailwind CSS
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  React Query
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  SSR / ISR
                </li>
              </ul>
            </article>
          </div>
          <div
            style={{ transitionDelay: "210ms" }}
            className="reveal"
          >
            <article className="group h-full rounded-3xl border-2 border-ink bg-card p-6 shadow-[6px_6px_0_var(--ink)] transition-transform duration-300 hover:-translate-y-1.5">
              <div className="grid size-12 place-items-center rounded-2xl border-2 border-ink bg-lilac transition-transform duration-300 group-hover:rotate-6">
                <FaInfinity className="text-xl" />
              </div>
              <h3 className="mt-5 text-xl font-black">DevOps &amp; CI/CD</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  Docker
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  GitHub Actions
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  Portainer
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  Nginx Proxy Manager
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  Linux VPS
                </li>
              </ul>
            </article>
          </div>
          <div
            style={{ transitionDelay: "280ms" }}
            className="reveal"
          >
            <article className="group h-full rounded-3xl border-2 border-ink bg-card p-6 shadow-[6px_6px_0_var(--ink)] transition-transform duration-300 hover:-translate-y-1.5">
              <div className="grid size-12 place-items-center rounded-2xl border-2 border-ink bg-coral transition-transform duration-300 group-hover:rotate-6">
                <FaSitemap className="text-xl" />
              </div>
              <h3 className="mt-5 text-xl font-black">Architecture</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  Microservices
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  Caching
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  Auth &amp; RBAC
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  Payment Gateway
                </li>
              </ul>
            </article>
          </div>
          <div
            style={{ transitionDelay: "350ms" }}
            className="reveal"
          >
            <article className="group h-full rounded-3xl border-2 border-ink bg-card p-6 shadow-[6px_6px_0_var(--ink)] transition-transform duration-300 hover:-translate-y-1.5">
              <div className="grid size-12 place-items-center rounded-2xl border-2 border-ink bg-accent transition-transform duration-300 group-hover:rotate-6">
                <FaToolbox className="text-xl" />
              </div>
              <h3 className="mt-5 text-xl font-black">Others</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  MinIO
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  WebSocket
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  Antigravity
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  LLM
                </li>
                <li className="bg-secondary rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold">
                  AI Agent
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>

      <div
        style={{ transitionDelay: "120ms" }}
        className="reveal relative z-10 mx-auto max-w-6xl px-4 sm:px-6 mt-24"
      >
        <div className="[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex overflow-hidden relative w-full mb-6 group">
            <div className="flex w-max gap-4 pr-4 animate-marquee group-hover:![animation-play-state:paused]">
              {[...row1, ...row1].map((item, index) => (
                <div
                  key={index}
                  className="flex shrink-0 items-center gap-3 rounded-2xl border-2 border-ink bg-card px-5 py-3 shadow-[4px_4px_0_var(--ink)] transition-transform hover:-translate-y-1"
                >
                  <img
                    src={item.src}
                    alt={`Logo ${item.name}`}
                    loading="lazy"
                    width="32"
                    height="32"
                    className="size-8 object-contain"
                  />
                  <span className="text-sm font-bold">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex overflow-hidden relative w-full group">
            <div className="flex w-max gap-4 pr-4 animate-marquee-reverse group-hover:![animation-play-state:paused]">
              {[...row2, ...row2].map((item, index) => (
                <div
                  key={index}
                  className="flex shrink-0 items-center gap-3 rounded-2xl border-2 border-ink bg-card px-5 py-3 shadow-[4px_4px_0_var(--ink)] transition-transform hover:-translate-y-1"
                >
                  <img
                    src={item.src}
                    alt={`Logo ${item.name}`}
                    loading="lazy"
                    width="32"
                    height="32"
                    className="size-8 object-contain"
                  />
                  <span className="text-sm font-bold">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer rounded-xl border-2 border-ink bg-card px-5 py-2.5 text-sm font-bold shadow-[4px_4px_0_var(--ink)] transition-transform hover:-translate-y-1"
          >
            View All Technologies
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <div className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-[2rem] border-2 border-ink bg-cream p-6 sm:p-10 shadow-[8px_8px_0_var(--ink)] animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="cursor-pointer absolute right-4 top-4 sm:right-6 sm:top-6 grid size-10 place-items-center rounded-xl border-2 border-ink bg-card shadow-[2px_2px_0_var(--ink)] transition-transform hover:-translate-y-0.5"
              aria-label="Close modal"
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

            <div className="mb-8 pr-12">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-card px-3 py-1 text-[10px] font-bold tracking-wider uppercase">
                <span className="size-1.5 rounded-full bg-citrus"></span>Full
                Stack
              </span>
              <h3 className="mt-4 text-2xl font-black sm:text-3xl">
                All Technologies
              </h3>
              <p className="mt-2 text-muted-foreground text-sm sm:text-base leading-relaxed">
                A collection of programming languages, frameworks, databases, and tools I have used and learned throughout my career.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {techIcons.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-ink bg-card p-4 transition-transform hover:-translate-y-1 shadow-[3px_3px_0_var(--ink)]"
                >
                  <img
                    src={item.src}
                    alt={`Logo ${item.name}`}
                    loading="lazy"
                    width="48"
                    height="48"
                    className="size-10 object-contain drop-shadow-sm sm:size-12"
                  />
                  <span className="text-xs font-bold text-center sm:text-sm">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
