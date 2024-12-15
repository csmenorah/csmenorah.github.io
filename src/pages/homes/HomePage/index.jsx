import LoginFormPopup from "@/components/common/LoginFormPopup";
import Features from "@/components/common/features/Features";
import Hero from "@/components/homes/MainHomeSections/Hero";
import InstaGram from "@/components/homes/MainHomeSections/InstaGram";
import Products1 from "@/components/homes/MainHomeSections/Products1";
import Products2 from "@/components/homes/MainHomeSections/Products2";
import Products3 from "@/components/homes/MainHomeSections/Products3";
import Products4 from "@/components/homes/MainHomeSections/Products4";
import Products5 from "@/components/homes/MainHomeSections/Products5";
import Categories from "@/components/homes/home-5/Categories";
import MetaComponent from "@/components/common/MetaComponent";
import PagesHeader from "../../../components/headers/PagesHeader";
import PagesFooter from "../../../components/footers/PagesFooter";
import ProductsGrid from "@/components/homes/home-7/ProductsGrid";
import CategoryBanner from "@/components/homes/home-4/CategoryBanner";
import GridBanner from "@/components/homes/home-2/GridBanner";
import Collections from "@/components/homes/home-9/Collections";
const metadata = {
  title: "Home",
  description:
    "Brown Commerce, home page. We deal in all souts of fairly use and brand new clothings, vehicles and electronics items",
};
export default function HomePage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <PagesHeader />
        <main className="page-wrapper" style={{ padding: 0 }}>
          <Hero />
          <div className="mb-3 pb-3 mb-md-4 pb-md-4 mb-xl-5 pb-xl-5"></div>
          <div className="pb-1"></div>
          <Products1 />
          <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
          <Categories />
          <div className="mb-3 mb-xl-5 pb-1 pb-xl-5"></div>
          <Products3 />
          <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
          <ProductsGrid />
          <div className="bg-white">
            <Features />{" "}
          </div>
          <Products4 />
          <GridBanner />
          <div className="mb-3 pb-1"></div>
          <Collections />
        </main>
        <PagesFooter />
        <LoginFormPopup />{" "}
      </div>
    </>
  );
}
