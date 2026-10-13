"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaArrowUpRightFromSquare, FaCheck, FaLaptopCode, FaXmark } from "react-icons/fa6";
import { demoApps, type DemoApp } from "@/constants/demos";
import { useLanguage } from "@/contexts/LanguageContext";

const themes = {
  mint: "bg-mint",
  sky: "bg-sky",
  lilac: "bg-lilac",
};

function DemoCard({ demo }: { demo: DemoApp }) {
  const { t, language } = useLanguage();

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border-2 border-ink bg-card shadow-[6px_6px_0_var(--ink)] transition-transform duration-300 hover:-translate-y-1.5">
      <div className={`relative aspect-[16/10] overflow-hidden border-b-2 border-ink ${themes[demo.theme]}`}>
        {demo.screenshot ? (
          <Image
            src={demo.screenshot}
            alt={`${t("demo.screenshotAlt")} ${demo.title}`}
            fill
            sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <div className="bg-dots absolute inset-0 opacity-30" aria-hidden="true" />
            <div className="absolute inset-x-6 top-6 bottom-0 overflow-hidden rounded-t-xl border-2 border-b-0 border-ink bg-card shadow-[4px_4px_0_var(--ink)]" aria-hidden="true">
              <div className="flex items-center gap-1.5 border-b-2 border-ink bg-cream px-3 py-2.5">
                <span className="size-2 rounded-full bg-coral" />
                <span className="size-2 rounded-full bg-citrus" />
                <span className="size-2 rounded-full bg-mint" />
                <span className="ml-auto text-[10px] font-bold">{demo.title}</span>
              </div>
              <div className="flex h-full">
                <div className="w-12 shrink-0 space-y-3 border-r border-ink/15 bg-secondary/50 p-3">
                  <div className={`size-6 rounded-md border border-ink ${themes[demo.theme]}`} />
                  <div className="h-1.5 w-6 rounded-full bg-ink/20" />
                  <div className="h-1.5 w-6 rounded-full bg-ink/10" />
                  <div className="h-1.5 w-6 rounded-full bg-ink/10" />
                </div>
                <div className="min-w-0 flex-1 p-3">
                  <div className="mb-3 h-2 w-1/2 rounded-full bg-ink/20" />
                  <div className="grid grid-cols-3 gap-2">
                    {[0, 1, 2].map((item) => (
                      <div key={item} className="rounded-lg border border-ink/15 p-2">
                        <div className="h-1 w-3/4 rounded-full bg-ink/15" />
                        <div className={`mt-2 h-3 w-1/2 rounded ${themes[demo.theme]}`} />
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex h-16 items-end gap-2 rounded-lg border border-ink/15 px-3 pt-3">
                    {[35, 60, 45, 85, 65, 100, 80].map((height, index) => (
                      <div key={index} style={{ height: `${height}%` }} className={`flex-1 rounded-t ${themes[demo.theme]}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <span className="absolute bottom-3 right-3 rounded-md border border-ink/20 bg-card px-2 py-1 text-[10px] font-bold">
              {t("demo.illustration")}
            </span>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-[10px] font-bold">
          <span className={`min-w-0 rounded-full border border-ink/20 px-2.5 py-1 ${themes[demo.theme]}`}>
            {demo.category[language]}
          </span>
          <span className="ml-auto shrink-0 rounded-full border border-ink/15 bg-secondary px-2.5 py-1">
            {demo.platform}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-black">{demo.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{demo.description[language]}</p>
        <ul className="my-5 space-y-2">
          {demo.features[language].map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm font-semibold">
              <FaCheck aria-hidden="true" className="mt-1 size-3 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-2">
          {demo.url ? (
            <a
              href={demo.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t(demo.linkType === "preview" ? "demo.viewPreview" : "demo.tryDemo")} — ${demo.title}`}
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-ink bg-citrus px-4 py-3 text-sm font-bold shadow-[3px_3px_0_var(--ink)] transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {t(demo.linkType === "preview" ? "demo.viewPreview" : "demo.tryDemo")}
              <FaArrowUpRightFromSquare aria-hidden="true" className="size-3" />
            </a>
          ) : (
            <button type="button" disabled className="w-full cursor-not-allowed rounded-xl border-2 border-ink/15 bg-secondary px-4 py-3 text-sm font-bold text-muted-foreground">
              {t("demo.comingSoon")}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export function DemoSection() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);
  const featuredDemos = demoApps.slice(0, 3);

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    if (!isModalOpen) {
      if (modal.open) modal.close();
      return;
    }

    if (!modal.open) modal.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      if (modal.open) modal.close();
    };
  }, [isModalOpen]);

  return (
    <section id="demo" aria-labelledby="demo-title" className="relative scroll-mt-28 overflow-hidden border-y-2 border-ink bg-cream py-20 sm:py-28">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-card px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase">
            <span className="size-2 rounded-full bg-mint" />
            {t("demo.badge")}
          </span>
          <h2 id="demo-title" className="mt-5 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            {t("demo.title1")}
            <span className="text-gradient-cool">{t("demo.title2")}</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{t("demo.subtitle")}</p>
        </div>

        <div id="demo-gallery" className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredDemos.map((demo) => <DemoCard key={demo.id} demo={demo} />)}
        </div>

        <div className="mt-12 flex justify-center">
          <button type="button" onClick={() => setIsModalOpen(true)} aria-haspopup="dialog" aria-controls="demo-modal" className="cursor-pointer rounded-xl border-2 border-ink bg-card px-6 py-3 text-sm font-bold shadow-[4px_4px_0_var(--ink)] transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            {t("demo.viewAll")} ({demoApps.length})
          </button>
        </div>

        <div className="reveal mt-10 flex flex-col gap-5 rounded-2xl border-2 border-ink bg-card p-6 shadow-[4px_4px_0_var(--ink)] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl border-2 border-ink bg-mint">
              <FaLaptopCode aria-hidden="true" className="text-lg" />
            </span>
            <div>
              <p className="font-bold">{t("demo.noteTitle")}</p>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">{t("demo.note")}</p>
            </div>
          </div>
          <Link href="#kontak" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border-2 border-ink bg-citrus px-5 py-3 text-sm font-bold shadow-[3px_3px_0_var(--ink)] transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            {t("demo.discussNeeds")}
            <FaArrowRight aria-hidden="true" className="size-3" />
          </Link>
        </div>
      </div>

      <dialog
        ref={modalRef}
        id="demo-modal"
        aria-labelledby="demo-modal-title"
        onCancel={() => setIsModalOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setIsModalOpen(false);
        }}
        className="m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-6xl overflow-hidden rounded-[2rem] border-2 border-ink bg-cream p-0 text-foreground shadow-[8px_8px_0_var(--ink)] backdrop:bg-ink/50 backdrop:backdrop-blur-sm sm:w-[calc(100%-3rem)]"
      >
        <div className="relative flex max-h-[90vh] flex-col">
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            aria-label={t("demo.closeModal")}
            className="absolute right-4 top-4 z-10 grid size-10 cursor-pointer place-items-center rounded-xl border-2 border-ink bg-card shadow-[2px_2px_0_var(--ink)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:right-6 sm:top-6"
          >
            <FaXmark aria-hidden="true" className="size-4" />
          </button>
          <div className="min-h-0 flex-1 overflow-y-auto p-6 sm:p-10">
            <div className="mb-8 pr-12">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                <span className="size-1.5 rounded-full bg-mint" />
                {t("demo.modalBadge")}
              </span>
              <h3 id="demo-modal-title" className="mt-4 text-2xl font-black sm:text-3xl">{t("demo.modalTitle")}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{t("demo.modalDesc")}</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {demoApps.map((demo) => (
                <DemoCard key={demo.id} demo={demo} />
              ))}
            </div>
          </div>
        </div>
      </dialog>
    </section>
  );
}
