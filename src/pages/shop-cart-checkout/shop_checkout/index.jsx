import MetaComponent from "@/components/common/MetaComponent";
import Footer1 from "@/components/footers/PagesFooter";
import Header1 from "@/components/headers/PagesHeader";
import Checkout from "@/components/shopCartandCheckout/Checkout";
import ChectoutSteps from "@/components/shopCartandCheckout/ChectoutSteps";
const metadata = {
  title: "Shop Checkout || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};

export default function ShopCheckoutPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
       <Header1 />
      <main className="page-wrapper" style={{ padding: 0 }}>
        <div className="mb-4 pb-4"></div>
        <section className="shop-checkout container">
          <h2 className="page-title">Shipping and Checkout</h2>
          <ChectoutSteps />
          <Checkout />
        </section>
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 /> 
      </div>
      
    </>
  );
}
