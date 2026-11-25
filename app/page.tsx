import Calculator from "@/components/Calculator";
import CostSection from "@/components/CostSection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Masterclass from "@/components/Masterclass";
import Nav from "@/components/Nav";
import Problems from "@/components/Problems";
import Realization from "@/components/Realization";
import Speaker from "@/components/Speaker";
import StickyCTA from "@/components/StickyCTA";
import Takeaways from "@/components/Takeaways";
import ValueStrip from "@/components/ValueStrip";
import WhoIsItFor from "@/components/WhoIsItFor";

export default function Home() {
  return (
    <main className="flex-1">
      <Nav />
      <Hero />
      <ValueStrip />
      <Problems />
      <CostSection />
      <Realization />
      <Calculator />
      <Masterclass />
      <Speaker />
      <Takeaways />
      <WhoIsItFor />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </main>
  );
}
