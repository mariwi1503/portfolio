import Link from "next/link";
import Image from "next/image";

export function AboutSection() {
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
                My name is Muhammad Ary Widodo, I was born and raised in Sumbawa, West Nusa Tenggara, Indonesia, coming from a family of farmers where my first job was working in the fields. Over the years, I took on various roles, including driving and working as a motorcycle taxi driver, before discovering my true calling. Once I found my passion for programming, I committed fully to pursuing it as my lifelong career.
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                I am a dedicated and versatile Software Developer with experience in building, maintaining, and scaling web-based applications across diverse industries. My background covers both frontend and backend development, enabling me to contribute throughout the entire software development lifecycle, from system design and implementation to deployment and maintenance.
              </p>

              <p className="text-muted-foreground mt-4 leading-relaxed">
                I possess a strong work ethic and am always eager to learn new things. Furthermore, I am skilled in time management, possess excellent communication skills, and am a logical thinker. I hold a great deal of respect for others and am always willing to lend a helping hand whenever necessary.
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
              <span className="size-2 rounded-full bg-coral"></span>Tentang Saya
            </span>
            <h2 className="mt-5 text-3xl leading-tight font-black sm:text-4xl md:text-5xl">
              Bukan sekadar menulis{" "}
              <span className="text-gradient-warm">kode</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
              Saya percaya produk yang baik lahir dari fondasi teknis yang rapi
              dan komunikasi yang sehat.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div
              style={{ transitionDelay: "0ms" }}
              className="reveal"
            >
              <div className="h-full rounded-2xl border-2 border-ink bg-card p-5 transition-transform hover:-translate-y-1">
                <h3 className="mt-3 text-base font-black">Kode yang dirawat</h3>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                  Bersih, teruji, dan mudah dilanjutkan orang lain.
                </p>
              </div>
            </div>
            <div
              style={{ transitionDelay: "70ms" }}
              className="reveal"
            >
              <div className="h-full rounded-2xl border-2 border-ink bg-card p-5 transition-transform hover:-translate-y-1">
                <h3 className="mt-3 text-base font-black">Performa dulu</h3>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                  Query, caching, dan struktur data dipikirkan sejak awal.
                </p>
              </div>
            </div>
            <div
              style={{ transitionDelay: "140ms" }}
              className="reveal"
            >
              <div className="h-full rounded-2xl border-2 border-ink bg-card p-5 transition-transform hover:-translate-y-1">
                <h3 className="mt-3 text-base font-black">Komunikasi jelas</h3>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                  Progres transparan, tanpa jargon yang membingungkan.
                </p>
              </div>
            </div>
            <div
              style={{ transitionDelay: "210ms" }}
              className="reveal"
            >
              <div className="h-full rounded-2xl border-2 border-ink bg-card p-5 transition-transform hover:-translate-y-1">
                <h3 className="mt-3 text-base font-black">Belajar terus</h3>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                  Selalu mencoba tools baru di proyek sampingan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
