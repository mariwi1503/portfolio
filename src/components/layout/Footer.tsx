"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t-2 border-ink bg-ink py-8 text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm sm:flex-row sm:px-6">
        <p className="font-display font-black">Muhammad Ary</p>
        <p className="text-cream/60">© 2026 — {t("footer.text")}</p>
      </div>
    </footer>
  );
}
