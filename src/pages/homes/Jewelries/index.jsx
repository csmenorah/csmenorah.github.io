import Brands from "@/components/common/brands/Brands";
import Footer14 from "@/components/footers/PagesFooter";

import Header14 from "@/components/headers/PagesHeader";

import Blogs from "@/components/homes/home-15/Blogs";
import Categories from "@/components/homes/home-15/Categories";
import Featured from "@/components/homes/home-15/Featured";
import Hero from "@/components/homes/home-15/Hero";
import Instagram from "@/components/homes/home-15/Instagram";
import Lookbook from "@/components/homes/home-15/Lookbook";
import PopulerProducts from "@/components/homes/home-15/PopulerProducts";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 15 || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function HomePage14() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header14 />
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
          <Blogs />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Brands />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Instagram />
        </main>
        <Footer14 />
      </div>
    </>
  );
}
