import Footer19 from "@/components/footers/PagesFooter";

import Header19 from "@/components/headers/PagesHeader";
import CategoryBanner from "@/components/homes/home-4/CategoryBanner";
import Hero from "@/components/homes/home-4/Hero";
import InsideCollextions from "@/components/homes/home-4/InsideCollextions";
import LimitedEdition from "@/components/homes/home-4/LimitedEdition";
import Testimonials from "@/components/homes/home-4/Testimonials";
import TrendingProducts from "@/components/homes/home-4/TrendingProducts";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Brown Commerce Classic Dressing",
  description: "Brown Commerce",
};
export default function HomePage18() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header19 />
        <main className="page-wrapper" style={{ padding: 0 }}>
          <Hero />
          {/*<div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
          <TrendingProducts />**/}
          <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
          <CategoryBanner />
          {/*<div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
          <Testimonials />
          <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
          <InsideCollextions />*/}
          <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
          <LimitedEdition />
        </main>
        <Footer19 />
      </div>
    </>
  );
}
