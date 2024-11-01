import Footer1 from "@/components/footers/PagesFooter";

import Header1 from "@/components/headers/PagesHeader";
import LoginMobile from "@/components/otherPages/LoginMobile";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Mobile login",
  description: "Uomo eCommerce Reactjs Template",
};
export default function LoginMobilePage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header1 />
      <main className="page-wrapper" style={{ padding: 0 }}>
        <div className="mb-4 pb-4"></div>
        <LoginMobile />
      </main>

      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
      </div>
      
    </>
  );
}
