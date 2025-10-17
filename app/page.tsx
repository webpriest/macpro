import Navbar from "@/components/Layouts/Navbar";
import Hero from "@/components/Sections/Hero";
import ProductViewer from "@/components/Sections/ProductViewer";
import ShowCase from "@/components/Sections/ShowCase";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <ShowCase />
    </main>
  );
}
