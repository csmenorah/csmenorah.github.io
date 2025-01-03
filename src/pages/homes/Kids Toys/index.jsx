import Footer9 from "@/components/footers/PagesFooter";
import Header10 from "@/components/headers/PagesHeader";
import Testimonials from "@/components/homes/home-21/Testimonials";
import BestSeller from "@/components/homes/home-21/BestSeller";
import Categories from "@/components/homes/home-21/Categories";
import Clothing from "@/components/homes/home-21/Clothing";
import Collections from "@/components/homes/home-21/Collections";
import Features from "@/components/homes/home-21/Features";
import Hero from "@/components/homes/home-21/Hero";
import StrollerCollection from "@/components/homes/home-21/StrollerCollection";
import ToysCollection from "@/components/homes/home-21/ToysCollection";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 10 || Brown Commerce",
  description: "Brown Commerce",
};
export default function HomePage8() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="gradient-bg-10 theme-18">
        <Header10 />
        <main style={{ padding: 0 }}>
          <Hero />
          <Features />
          <div className="container">
            <div
              className="border-top-1-dashed mb-3 pb-3 pt-1 pb-xl-5"
              style={{ color: "#b1a8cd" }}
            ></div>
          </div>
          <Categories />
          <div className="container">
            <div className="mb-3 mb-xl-4 pt-3 pb-4"></div>

            <div
              className="border-top-1-dashed mb-3 pb-3 pt-1 pb-xl-5"
              style={{ color: "#b1a8cd" }}
            ></div>
          </div>
          <BestSeller />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Collections />
          <div className="container">
            <div className="mb-3 mb-xl-4 pt-3 pb-4"></div>
            <div
              className="border-top-1-dashed mb-3 pb-3 pt-1 pb-xl-5"
              style={{ color: "#b1a8cd" }}
            ></div>
          </div>
          <Clothing />
          <div className="container">
            <div className="mb-3 mb-xl-4 pt-3 pb-4"></div>
            <div
              className="border-top-1-dashed mb-3 pb-3 pt-1 pb-xl-5"
              style={{ color: "#b1a8cd" }}
            ></div>
          </div>
          <ToysCollection />
          <div className="container">
            <div className="mb-3 mb-xl-4 pt-3 pb-4"></div>
            <div
              className="border-top-1-dashed mb-3 pb-3 pt-1 pb-xl-5"
              style={{ color: "#b1a8cd" }}
            ></div>
          </div>
          <StrollerCollection />
          <div className="mb-3 mb-xl-5 pb-3 pt-1"></div>
          <div className="bg-grey-faf9f8">
            <Testimonials />
          </div>
        </main>
        <Footer9 />
      </div>
    </>
  );
}
