"use client";

import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaLinkedin, FaGithub, FaLocationDot } from "react-icons/fa6";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();
  return (
    <section id="kontak" className="relative overflow-hidden pt-10 pb-20 sm:pt-14 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          style={{ transitionDelay: "0ms" }}
          className="reveal"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-ink bg-[image:var(--gradient-hero)] p-8 shadow-[10px_10px_0_var(--ink)] sm:p-14">
            <div className="bg-dots absolute inset-0 opacity-40"></div>
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="min-w-0">
                <h2 className="text-3xl leading-tight font-black text-ink sm:text-5xl">
                  {t("contact.title1")}
                  <br />
                  {t("contact.title2")}
                </h2>
                <p className="mt-4 max-w-md leading-relaxed text-ink/75">
                  {t("contact.subtitle")}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="mailto:mariwi1503@gmail.com"
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-ink px-6 py-3 text-sm font-bold text-cream shadow-[5px_5px_0_var(--card)] transition-transform hover:-translate-y-1"
                  >
                    {" "}
                    {t("contact.email")}
                  </Link>
                  <Link
                    href="https://wa.me/6285338714313"
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-card px-6 py-3 text-sm font-bold shadow-[5px_5px_0_var(--ink)] transition-transform hover:-translate-y-1"
                  >
                    WhatsApp
                  </Link>
                </div>
              </div>
              <ul className="space-y-3 min-w-0">
                <li className="flex items-center gap-4 rounded-2xl border-2 border-ink bg-card/90 px-5 py-4 backdrop-blur-sm">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border-2 border-ink bg-citrus">
                    <FaEnvelope className="text-xl text-ink" />
                  </span>
                  <span className="min-w-0">
                    <span className="text-muted-foreground block text-[11px] font-bold uppercase">
                      Email
                    </span>
                    <span className="block truncate text-sm font-bold">
                      mariwi1503@gmail.com
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-4 rounded-2xl border-2 border-ink bg-card/90 px-5 py-4 backdrop-blur-sm">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border-2 border-ink bg-citrus">
                    <FaLinkedin className="text-xl text-ink" />
                  </span>
                  <span className="min-w-0">
                    <span className="text-muted-foreground block text-[11px] font-bold uppercase">
                      LinkedIn
                    </span>
                    <span className="block truncate text-sm font-bold">
                      linkedin.com/in/muhammad-ary-687552209/
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-4 rounded-2xl border-2 border-ink bg-card/90 px-5 py-4 backdrop-blur-sm">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border-2 border-ink bg-citrus">
                    <FaGithub className="text-xl text-ink" />
                  </span>
                  <span className="min-w-0">
                    <span className="text-muted-foreground block text-[11px] font-bold uppercase">
                      GitHub
                    </span>
                    <span className="block truncate text-sm font-bold">
                      github.com/mariwi1503
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-4 rounded-2xl border-2 border-ink bg-card/90 px-5 py-4 backdrop-blur-sm">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border-2 border-ink bg-citrus">
                    <FaLocationDot className="text-xl text-ink" />
                  </span>
                  <span className="min-w-0">
                    <span className="text-muted-foreground block text-[11px] font-bold uppercase">
                      {t("contact.location")}
                    </span>
                    <span className="block truncate text-sm font-bold">
                      Batam, Indonesia
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
