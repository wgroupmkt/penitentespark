import Image from "next/image";
import Hero from "../components/hero";
import Navbar from "../components/navbar"
import Activities from "@/components/activities/Activities";
import Passes from "@/components/passes/Passes";
import Restaurant from "@/components/restaurant/Restaurant";
import Promotions from "@/components/promotions/Promotions";
import Services from "@/components/services/Services";
import Gallery from "@/components/gallery/Gallery";
import Testimonials from "@/components/testimonials/Testimonials";
import ContactCTA from "@/components/contact/ContactCTA";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Navbar />
      <Activities />
      <Passes />
      <Restaurant />
      <Promotions />
      <Services />
      <Gallery />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </div>
  );
}
