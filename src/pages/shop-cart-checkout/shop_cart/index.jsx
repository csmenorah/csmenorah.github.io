import MetaComponent from "@/components/common/MetaComponent";
import Footer1 from "@/components/footers/PagesFooter";
import Header1 from "@/components/headers/PagesHeader";
import Cart from "@/components/shopCartandCheckout/Cart";
import ChectoutSteps from "@/components/shopCartandCheckout/ChectoutSteps";
const metadata = {
  title: "Shop Cart || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function ShopCartPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header1 />
      <main className="page-wrapper" style={{ padding: 0 }}>
        <div className="mb-4 pb-4"></div>
        <section className="shop-checkout container">
          <h2 className="page-title">Cart</h2>
          <ChectoutSteps />
          <Cart />
        </section>
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
      </div>
      
    </>
  );
}
