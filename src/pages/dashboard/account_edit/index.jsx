import Footer1 from "@/components/footers/PagesFooter";

import Header1 from "@/components/headers/PagesHeader";
import DashboardSidebar from "@/components/otherPages/DashboardSidebar";
import EditAccount from "@/components/otherPages/EditAccount";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Dashboard Account Edit || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function AccountEditPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header1 />
      <main className="page-wrapper" style={{ padding: 0 }}>
        <div className="mb-4 pb-4"></div>
        <section className="my-account container">
          <h2 className="page-title">Account Details</h2>
          <div className="row">
            <DashboardSidebar />
            <EditAccount />
          </div>
        </section>
      </main>

      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
      </div>
      
    </>
  );
}
