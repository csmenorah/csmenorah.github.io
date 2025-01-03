import Footer1 from "@/components/footers/PagesFooter";

import Header1 from "@/components/headers/PagesHeader";
import CommingSoon from "@/components/otherPages/CommingSoon";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Comming Soon || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function CommingSoonPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header1 />
        <main className="page-wrapper" style={{ padding: 0 }}>
          <CommingSoon />
        </main>
        <div className="mb-5 pb-xl-5"></div>
        <Footer1 />
      </div>
    </>
  );
}
