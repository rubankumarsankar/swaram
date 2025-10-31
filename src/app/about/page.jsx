import AboutUsCarousel from "../components/AboutPage/AboutUsCarousel";
import AboutUsCentered from "../components/AboutPage/AboutUsCentered";
import CoreValues from "../components/AboutPage/CoreValues";
import FoundersSection from "../components/AboutPage/FoundersSection";
import MissionVision from "../components/AboutPage/MissionVision";
import PageBanner from "../components/PageBanner";



export default function About() {
  return <>
  <PageBanner
            bgDesktop="/banner/about-banner.jpg"
            bgMobile="/banner/about-banner-mob.jpg"
          />
  <AboutUsCentered />
  <AboutUsCarousel />
  <CoreValues />
  <MissionVision />
  <FoundersSection />
  </>;
}
