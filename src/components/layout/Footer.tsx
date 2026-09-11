import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink py-8 text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm sm:flex-row sm:px-6">
        <p className="font-display font-black">ary.dev</p>
        <p className="text-cream/60">© 2026 — Dibuat dengan ☕ dan kode.</p>
      </div>
    </footer>
  );
}
