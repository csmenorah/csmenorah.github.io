import Footer1 from "@/components/footers/PagesFooter";

import Header1 from "@/components/headers/PagesHeader";
import RelatedSlider from "@/components/singleProduct/RelatedSlider";
import SingleProduct15 from "@/components/singleProduct/SingleProduct15";

import { allProducts } from "@/data/products";

import MetaComponent from "@/components/common/MetaComponent";
import { useParams } from "react-router-dom";
const metadata = {
  title: "Shop Single Onsale || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function ProductDetailsPage5() {
  let params = useParams();
  const productId = params.id;
  const product =
    allProducts.filter((elm) => elm.id == productId)[0] || allProducts[0];
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header1 />
        <main className="page-wrapper" style={{ padding: 0 }}>
          <div className="mb-md-1 pb-md-3"></div>
          <SingleProduct15 product={product} />
          <RelatedSlider />
        </main>
        <Footer1 />
      </div>
    </>
  );
}
