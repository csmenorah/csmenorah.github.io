import Footer1 from "@/components/footers/PagesFooter";

import Header1 from "@/components/headers/PagesHeader";
import Faq from "@/components/otherPages/Faq";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Faq || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function FaqPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
       <Header1 />
      <main className="page-wrapper" style={{ padding: 0 }}>
        <div className="mb-4 pb-4"></div>
        <Faq />
      </main>

      <div className="mb-5 pb-xl-5"></div>
      <Footer1 /> 
      </div>
      
    </>
  );
}
