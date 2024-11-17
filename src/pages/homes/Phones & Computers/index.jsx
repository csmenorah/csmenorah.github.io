import Features from "@/components/common/features/Features";
import Footer8 from "@/components/footers/PagesFooter";
import Header9 from "@/components/headers/PagesHeader";
import BestSelling from "@/components/homes/home-9/BestSelling";
import Brands from "@/components/common/brands/Brands";
import Collections from "@/components/homes/home-9/Collections";
import Hero from "@/components/homes/home-9/Hero";
import Instagram from "@/components/homes/home-9/Instagram";
import Lookbook from "@/components/homes/home-9/Lookbook";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 9 || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function HomePage5() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header9 />{" "}
        <main className="page-wrapper" style={{ padding: 0 }}>
          <Hero />
          <div className="mb-3 pb-1"></div>
          <Collections />
          <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
          <BestSelling />
          <div className="mb-5 pb-4"></div>
          <Lookbook />
          <div className="pt-1 pb-5 mt-4 mt-xl-5"></div>
          <div className="mb-5 pb-4 pb-xl-5 mb-xl-5"></div>
          <Brands />
          <div className="mb-3 mb-xl-5 pt-1 pb-4"></div>
          <Instagram />
          <div className="mb-3 mb-xl-5"></div>
          <Features />
        </main>
        <Footer8 />
      </div>
    </>
  );
}
