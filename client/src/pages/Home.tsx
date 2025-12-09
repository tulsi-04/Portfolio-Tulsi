import Hero from "@/components/sections/Hero";
import QuickLinks from "@/components/sections/QuickLinks";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Certificates from "@/components/sections/Certificates";
import Projects from "@/components/sections/Projects";
import RaveSection from "@/components/sections/RaveSection";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative" data-testid="page-home">
      <Hero />
      <QuickLinks />
      <About />
      <Skills />
      <Education />
      <Certificates />
      <Projects />
      <RaveSection />
      <Contact />
    </main>
  );
}
