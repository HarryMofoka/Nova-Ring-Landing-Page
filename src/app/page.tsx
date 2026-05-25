import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EcosystemSection from "@/components/EcosystemSection";
import TechnicalSection from "@/components/TechnicalSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <EcosystemSection />
      <TechnicalSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
