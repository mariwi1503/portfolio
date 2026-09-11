import { ScrollObserver } from "@/components/layout/ScrollObserver";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillSection } from "@/components/sections/SkillSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <div className="bg-background min-h-screen overflow-x-hidden">
        <ScrollObserver />
        <Header />
        <main>
          <HeroSection />
          <SkillSection />
          <ProjectSection />
          <ExperienceSection />
          <TestimonialSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
