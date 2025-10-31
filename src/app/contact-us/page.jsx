import ContactAndSubscribe from "../components/ContactAndSubscribe";
import PageBanner from "../components/PageBanner";

export default function ContactUs() {
  return <>
  <PageBanner
          bgDesktop="/banner/contact-banner.jpg"
          bgMobile="/banner/contact-banner-mob.jpg"
        />
<ContactAndSubscribe />
  </>;
}
