import React from "react";

import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import WhySection from "../components/landing/WhySection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import EmailCaptureSection from "../components/landing/EmailCaptureSection";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <WhySection />
      <HowItWorksSection />
      <EmailCaptureSection />
      <Footer />
    </div>
  );
}
