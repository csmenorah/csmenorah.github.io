import Footer3 from "@/components/footers/PagesFooter";

import Header3 from "@/components/headers/PagesHeader";
import Categories from "@/components/homes/home-3/Categories";
import GridBanner from "@/components/homes/home-2/GridBanner";
import Banner from "@/components/homes/home-2/Banner";
import Brands from "@/components/homes/home-2/Brands";
import Hero from "@/components/homes/home-2/Hero";
import Products from "@/components/homes/home-2/Products";
import Products2 from "@/components/homes/home-2/Products2";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 3 || Brown Commerce",
  description: "Brown Commerce",
};
export default function HomePage3() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="gradient-bg theme-18">
        <Header3 />
        <main style={{ padding: 0 }}>
          <Hero />
          <div className="mb-3 mb-md-4 mb-xl-5 pb-2 pt-1"></div>
          <GridBanner />
          {/*<div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
          <Products />
          <div className="mb-1 pb-4"></div>
          <Categories />
          <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4"></div>
          <Banner />
          <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4"></div>
          <Products2 />*/}
          <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4"></div>
          <div className="mb-5 pb-4 pb-xl-5 mb-xl-5"></div>
          <Brands />
          <div className="mb-4 pb-4 pb-xl-5 mb-xl-5"></div>
        </main>
        <hr className="mt-2 text-secondary" />
        <Footer3 />
      </div>{" "}
    </>
  );
}
