import Footer13 from "@/components/footers/PagesFooter";

import Header13 from "@/components/headers/PagesHeader";
import Blogs from "@/components/homes/home-14/Blogs";
import Category from "@/components/homes/home-14/Category";
import DailyDeal from "@/components/homes/home-14/DailyDeal";
import FaceMask from "@/components/homes/home-14/FaceMask";
import FeaturedProducts from "@/components/homes/home-14/FeaturedProducts";
import GridBanner from "@/components/homes/home-14/GridBanner";
import Hero from "@/components/homes/home-14/Hero";
import HospitalEquipment from "@/components/homes/home-14/HospitalEquipment";

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
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Category />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <DailyDeal />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <GridBanner />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <FeaturedProducts />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <HospitalEquipment />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <FaceMask />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Blogs />
          <div className="mb-3 mb-xl-4 pb-3 pt-1 pb-xl-4"></div>
        </main>
        <Footer13 />
      </div>
    </>
  );
}
