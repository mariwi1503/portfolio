"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="tentang" className="relative pt-20 pb-10 sm:pt-28 sm:pb-14">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div
          style={{ transitionDelay: "0ms" }}
          className="reveal"
        >
          <div className="relative">
            <div className="animate-blob absolute -inset-6 -z-10 bg-lilac/40 blur-2xl"></div>
            <div className="rounded-[2rem] border-2 border-ink bg-card p-8 shadow-[8px_8px_0_var(--ink)]">
              <p className="font-display text-5xl font-black">Hi 👋</p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                {t("about.p1")}
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                {t("about.p2")}
              </p>

              <p className="text-muted-foreground mt-4 leading-relaxed">
                {t("about.p3")}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ transitionDelay: "0ms" }}
            className="reveal max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-card px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase">
              <span className="size-2 rounded-full bg-coral"></span>{t("about.badge")}
            </span>
            <h2 className="mt-5 text-3xl leading-tight font-black sm:text-4xl md:text-5xl">
              {t("about.title1")}
              <span className="text-gradient-warm">{t("about.title2")}</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
              {t("about.subtitle")}
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div
              style={{ transitionDelay: "0ms" }}
              className="reveal"
            >
              <div className="h-full rounded-2xl border-2 border-ink bg-card p-5 transition-transform hover:-translate-y-1">
                <h3 className="mt-3 text-base font-black">{t("about.feature1Title")}</h3>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                  {t("about.feature1Desc")}
                </p>
              </div>
            </div>
            <div
              style={{ transitionDelay: "70ms" }}
              className="reveal"
            >
              <div className="h-full rounded-2xl border-2 border-ink bg-card p-5 transition-transform hover:-translate-y-1">
                <h3 className="mt-3 text-base font-black">{t("about.feature2Title")}</h3>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                  {t("about.feature2Desc")}
                </p>
              </div>
            </div>
            <div
              style={{ transitionDelay: "140ms" }}
              className="reveal"
            >
              <div className="h-full rounded-2xl border-2 border-ink bg-card p-5 transition-transform hover:-translate-y-1">
                <h3 className="mt-3 text-base font-black">{t("about.feature3Title")}</h3>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                  {t("about.feature3Desc")}
                </p>
              </div>
            </div>
            <div
              style={{ transitionDelay: "210ms" }}
              className="reveal"
            >
              <div className="h-full rounded-2xl border-2 border-ink bg-card p-5 transition-transform hover:-translate-y-1">
                <h3 className="mt-3 text-base font-black">{t("about.feature4Title")}</h3>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                  {t("about.feature4Desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
