import Footer1 from "@/components/footers/PagesFooter";

import Header1 from "@/components/headers/PagesHeader";
import ResetPassword from "@/components/otherPages/ResetPassword";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Reset Password || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function ResetPasswordPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header1 />
      <main className="page-wrapper" style={{ padding: 0 }}>
        <div className="mb-4 pb-4"></div>
        <ResetPassword />
      </main>

      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
      </div>
      
    </>
  );
}
