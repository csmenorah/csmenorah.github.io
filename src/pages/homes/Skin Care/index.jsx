import Footer6 from "@/components/footers/PagesFooter";

import Header6 from "@/components/headers/PagesHeader";
import Brands from "@/components/common/brands/Brands";
import Categories from "@/components/homes/home-15/Categories";
import Featured from "@/components/homes/home-15/Featured";
import Hero from "@/components/homes/home-15/Hero";
import Lookbook from "@/components/homes/home-15/Lookbook";
import PopulerProducts from "@/components/homes/home-15/PopulerProducts";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 6 || Brown Commerce",
  description: "Brown Commerce",
};
export default function HomePage12() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header6 />
        <main style={{ padding: 0 }}>
          <Hero />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Featured />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Categories />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <PopulerProducts />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Lookbook />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Brands />
        </main>
        <Footer6 />
      </div>
    </>
  );
}
