import Footer6 from "@/components/footers/PagesFooter";

import Header6 from "@/components/headers/PagesHeader";
import BestSelling from "@/components/homes/home-22/BestSelling";
import Category from "@/components/homes/home-22/Category";
import Features from "@/components/homes/home-22/Features";
import Hero from "@/components/homes/home-22/Hero";
import Lookbook from "@/components/homes/home-22/Lookbook";
import NewArrival from "@/components/homes/home-22/NewArrival";
import WeeklyDeal from "@/components/homes/home-22/WeeklyDeal";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 21 || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function HomePage26() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header6 />
        <main className="bg-grey-f8f8f8">
          <div className="pb-3 pt-3"></div>
          <Hero />
          <Features />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <WeeklyDeal />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Category />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <NewArrival />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Lookbook />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <BestSelling />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <div className="pb-3 pt-1 pb-xl-5"></div>
        </main>
        <Footer6 />
      </div>
    </>
  );
}
