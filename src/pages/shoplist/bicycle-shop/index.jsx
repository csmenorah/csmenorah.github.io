import Footer1 from "@/components/footers/PagesFooter";

import Header1 from "@/components/headers/PagesHeader";
import Categories from "@/components/shoplist/Categories";
import Shop8 from "@/components/shoplist/Shop8";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Shop 8 || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function ShopPage20() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header1 />
      <main className="page-wrapper" style={{ padding: 0 }}>
        <Categories />
        <div className="mb-4 pb-lg-3"></div>
        <Shop8 />
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
      </div>
      
    </>
  );
}
