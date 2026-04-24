import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import {WhyUs} from "@/components/WhyUs";
import ServiceArea  from "@/components/ServiceArea";
// import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="p-10">
      <h1 className="md:text-4xl font-bold text-gray-900 leading-tight mb-6 text-end"> <span className="text-orange-500">EJ </span>Tech Solutions</h1>
      <Hero />
      <Services />
      <ServiceArea />
      <WhyUs />
      <Contact />
    </main>
  );
}
