"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    image: "/portfolio/trubus.png",
    title: "Halo Trubus",
    tags: ["Web + Mobile", "2026"],
    description: {
      en: "Halo Trubus is an integrated agricultural application that helps you fulfill your gardening and cultivation needs more easily, practically, and reliably. Through Halo Trubus, you can shop for various agricultural products, read informative articles, and consult directly with experts to get solutions tailored to your plants' needs.",
      id: "Halo Trubus adalah aplikasi pertanian terintegrasi yang membantu Anda memenuhi kebutuhan berkebun dan budidaya dengan lebih mudah, praktis, dan dapat diandalkan. Melalui Halo Trubus, Anda dapat berbelanja berbagai produk pertanian, membaca artikel informatif, dan berkonsultasi langsung dengan para ahli untuk mendapatkan solusi yang disesuaikan dengan kebutuhan tanaman Anda.",
    },
    ownership: "PT. Trubus Mitra Swadaya",
    role: "Fullstack Engineer",
    contribution: {
      en: "I drove the entire Software Development Life Cycle (SDLC) from initial prototyping and architecture design to final production release.",
      id: "Saya memimpin seluruh Siklus Hidup Pengembangan Perangkat Lunak (SDLC) dari prototipe awal dan desain arsitektur hingga rilis produksi akhir.",
    },
    status: "live",
    url: "https://apps.apple.com/id/app/halo-trubus/id6790691531",
    techs: ["NestJS", "Next.js", "PostgreSQL", "React Native", "MinIO"],
    bgClass: "bg-lilac",
  },
  {
    image: "/portfolio/silaju.png",
    title: "Silaju Perumahan",
    tags: ["Web App", "2026"],
    description: {
      en: "Silaju Perumahan is a web application for managing residential data",
      id: "Silaju Perumahan adalah aplikasi web untuk mengelola data perumahan",
    },
    ownership: "Perkim KSB",
    role: "Backend and Devops Engineer",
    contribution: {
      en: "Architected and built backend systems, including VPS server provisioning and DNS management.",
      id: "Membangun arsitektur backend, mengonfigurasi server VPS, dan mengelola pengaturan DNS/domain.",
    },
    status: "live",
    url: "https://silaju.com",
    techs: ["Node.js", "PostgreSQL", "React", "MinIO"],
    bgClass: "bg-mint",
  },
  {
    image: "/portfolio/super.png",
    title: "SuperApp",
    tags: ["E-commerce", "2021"],
    description: {
      en: "SuperApp is an e-commerce application that provides basic necessities and more, highly beneficial for grocers and wholesalers. This application was developed by PT. Krakatau Karya Abadi, my previous employer, and when I joined, it had already been downloaded by over 50,000 people on the Play Store",
      id: "SuperApp adalah aplikasi e-commerce yang menyediakan kebutuhan pokok dan lainnya, sangat bermanfaat bagi pedagang kelontong dan grosir. Aplikasi ini dikembangkan oleh PT. Krakatau Karya Abadi, tempat saya bekerja sebelumnya, dan ketika saya bergabung, aplikasi ini telah diunduh oleh lebih dari 50.000 orang di Play Store",
    },
    ownership: "PT. Krakatau Karya Abadi",
    role: "Backend Engineer",
    contribution: {
      en: "working on lighter tasks assigned by the tech leader, such as adjusting API responses and implementing improvements, but I didn't contribute much on the feature side because the application was already quite large when I joined.",
      id: "mengerjakan tugas-tugas ringan yang diberikan oleh tech lead, seperti menyesuaikan respons API dan mengimplementasikan perbaikan, namun saya tidak banyak berkontribusi di sisi fitur karena aplikasinya sudah cukup besar ketika saya bergabung.",
    },
    status: "live",
    url: "https://play.google.com/store/apps/details?id=com.superagent.agent&utm_source=website-header",
    techs: [
      "Nodejs",
      "Express",
      "Nest",
      "Mysql",
      "Ionic",
      "Flutter",
      "Firebase",
    ],
    bgClass: "bg-citrus",
  },
  {
    image: "/portfolio/cosiri.png",
    title: "Cosiri",
    tags: ["Web App", "2023"],
    description: {
      en: "The Consumer Sustainability Industry Readiness Index (COSIRI) is a comprehensive framework and set of tools designed to assist manufacturers, regardless of size or industry, to embed sustainability into all their operations.",
      id: "Consumer Sustainability Industry Readiness Index (COSIRI) adalah kerangka kerja komprehensif dan seperangkat alat yang dirancang untuk membantu produsen, terlepas dari ukuran atau industri, untuk menanamkan keberlanjutan ke dalam semua operasi mereka.",
    },
    ownership: "INCIT (International Center for Industrial Transformation).",
    role: "Backend Engineer",
    contribution: {
      en: "Building the server-side application that powers the web app, where I was involved in over 50% of all backend features",
      id: "Membangun aplikasi sisi server yang mendukung aplikasi web, di mana saya terlibat dalam lebih dari 50% semua fitur backend",
    },
    status: "live",
    url: "https://cosiri.incit.org/",
    techs: ["Nodejs", "Nest", "Prisma", "PosgreSQL", "React", "Tailwind"],
    bgClass: "bg-coral",
  },
  {
    image: "/portfolio/siri.png",
    title: "Siri",
    tags: ["Web App", "2023"],
    description: {
      en: "The Smart Industry Readiness Index (SIRI) is the world’s first independent digital maturity assessment for manufacturers. It comprises a suite of frameworks and tools to help manufacturers – regardless of size and industry – start, scale, and sustain their manufacturing transformation journeys.",
      id: "Smart Industry Readiness Index (SIRI) adalah penilaian kematangan digital independen pertama di dunia untuk produsen. Ini terdiri dari serangkaian kerangka kerja dan alat untuk membantu produsen - terlepas dari ukuran dan industri - memulai, menskalakan, dan mempertahankan perjalanan transformasi manufaktur mereka.",
    },
    ownership: "INCIT (International Center for Industrial Transformation).",
    role: "Backend Engineer",
    contribution: {
      en: "Building the server-side application that powers the web app, in which I was involved in nearly 80% of all backend features",
      id: "Membangun aplikasi sisi server yang mendukung aplikasi web, di mana saya terlibat dalam hampir 80% semua fitur backend",
    },
    status: "live",
    url: "https://siri.incit.org/",
    techs: ["Nodejs", "Nest", "Prisma", "PosgreSQL", "React", "Tailwind"],
    bgClass: "bg-sky",
  },
  {
    image: "/portfolio/ikasum.png",
    title: "IKASUM Batam",
    tags: ["Social", "2024"],
    description: {
      en: "The Ikasum website serves as an information-sharing platform and a database for Sumbawa residents living in Batam, designed to streamline coordination and strengthen community bonds.",
      id: "Website Ikasum berfungsi sebagai platform berbagi informasi dan database bagi warga Sumbawa yang tinggal di Batam, dirancang untuk menyederhanakan koordinasi dan memperkuat ikatan komunitas.",
    },
    ownership: "Owned by me",
    role: "Founder and Developer",
    contribution: {
      en: "Building the website",
      id: "Membangun website",
    },
    status: "live",
    url: "https://ikasum.vercel.app/",
    techs: ["Nextjs", "Tailwind", "V0"],
    bgClass: "bg-lilac",
  },
  {
    image: "/portfolio/hulucash.png",
    title: "Hulucash",
    tags: ["Fintech", "2023"],
    description: {
      en: "This application is an employee loan application, which makes the process faster and more accurate.",
      id: "Aplikasi ini adalah aplikasi pinjaman karyawan, yang membuat prosesnya menjadi lebih cepat dan akurat.",
    },
    ownership: "This Product is fully owned by RSI Client.",
    role: "Backend Lead",
    contribution: {
      en: "Serving as the engineering lead and being responsible for providing the backend application to support both web and mobile platforms",
      id: "Bertindak sebagai engineering lead dan bertanggung jawab untuk menyediakan aplikasi backend yang mendukung platform web dan mobile",
    },
    status: "Private",
    url: "",
    techs: ["Next.js", "Prisma", "MySQL"],
    bgClass: "bg-citrus",
  },
  {
    image: "/portfolio/karakterku.png",
    title: "Karakterku",
    tags: ["Education", "2023"],
    description: {
      en: "Karakterku is an application created as an aid for one of our clients who is completing their master's degree at a university.",
      id: "Karakterku adalah aplikasi yang dibuat sebagai alat bantu bagi salah satu klien kami yang sedang menyelesaikan gelar masternya di universitas.",
    },
    ownership: "This Product is currently owned by Miftahul, My client",
    role: "Backend Developer",
    contribution: {
      en: "building the server-side application that powers the web app and being involved in all backend features, as I was the sole backend developer",
      id: "membangun aplikasi sisi server yang mendukung aplikasi web dan terlibat dalam semua fitur backend, karena saya adalah satu-satunya pengembang backend",
    },
    status: "offline",
    url: "",
    techs: ["Nodejs", "React", "Tailwind", "Express"],
    bgClass: "bg-mint",
  },
  {
    image: "/portfolio/pos.png",
    title: "POS Walidain",
    tags: ["Point of Sale", "2024"],
    description: {
      en: "This is a point of sales application created specifically for the management of goods at the 'Walidain' store.",
      id: "Ini adalah aplikasi point of sales yang dibuat khusus untuk manajemen barang di toko 'Walidain'.",
    },
    ownership: "This Product is currently owned by 'Walidain' store.",
    role: "Backend Developer",
    contribution: {
      en: "Building the server-side application that powers both web and mobile platforms",
      id: "Membangun aplikasi sisi server yang mendukung platform web dan mobile",
    },
    status: "live",
    url: "",
    techs: ["Nodejs", "Next", "React Native", "Tailwind", "Nest", "Prisma"],
    bgClass: "bg-coral",
  },



];

// Komponen kartu projek yang dapat diklik
function ProjectCard({
  proj,
  isWide,
  onClick,
  language,
}: {
  proj: any;
  isWide: boolean;
  onClick: () => void;
  language: "en" | "id";
}) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer w-full text-left group flex h-full flex-col gap-4 rounded-[2rem] border-2 border-ink bg-card p-5 shadow-[6px_6px_0_var(--ink)] transition-transform duration-300 hover:-translate-y-1.5 focus:outline-none focus:ring-4 focus:ring-ink"
    >
      {/* Visual */}
      <figure
        className={`overflow-hidden rounded-2xl border-2 border-ink ${proj.bgClass} p-3 sm:p-4 w-full`}
      >
        <img
          src={proj.image}
          alt={`Tampilan projek ${proj.title}`}
          loading="lazy"
          className={`w-full rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.04] ${isWide ? "aspect-[21/9] md:aspect-[16/6]" : "aspect-[4/3]"}`}
        />
      </figure>
      <div className="flex min-w-0 flex-grow flex-col w-full">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {proj.tags?.map((tag: string, tIdx: number) => (
            <span
              key={tIdx}
              className={
                tIdx === 0
                  ? "rounded-full border-2 border-ink bg-citrus px-2 py-0.5 text-[10px] font-black uppercase"
                  : "text-muted-foreground text-[10px] font-bold"
              }
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-black sm:text-2xl">{proj.title}</h3>

        {/* Deskripsi */}
        <p className="text-muted-foreground mt-2 text-sm leading-relaxed line-clamp-2">
          {proj.description[language]}
        </p>

        <div className="mt-auto">
          {/* Tech Stack */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {proj.techs.slice(0, 4).map((tech: string, tcIdx: number) => (
              <span
                key={tcIdx}
                className="bg-secondary rounded-md border border-ink/15 px-2 py-1 text-[10px] font-bold"
              >
                {tech}
              </span>
            ))}
            {proj.techs.length > 4 && (
              <span className="bg-secondary rounded-md border border-ink/15 px-2 py-1 text-[10px] font-bold">
                +{proj.techs.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}

export function ProjectSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const { t, language } = useLanguage();

  const featuredProjects = projects.slice(0, 4);

  return (
    <section id="projek" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          style={{ transitionDelay: "0ms" }}
          className="reveal max-w-2xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-card px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase">
            <span className="size-2 rounded-full bg-coral"></span>{t("project.badge")}
          </span>
          <h2 className="mt-5 text-3xl leading-tight font-black sm:text-4xl md:text-5xl">
            {t("project.title1")}
            <span className="text-gradient-warm">{t("project.title2")}</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
            {t("project.subtitle")}
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((proj, idx) => {
            const isWide = idx === 0 || idx === 3;
            const colSpanClass = isWide ? "md:col-span-2" : "md:col-span-1";

            return (
              <div
                key={idx}
                style={{ transitionDelay: `${(idx % 3) * 70}ms` }}
                className={`reveal ${colSpanClass}`}
              >
                <ProjectCard
                  proj={proj}
                  isWide={isWide}
                  onClick={() => setSelectedProject(proj)}
                  language={language}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer rounded-xl border-2 border-ink bg-card px-6 py-3 text-sm font-bold shadow-[4px_4px_0_var(--ink)] transition-transform hover:-translate-y-1"
          >
            {t("project.viewAll")} ({projects.length})
          </button>
        </div>
      </div>

      {/* Modal Galeri Projek (Daftar Semua) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <div className="relative flex flex-col w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-[2rem] border-2 border-ink bg-cream shadow-[8px_8px_0_var(--ink)] animate-in fade-in zoom-in-95 duration-200">
            {/* Header / Close Button */}
            <div className="absolute right-4 top-4 sm:right-6 sm:top-6 z-10">
              <button
                onClick={() => setIsModalOpen(false)}
                className="cursor-pointer grid size-10 place-items-center rounded-xl border-2 border-ink bg-card shadow-[2px_2px_0_var(--ink)] transition-transform hover:-translate-y-0.5"
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
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10">

              <div className="mb-8 pr-12">
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-card px-3 py-1 text-[10px] font-bold tracking-wider uppercase">
                  <span className="size-1.5 rounded-full bg-coral"></span>{t("project.modalBadge")}
                </span>
                <h3 className="mt-4 text-2xl font-black sm:text-3xl">
                  {t("project.modalTitle")}
                </h3>
                <p className="mt-2 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {t("project.modalDesc")}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((proj, idx) => {
                  const isWide = idx === 0 || idx === 6;
                  const colSpanClass = isWide ? "md:col-span-2" : "md:col-span-1";

                  return (
                    <div key={idx} className={colSpanClass}>
                      <ProjectCard
                        proj={proj}
                        isWide={isWide}
                        onClick={() => setSelectedProject(proj)}
                        language={language}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Detail Projek */}
      {selectedProject && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>

          <div className="relative flex flex-col w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-[2rem] border-2 border-ink bg-cream shadow-[8px_8px_0_var(--ink)] animate-in fade-in zoom-in-95 duration-200">
            {/* Header / Close Button */}
            <div className="absolute right-4 top-4 sm:right-6 sm:top-6 z-10">
              <button
                onClick={() => setSelectedProject(null)}
                className="cursor-pointer grid size-10 place-items-center rounded-xl border-2 border-ink bg-card shadow-[2px_2px_0_var(--ink)] transition-transform hover:-translate-y-0.5"
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
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8">

              {/* Content Header */}
              <div className="pr-12">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="rounded-full border-2 border-ink bg-citrus px-3 py-1 text-[10px] font-black uppercase">
                    {selectedProject.role}
                  </span>
                  {selectedProject.status && (
                    <span
                      className={`rounded-full border-2 border-ink px-3 py-1 text-[10px] font-black uppercase ${selectedProject.status === "live" ? "bg-mint" : selectedProject.status === "development" ? "bg-sky" : "bg-coral"}`}
                    >
                      {selectedProject.status === "live"
                        ? t("project.statusLive")
                        : selectedProject.status === "development"
                          ? t("project.statusDev")
                          : t("project.statusOffline")}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-black sm:text-4xl">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Image */}
              <figure
                className={`mt-6 overflow-hidden rounded-2xl border-2 border-ink ${selectedProject.bgClass} p-4 sm:p-6`}
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full aspect-video rounded-xl object-contain bg-card/20"
                />
              </figure>

              {/* Detail Body */}
              <div className="mt-8 space-y-8">
                <div>
                  <h4 className="text-lg font-black border-b-2 border-ink/10 pb-2 mb-3">
                    {t("project.aboutProject")}
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {selectedProject.description[language]}
                  </p>
                </div>

                {selectedProject.contribution && (
                  <div>
                    <h4 className="text-lg font-black border-b-2 border-ink/10 pb-2 mb-3">
                      {t("project.myContribution")}
                    </h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {selectedProject.contribution[language]}
                    </p>
                  </div>
                )}

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="text-lg font-black border-b-2 border-ink/10 pb-2 mb-3">
                      {t("project.techStack")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techs.map((tech: string, i: number) => (
                        <span
                          key={i}
                          className="bg-secondary rounded-lg border border-ink/15 px-3 py-1.5 text-xs font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.ownership && (
                    <div>
                      <h4 className="text-lg font-black border-b-2 border-ink/10 pb-2 mb-3">
                        {t("project.ownership")}
                      </h4>
                      <p className="text-sm font-semibold text-muted-foreground bg-ink/5 p-3 rounded-xl border border-ink/10">
                        {selectedProject.ownership}
                      </p>
                    </div>
                  )}
                </div>

                {selectedProject.url && (
                  <div className="pt-6 mt-6 border-t-2 border-ink/10">
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full sm:w-max justify-center items-center gap-2 rounded-xl border-2 border-ink bg-citrus px-6 py-3.5 text-sm font-black shadow-[4px_4px_0_var(--ink)] hover:-translate-y-1 transition-transform"
                    >
                      {t("project.visitProject")}
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
        </div>
      )}
    </section>
  );
}
