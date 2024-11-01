import Footer22 from "@/components/footers/PagesFooter";

import Header8 from "@/components/headers/PagesHeader";
import Banner from "@/components/homes/home-23/Banner";
import Hero from "@/components/homes/home-23/Hero";
import OurStory from "@/components/homes/home-23/OurStory";
import SingleProduct from "@/components/homes/home-23/SingleProduct";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 22 || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function HomePage21() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header8 />
        <main style={{ padding: 0 }}>
          <Hero />
          <Banner />
          <SingleProduct />
          <OurStory />
        </main>
        <Footer22 />
      </div>
    </>
  );
}
