import Footer1 from "@/components/footers/PagesFooter";

import Header1 from "@/components/headers/PagesHeader";
import Shop1 from "@/components/shoplist/Shop1";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Shop 1 || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function ShopPage1() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header1 />
        <main className="page-wrapper" style={{ padding: 0 }}>
          <Shop1 />
        </main>
        <div className="mb-5 pb-xl-5"></div>
        <Footer1 />
      </div>
    </>
  );
}
