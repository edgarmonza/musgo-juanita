import HeroSection from "@/components/HeroSection";
import GapSection from "@/components/GapSection";
import ServiciosSection from "@/components/ServiciosSection";
import SpeakerSection from "@/components/SpeakerSection";
import ProyectosSection from "@/components/ProyectosSection";
import SobreMiSection from "@/components/SobreMiSection";
import CTASection from "@/components/CTASection";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <GapSection />
        <ServiciosSection />
        <SpeakerSection />
        <ProyectosSection />
        <SobreMiSection />
        <CTASection />
      </main>
    </div>
  );
}
