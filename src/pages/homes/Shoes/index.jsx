import Footer18 from "@/components/footers/PagesFooter";

import Header18 from "@/components/headers/PagesHeader";
import Brands from "@/components/common/brands/Brands";
import Banner from "@/components/homes/home-10/Banner";
import BestSelling from "@/components/homes/home-10/BestSelling";
import Blogs from "@/components/homes/home-10/Blogs";
import GridBanner from "@/components/homes/home-10/GridBanner";
import Hero from "@/components/homes/home-10/Hero";
import Lookbook from "@/components/homes/home-10/Lookbook";
import Trending from "@/components/homes/home-10/Trending";
import VideoBanner from "@/components/homes/home-10/VideoBanner";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 18 || Brown Commerce",
  description: "Brown Commerce",
};
export default function HomePage17() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header18 />
        <main style={{ padding: 0 }}>
          <Hero />
          <div className="container mw-1620 bg-white">
            <div className="mb-3 mb-xl-5 pt-1 pb-2"></div>
            <Brands />
            <div className="mb-3 mb-xl-5 pt-1 pb-2"></div>
            <Banner />
            <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4"></div>
            <Trending />
          </div>
          <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4"></div>
          <VideoBanner />
          <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4"></div>
          <GridBanner />
          <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4"></div>
          <Lookbook />
          <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4"></div>
          <BestSelling />
          <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4"></div>
          <Blogs />
          <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4"></div>
        </main>
        <Footer18 />
      </div>
    </>
  );
}
