import ContactAndSubscribe from "../components/ContactAndSubscribe";
import PageBanner from "../components/PageBanner";

export const metadata = {
  title: " Contact Us| SwaRam  ",
  description: "SwaRam",
   icons: {
    icon: "/icon.png",
    
  },
};
export default function ContactUs() {
  return <>
  <PageBanner
          bgDesktop="/banner/contact-banner.jpg"
          bgMobile="/banner/contact-banner-mob.jpg"
        />
<ContactAndSubscribe />
  </>;
}
