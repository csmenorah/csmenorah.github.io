import Footer1 from "@/components/footers/PagesFooter";

import Header1 from "@/components/headers/PagesHeader";
import Contact from "@/components/otherPages/Contact/Contact";
import LocationMap from "@/components/otherPages/Contact/LocationMap";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Contact || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function ContactPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header1 />
        <main className="page-wrapper" style={{ padding: 0 }}>
          <div className="mb-4 pb-4"></div>
          <section className="contact-us container">
            <div className="mw-930">
              <h2 className="page-title">CONTACT US</h2>
            </div>
          </section>

          <section className="google-map mb-5">
            <h2 className="d-none">Contact US</h2>
            <div id="map" className="google-map__wrapper">
              <LocationMap />
            </div>
          </section>
          <Contact />
        </main>
        <div className="mb-5 pb-xl-5"></div>
        <Footer1 />
      </div>
    </>
  );
}
