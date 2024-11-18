import Footer13 from "@/components/footers/PagesFooter";

import Header13 from "@/components/headers/PagesHeader";
import Categories from "@/components/homes/home-13/Categories";
import Cta from "@/components/homes/home-13/Cta";
import Features from "@/components/homes/home-13/Features";
import GridBanner from "@/components/homes/home-13/GridBanner";
import Hero from "@/components/homes/home-13/Hero";
import Instagram from "@/components/homes/home-13/Instagram";
import MostPopular from "@/components/homes/home-13/MostPopular";
import NewArrival from "@/components/homes/home-13/NewArival";
import Brands from "@/components/common/brands/Brands";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 14 || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function HomePage13() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header13 />
        <main style={{ padding: 0 }}>
          <Hero />
          <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
          <Categories />
          <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
          <GridBanner />
          <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
          <MostPopular />
          <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
          <NewArrival />
          <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
          <Cta />
          <div className="mb-4 pb-4 pb-xl-5 mb-xl-5"></div>
          <Brands />
          <div className="mb-3 mb-xl-5 pt-1 pb-4"></div>
          <Instagram />
          <div className="mb-3 mb-xl-5"></div>
          <Features />
        </main>
        <Footer13 />
      </div>
    </>
  );
}
