import Brands from "@/components/common/brands/Brands";
import Footer18 from "@/components/footers/PagesFooter";

import Header18 from "@/components/headers/PagesHeader";
import Banner from "@/components/homes/home-19/Banner";
import Blogs from "@/components/homes/home-19/Blogs";
import Hero from "@/components/homes/home-19/Hero";
import NewArrival from "@/components/homes/home-19/NewArrival";
import Populer from "@/components/homes/home-19/Populer";
import Trending from "@/components/homes/home-19/Trending";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 18 || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function HomePage17() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header18 />
        <main style={{ padding: 0 }}>
          <Hero />
          <div className="mb-4 mb-xl-5 pt-xl-1 pb-5"></div>
          <Populer />
          <div className="mb-3 mb-xl-4 pt-xl-1 pb-4"></div>
          <Banner />
          <div className="mb-4 mb-xl-5 pt-xl-1 pb-5"></div>
          <NewArrival />
          <div className="mb-4 mb-xl-5 pt-xl-1 pb-5"></div>
          <Trending />
          <div className="mb-4 mb-xl-5 pt-xl-1 pb-5"></div>
          <Blogs />
          <div className="mb-4 mb-xl-5 pt-xl-1 pb-5"></div>
          <Brands />
          <div className="mb-4 mb-xl-5 pt-xl-1 pb-5"></div>
        </main>
        <Footer18 />
      </div>
    </>
  );
}
