import Footer1 from "@/components/footers/PagesFooter";

import Header1 from "@/components/headers/PagesHeader";
import Banner1 from "@/components/shoplist/Banner1";

import Shop9 from "@/components/shoplist/Shop9";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Shop 9 || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function ShopPage21() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header1 />
        <main className="page-wrapper" style={{ padding: 0 }}>
          <Banner1 />
          <div className="mb-4 pb-lg-3"></div>
          <Shop9 />
        </main>
        <div className="mb-5 pb-xl-5"></div>
        <Footer1 />
      </div>
    </>
  );
}
