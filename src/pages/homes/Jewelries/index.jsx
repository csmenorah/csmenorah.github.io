import Footer14 from "@/components/footers/PagesFooter";

import Header14 from "@/components/headers/PagesHeader";
import Features from "@/components/common/features/Features";

import Banner from "@/components/homes/home-20/Banner";
import BestSelling from "@/components/homes/home-20/BestSelling";
import Category from "@/components/homes/home-20/Category";
import GridBanner from "@/components/homes/home-20/GridBanner";
import Hero from "@/components/homes/home-20/Hero";
import TrendyItems from "@/components/homes/home-20/TrendyItems";

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
          <Category />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <TrendyItems />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <GridBanner />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Banner />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <BestSelling />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Features />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
        </main>
        <Footer14 />
      </div>
    </>
  );
}
