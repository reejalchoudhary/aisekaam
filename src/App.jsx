import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { TrustedCompanies } from "./components/TrustedCompanies";
import { PlatformPreview } from "./components/PlatformPreview";
import { BentoFeatures } from "./components/BentoFeatures";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/PricingSection";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <PlatformPreview />
      <BentoFeatures />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default App;