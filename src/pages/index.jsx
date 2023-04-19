import Hero from "../components/pages/index/Hero";
import Features from "../components/pages/index/Features";
import Cta from "../components/pages/index/Cta";
import Services from "./services";
import Testimonials from "../components/pages/index/testimonials";
import FAQ from "../components/pages/index/FAQ";
import Cta2 from "../components/pages/index/Cta2";
import { useEffect } from "react";
export default function Index() {
  useEffect(()=>{
    document.title ="Home"
  },[])
  return (
    <>
      <Hero />
      <Features />
      <Cta />
      <Services />
      <Testimonials />
      <Cta2 />
      <FAQ />
    </>
  );
}
