"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      <div className="bg-grid absolute inset-0 -z-10 opacity-60"></div>
      <div className="animate-blob absolute -top-24 -left-24 -z-10 size-72 bg-mint/50 blur-2xl sm:size-96"></div>
      <div
        className="animate-blob absolute -right-28 top-24 -z-10 size-72 bg-citrus/50 blur-2xl sm:size-96"
        style={{ animationDelay: "-5s" }}
      ></div>
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.35fr_0.85fr] lg:items-center">
        <div>
          <div
            style={{ transitionDelay: "0ms" }}
            className="reveal"
          >
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-card px-4 py-1.5 text-xs font-bold tracking-wide uppercase shadow-[3px_3px_0_var(--ink)]">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-mint"></span>
              </span>
              {t("hero.available")}
            </span>
          </div>
          <div
            style={{ transitionDelay: "80ms" }}
            className="reveal"
          >
            <h1 className="mt-6 text-4xl leading-[1.05] font-black sm:text-6xl xl:text-7xl">
              {t("hero.hi")}<span className="text-gradient-cool">Ary</span>
              <br />
              <span className="relative inline-block whitespace-nowrap text-[2rem] min-[360px]:text-4xl sm:text-6xl xl:text-7xl">
                {t("hero.role")}
              </span>
            </h1>
          </div>
          <div
            style={{ transitionDelay: "160ms" }}
            className="reveal"
          >
            <p className="text-muted-foreground mt-7 max-w-xl text-base leading-relaxed sm:text-lg text-justify">
              {t("hero.description")}
            </p>
          </div>
          <div
            style={{ transitionDelay: "240ms" }}
            className="reveal"
          >
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#projek"
                className="rounded-xl border-2 border-ink bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[5px_5px_0_var(--ink)] transition-transform hover:-translate-y-1"
              >
                {t("hero.viewProjects")}
              </Link>
              <Link
                href="#kontak"
                className="rounded-xl border-2 border-ink bg-card px-6 py-3 text-sm font-bold shadow-[5px_5px_0_var(--ink)] transition-transform hover:-translate-y-1"
              >
                {t("hero.letsCollaborate")}
              </Link>
              <div className="flex items-center gap-2">
                <Link
                  href="https://wa.me/6285338714313"
                  target="_blank"
                  className="grid size-11 place-items-center rounded-xl border-2 border-ink bg-card transition-transform hover:-translate-y-1 hover:text-primary"
                  aria-label="WhatsApp"
                >
                  <IoLogoWhatsapp className="text-xl" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/muhammad-ary-687552209/"
                  target="_blank"
                  className="grid size-11 place-items-center rounded-xl border-2 border-ink bg-card transition-transform hover:-translate-y-1 hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </Link>
                <Link
                  href="mailto:mariwi1503@gmail.com"
                  className="grid size-11 place-items-center rounded-xl border-2 border-ink bg-card transition-transform hover:-translate-y-1 hover:text-primary"
                  aria-label="Email"
                >
                  <FaEnvelope className="text-xl" />
                </Link>
              </div>
            </div>
          </div>
          <div
            style={{ transitionDelay: "320ms" }}
            className="reveal"
          >
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-3">
              <div className="rounded-2xl border-2 border-ink bg-card px-3 py-4">
                <dt className="font-display text-2xl font-black sm:text-3xl">
                  4+
                </dt>
                <dd className="text-muted-foreground mt-1 text-[11px] font-semibold uppercase sm:text-xs">
                  {t("hero.yearsExperience")}
                </dd>
              </div>
              <div className="rounded-2xl border-2 border-ink bg-card px-3 py-4">
                <dt className="font-display text-2xl font-black sm:text-3xl">
                  10+
                </dt>
                <dd className="text-muted-foreground mt-1 text-[11px] font-semibold uppercase sm:text-xs">
                  {t("hero.projectsCompleted")}
                </dd>
              </div>
              <div className="rounded-2xl border-2 border-ink bg-card px-3 py-4">
                <dt className="font-display text-2xl font-black sm:text-3xl">
                  100%
                </dt>
                <dd className="text-muted-foreground mt-1 text-[11px] font-semibold uppercase sm:text-xs">
                  {t("hero.responsibility")}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div
          style={{ transitionDelay: "200ms" }}
          className="reveal relative"
        >
          <div className="relative mx-auto w-[85%] max-w-sm sm:w-full">
            <div className="animate-float-slow absolute -top-6 -left-6 z-10 rounded-2xl border-2 border-ink bg-mint px-4 py-2 text-xs font-black shadow-[4px_4px_0_var(--ink)]">
              {"{ API: 'ready' }"}
            </div>
            <div
              className="animate-float-slow absolute -right-4 bottom-16 z-10 rounded-2xl border-2 border-ink bg-citrus px-4 py-2 text-xs font-black shadow-[4px_4px_0_var(--ink)]"
              style={{ animationDelay: "-3s" }}
            >
              {t("hero.uptime")}
            </div>
            <div className="rotate-3 rounded-[2rem] border-2 border-ink bg-sky p-3 shadow-[10px_10px_0_var(--ink)]">
              <img
                src="/images/hero.png"
                alt="Foto Ary, backend software engineer"
                width="900"
                height="1100"
                className="-rotate-3 rounded-[1.5rem] border-2 border-ink object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 overflow-hidden border-y-2 border-ink bg-ink py-3">
        <div className="animate-marquee flex w-max gap-8 pr-8">
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            Node.js <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            Express <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            NestJS <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            React <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            Next.js <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            Python <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            FastAPI <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            PostgreSQL <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            MySQL <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            MongoDB <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            Redis <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            Docker <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            CI/CD <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            Node.js <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            Express <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            NestJS <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            React <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            Next.js <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            Python <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            FastAPI <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            PostgreSQL <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            MySQL <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            MongoDB <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            Redis <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            Docker <span className="text-citrus">✦</span>
          </span>
          <span className="font-display text-sm font-black tracking-wide whitespace-nowrap text-cream uppercase sm:text-base">
            CI/CD <span className="text-citrus">✦</span>
          </span>
        </div>
      </div>
      <div className="text-muted-foreground mt-8 flex justify-center"></div>
    </section>
  );
}
