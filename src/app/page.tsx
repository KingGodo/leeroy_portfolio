import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Impact } from "@/sections/Impact";
import { Achievements } from "@/sections/Achievements";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Gallery } from "@/sections/Gallery";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Impact />
      <Achievements />
      <Experience />
      <Education />
      <Gallery />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
    </>
  );
}
