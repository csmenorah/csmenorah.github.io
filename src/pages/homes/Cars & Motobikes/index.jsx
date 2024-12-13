import Footer7 from "@/components/footers/PagesFooter";
import Header7 from "@/components/headers/PagesHeader";
import Banner from "@/components/homes/home-18/Banner";
import Brands from "@/components/homes/home-18/Brands";
import Categories from "@/components/homes/home-18/Categories";
import Features from "@/components/homes/home-18/Features";
import Hero from "@/components/homes/home-18/Hero";
import Products from "@/components/homes/home-18/Products";
import Testimonials from "@/components/homes/home-18/Testimonials";
import Featured from "@/components/homes/home-18/Featured";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Brown Commerce Cars and Motobikes",
  description: "Brown Commerce",
};
export default function HomePage6() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header7 />
        <main style={{ padding: 0 }}>
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
          <Testimonials />
          <Brands />
          <div className="mt-3 mt-xl-4 pb-3 pt-1 pb-xl-4"></div>
        </main>
        <Footer7 />
      </div>
    </>
  );
}
