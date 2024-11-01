import Footer6 from "@/components/footers/PagesFooter";

import Header6 from "@/components/headers/PagesHeader";
import CategoryMassonry from "@/components/homes/home-6/CategoryMassonry";
import Hero from "@/components/homes/home-6/Hero";
import Instagram from "@/components/homes/home-6/Instagram";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 6 || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function HomePage23() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header6 />
        <main style={{ padding: 0 }}>
          <Hero />
          <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
          <CategoryMassonry />
          <Instagram />
          <div className="mb-4 mb-xl-5 pt-xl-1 pb-5"></div>
        </main>
        <Footer6 />
      </div>
    </>
  );
}
