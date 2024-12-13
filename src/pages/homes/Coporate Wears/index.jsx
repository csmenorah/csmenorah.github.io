import Header20 from "@/components/headers/PagesHeader";
import BestSeller from "@/components/homes/home-5/BestSeller";
import Blogs from "@/components/homes/home-5/Blogs";
import Categories from "@/components/homes/home-5/Categories";
import Cta from "@/components/homes/home-5/Cta";
import Features from "@/components/homes/home-5/Features";
import Hero from "@/components/homes/home-5/Hero";
import LookBook from "@/components/homes/home-5/LookBook";
import TopCollections from "@/components/homes/home-5/TopCollections";
import WeekDeals from "@/components/homes/home-5/WeekDeals";
import Footer20 from "@/components/footers/PagesFooter";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Brown Commerce Coporate Wears",
  description: "Brown Commerce",
};
export default function HomePage19() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header20 />
        <main style={{ padding: 0 }}>
          <Hero />
          <Hero />
          <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
          <Categories />
          <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
          <TopCollections />
          <div className="pt-1 pb-5 mb-4 mb-xl-5"></div>
          <LookBook />
          <div className="pt-1 pb-5 mt-4 mt-xl-5"></div>
          <BestSeller />
          <WeekDeals />
          <div className="pt-1 pb-5 mt-4 mt-xl-5"></div>
          <Blogs />
          <div className="pt-1 pb-5 mt-4 mt-xl-5"></div>
          <Features />
          <Cta />
        </main>
        <Footer20 />
      </div>
    </>
  );
}
