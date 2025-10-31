import PageBanner from "../components/PageBanner";
import PartnershipSolutions from "../components/Partnership/PartnershipCard";
import PartnershipSection from "../components/Partnership/PartnershipPage";
import WorkTogetherForm from "../components/Partnership/WorkTogetherForm";

export default function Partnership() {
  return <>
  <PageBanner
            bgDesktop="/banner/partner-banner.jpg"
            bgMobile="/banner/partner-banner-mob.jpg"
          />
      <PartnershipSection />
      <PartnershipSolutions 
   items={[
    {
       category: "Market",
       title: "Market Potential & Outlook",
       bullets: [
         "Swaram is well-positioned to attract large-scale, international clients due to its diverse service offerings and global presence.",
         "The combination of financial and technical leadership allows for a holistic approach to projects, from conception through to completion.",
        "Our commitment to sustainability resonates with increasingly environmentally conscious markets.",
     ],
       image: "/assets/service-img-1.png"
    }
   ]}
      />
      <WorkTogetherForm />
  </>;
}
