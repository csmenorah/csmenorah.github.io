import Footer1 from "@/components/footers/PagesFooter";

import Header1 from "@/components/headers/PagesHeader";
import AccountOrders from "@/components/otherPages/AccountOrders";
import DashboardSidebar from "@/components/otherPages/DashboardSidebar";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Dashboard Account Orders || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function AccountOrderPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header1 />
      <main className="page-wrapper" style={{ padding: 0 }}>
        <div className="mb-4 pb-4"></div>
        <section className="my-account container">
          <h2 className="page-title">Orders</h2>
          <div className="row">
            <DashboardSidebar />
            <AccountOrders />
          </div>
        </section>
      </main>

      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
      </div>
      
    </>
  );
}
