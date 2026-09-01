import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import {WhyUs} from "@/components/WhyUs";
import ServiceArea  from "@/components/ServiceArea";
import Portfolio from "@/components/Portfolio";
import NavBar from "@/components/Navbar";
// import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="px-0">
      <NavBar />
      <Hero />
      <Services />
      <Portfolio />
      <ServiceArea />
      <WhyUs />
      <Contact />
    </main>
  );
}
