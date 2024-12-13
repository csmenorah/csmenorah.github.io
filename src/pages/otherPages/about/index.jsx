import Footer1 from "@/components/footers/PagesFooter";

import Header1 from "@/components/headers/PagesHeader";
import About from "@/components/otherPages/about/About";
import Clients from "@/components/otherPages/about/Clients";
import Services from "@/components/otherPages/about/Services";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "About",
  description: "About Brown Commerce",
};
export default function AboutPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
         <Header1 />
      <main className="page-wrapper" style={{ padding: 0 }}>
        <div className="mb-4 pb-4"></div>
        <About />
        <Services />
        <Clients />
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
      </div>
     
    </>
  );
}
