"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <nav className="relative mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border-2 border-ink px-4 py-3 transition-all duration-300 md:flex md:justify-between bg-card/60 backdrop-blur-sm z-50">
        <Link href="#top" className="flex min-w-0 items-center gap-2" onClick={closeMobileMenu}>
          <span className="grid size-9 shrink-0 place-items-center rounded-xl border-2 border-ink bg-citrus font-display text-sm font-black">
            MA
          </span>
          <span className="truncate font-display text-base font-black">
            Muhammad Ary
          </span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          <Link
            href="#skill"
            className="hover:bg-secondary rounded-lg px-3 py-2 text-sm font-semibold transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#projek"
            className="hover:bg-secondary rounded-lg px-3 py-2 text-sm font-semibold transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#pengalaman"
            className="hover:bg-secondary rounded-lg px-3 py-2 text-sm font-semibold transition-colors"
          >
            Experience
          </Link>
          <Link
            href="#testimoni"
            className="hover:bg-secondary rounded-lg px-3 py-2 text-sm font-semibold transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#tentang"
            className="hover:bg-secondary rounded-lg px-3 py-2 text-sm font-semibold transition-colors"
          >
            About
          </Link>
          <Link
            href="#kontak"
            className="ml-2 rounded-xl border-2 border-ink bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-[3px_3px_0_var(--ink)] transition-transform hover:-translate-y-0.5"
          >
            Contact Me
          </Link>
        </div>
        <button
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          className="grid size-10 shrink-0 place-items-center rounded-xl border-2 border-ink bg-card md:hidden transition-transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <FaXmark className="text-xl text-ink" />
          ) : (
            <FaBars className="text-xl text-ink" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute left-3 right-3 top-full mt-2 rounded-2xl border-2 border-ink bg-card p-4 shadow-[6px_6px_0_var(--ink)] md:hidden animate-in slide-in-from-top-4 fade-in duration-200">
          <div className="flex flex-col gap-2">
            <Link
              href="#skill"
              onClick={closeMobileMenu}
              className="hover:bg-secondary rounded-xl px-4 py-3 text-sm font-bold transition-colors"
            >
              Skill
            </Link>
            <Link
              href="#projek"
              onClick={closeMobileMenu}
              className="hover:bg-secondary rounded-xl px-4 py-3 text-sm font-bold transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#pengalaman"
              onClick={closeMobileMenu}
              className="hover:bg-secondary rounded-xl px-4 py-3 text-sm font-bold transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#testimoni"
              onClick={closeMobileMenu}
              className="hover:bg-secondary rounded-xl px-4 py-3 text-sm font-bold transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#tentang"
              onClick={closeMobileMenu}
              className="hover:bg-secondary rounded-xl px-4 py-3 text-sm font-bold transition-colors"
            >
              About
            </Link>
            <Link
              href="#kontak"
              onClick={closeMobileMenu}
              className="mt-2 text-center rounded-xl border-2 border-ink bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-[4px_4px_0_var(--ink)] transition-transform active:translate-y-1 active:shadow-none"
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
