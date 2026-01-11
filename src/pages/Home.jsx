
import FeaturesSection from "../components/landing/FeaturesSection";
import Footer from "../components/landing/Footer";
import HeroSection from "../components/landing/HeroSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import WhySection from "../components/landing/WhySection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <WhySection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
}
