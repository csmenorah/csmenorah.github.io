import Footer4 from "@/components/footers/PagesFooter";

import Header4 from "@/components/headers/PagesHeader";
import Features from "@/components/common/features/Features";
import Hero from "@/components/homes/home-7/Hero";
import Lookbook from "@/components/homes/home-7/Lookbook";
import ProductsGrid from "@/components/homes/home-7/ProductsGrid";
import ProductsSlider from "@/components/homes/home-7/ProductsSlider";
import TrendingProducts from "@/components/homes/home-7/TrendingProducts";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 4 || Brown Commerce",
  description: "Brown Commerce",
};
export default function HomePage4() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header4 />
        <main className="bg-grey-faf9f8 page-wrapper-2" style={{ padding: 0 }}>
          <Hero />
          <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
          <TrendingProducts />
          <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
          <ProductsGrid />
          <div className="mb-5 pb-4"></div>
          <Lookbook />
          <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
          <ProductsSlider />
          <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
          <Features />
        </main>
        <Footer4 />
      </div>
    </>
  );
}
