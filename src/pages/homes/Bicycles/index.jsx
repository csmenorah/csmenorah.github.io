import Footer17 from "@/components/footers/PagesFooter";

import Header17 from "@/components/headers/PagesHeader";
import Banner from "@/components/homes/home-18/Banner";
import Blog from "@/components/homes/home-18/Blog";
import Brands from "@/components/homes/home-18/Brands";
import Categories from "@/components/homes/home-18/Categories";
import Featured from "@/components/homes/home-18/Featured";
import Features from "@/components/homes/home-18/Features";
import Hero from "@/components/homes/home-18/Hero";
import Products from "@/components/homes/home-18/Products";
import Testimonials from "@/components/homes/home-18/Testimonials";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 17 || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function HomePage16() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header17 />
        <main className="bg-grey-eeeeee" style={{ padding: 0 }}>
          <Hero />
          <Features />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Categories />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Featured />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-4"></div>
          <Banner />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Products />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Testimonials />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Blog />
          <div className="mt-3 mt-xl-4 pb-3 pt-1 pb-xl-4"></div>
          <Brands />
          <div className="mt-3 mt-xl-4 pb-3 pt-1 pb-xl-4"></div>
        </main>
        <Footer17 />
      </div>
    </>
  );
}
