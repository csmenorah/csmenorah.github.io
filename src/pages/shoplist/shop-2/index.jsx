import Footer1 from "@/components/footers/PagesFooter";

import Header1 from "@/components/headers/PagesHeader";

import Shop2 from "@/components/shoplist/Shop2";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Shop 2 || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function ShopPage2() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header1 />
        <main className="page-wrapper" style={{ padding: 0 }}>
          <Shop2 />
        </main>
        <div className="mb-5 pb-xl-5"></div>
        <Footer1 />
      </div>
    </>
  );
}
