import About from "@/components/About";
import Client from "@/components/Client";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

import SliderSection from "@/components/SliderSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />

      <Services />

      <Client />

      <Projects />

      <Contact />
    </div>
  )
}