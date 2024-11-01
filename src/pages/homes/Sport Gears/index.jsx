import Features from "@/components/common/features/Features";
import Footer10 from "@/components/footers/PagesFooter";
import Header11 from "@/components/headers/PagesHeader";
import BestSaller from "@/components/homes/home-11/BestSaller";
import Categories from "@/components/homes/home-11/Categories";
import GridBanner from "@/components/homes/home-11/GridBanner";
import Hero from "@/components/homes/home-11/Hero";
import RecentViewed from "@/components/homes/home-11/RecentViewed";
import SpecialOffers from "@/components/homes/home-11/SpecialOffers";
import TopDeals from "@/components/homes/home-11/TopDeals";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 11 || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function HomePage10() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-11 theme-18">
        <Header11 />
        <main style={{ padding: 0 }}>
          <Hero />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <TopDeals />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <GridBanner />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Categories />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <BestSaller />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <SpecialOffers />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <RecentViewed />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Features />
        </main>
        <Footer10 />
      </div>
    </>
  );
}
