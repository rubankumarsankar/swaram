import PageBanner from "../components/PageBanner";
import ServiceSection from "../components/Service/ServiceSection";
import ServicesSolutions from "../components/Service/ServicesSolutions";
import SolutionsOrbit from "../components/Service/SolutionsOrbit";



export default function Services() {
  return <>
  <PageBanner
        bg="/assets/services-banner.jpg"
      />
  <ServiceSection />
  <SolutionsOrbit />
  <ServicesSolutions
   title="Services & Solutions"
   items={[
    {
       category: "Healthcare",
       title: "Preventive & Supportive Solutions",
       bullets: [
         "Medical equipment and healthcare supplies trading",
         "Preventive healthcare solutions",
        "Telemedicine and digital healthcare integration",
         "Health and wellness consultancy"
     ],
       image: "/assets/service-img-1.png"
    },
     {
      category: "Trading",
      title: "Global Trading",
       bullets: [
        "Import/Export services",
         "Sourcing & Distribution",
        "Trading in raw materials, including commodities, metals, energy resources, and machinery",
        "Custom solutions for international clients"
       ],
      image: "/assets/service-img-2.png"
    }
   ]}
 />
  </>;
}
