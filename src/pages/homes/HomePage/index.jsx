import LoginFormPopup from "@/components/common/LoginFormPopup";
import Features from "@/components/common/features/Features";
import Hero from "@/components/homes/MainHomeSections/Hero";
import InstaGram from "@/components/homes/MainHomeSections/InstaGram";
import Products1 from "@/components/homes/MainHomeSections/Products1";
import Products2 from "@/components/homes/MainHomeSections/Products2";
import Products3 from "@/components/homes/MainHomeSections/Products3";
import Products4 from "@/components/homes/MainHomeSections/Products4";
import Products5 from "@/components/homes/MainHomeSections/Products5";

import MetaComponent from "@/components/common/MetaComponent";
import PagesHeader from "../../../components/headers/PagesHeader";
import PagesFooter from "../../../components/footers/PagesFooter";
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
          {/*<div className="mb-4 pb-4 mb-xl-5 pb-xl-5"></div>
         Home trendy
          <Products2 />*/}
          <div className="mb-3 mb-xl-5 pb-1 pb-xl-5"></div>
          <Products3 />
          <div className="mb-3 mb-xl-5 pb-1 pb-xl-5"></div>
          <Products4 />
          {/*<div className="mb-5 pb-1 pb-xl-4"></div>
          <Products5 />
          <div className="mb-4 pb-4 pb-xl-5 mb-xl-5"></div>*/}
          <div className="bg-white">
            <Features />{" "}
          </div>
        </main>
        <PagesFooter />
        <LoginFormPopup />{" "}
      </div>
    </>
  );
}
