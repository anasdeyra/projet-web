import Hero from "../components/pages/index/Hero";
import Features from "../components/pages/index/Features";
import Cta from "../components/pages/index/Cta";
import Services from "./services";
import Testimonials from "../components/pages/index/testimonials";
import FAQ from "../components/pages/index/FAQ";

export default function Index() {
  return (
    <>
      <Hero />
      <Features />
      <Cta />
      <Services />
      <Testimonials />
      <FAQ />
    </>
  );
}
