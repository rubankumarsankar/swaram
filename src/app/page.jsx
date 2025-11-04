import Hero from "./components/HomePage/HeroSection";
import PressLogos from "./components/HomePage/PressLogos";
import AboutSection from "./components/HomePage/AboutSection";
import WhyChooseUs from "./components/HomePage/WhyChooseUs";
import ServicesGrid from "./components/HomePage/ServicesGrid";
import HealthCareSlider from "./components/HomePage/HealthCareSlider";
import PartnershipOverview from "./components/HomePage/PartnershipOverview";

export default function Home() {
  return (
    <>
    <Hero/>
    <PressLogos />
    <AboutSection/>
    <WhyChooseUs />
    <ServicesGrid />
    <HealthCareSlider />
    <PartnershipOverview />
    </>
  );
}
