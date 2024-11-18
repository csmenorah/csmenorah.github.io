import Footer17 from "@/components/footers/PagesFooter";

import Header17 from "@/components/headers/PagesHeader";
import BannerSlider from "@/components/homes/home-16/BannerSlider";
import Equipments from "@/components/homes/home-16/Equipments";
import Features from "@/components/homes/home-16/Features";
import GridBanner from "@/components/homes/home-16/GridBanner";
import Hero from "@/components/homes/home-16/Hero";
import MostPopuler from "@/components/homes/home-16/MostPopuler";
import VideoBanner from "@/components/homes/home-16/VideoBanner";

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
          <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
          <GridBanner />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <MostPopuler />
          <div className="mb-3 pb-3 pt-1"></div>
          <VideoBanner />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <BannerSlider />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Equipments />
          <div className="mb-3 mb-xl-4 pb-3 pt-1 pb-xl-4"></div>
          <Features />
          <div className="mb-3 mb-xl-4 pb-3 pt-1 pb-xl-4"></div>
        </main>
        <Footer17 />
      </div>
    </>
  );
}
