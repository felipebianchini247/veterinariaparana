import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { AboutUs } from "@/components/sections/AboutUs";
import { Services } from "@/components/sections/Services";
import { Team } from "@/components/sections/Team";
import { Technology } from "@/components/sections/Technology";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <AboutUs />
        <Services />
        <Team />
        <Technology />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
