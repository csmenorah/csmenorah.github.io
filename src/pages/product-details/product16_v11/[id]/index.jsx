import Footer1 from "@/components/footers/PagesFooter";

import Header1 from "@/components/headers/PagesHeader";
import RelatedSlider from "@/components/singleProduct/RelatedSlider";
import SingleProduct11 from "@/components/singleProduct/SingleProduct11";

import { allProducts } from "@/data/products";

import MetaComponent from "@/components/common/MetaComponent";
import { useParams } from "react-router-dom";
const metadata = {
  title: "Shop Single 11 || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function ProductDetailsPage16() {
  let params = useParams();
  const productId = params.id;
  const product =
    allProducts.filter((elm) => elm.id == productId)[0] || allProducts[0];
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header1 />
        <main className="page-wrapper">
          <div className="mb-md-1 pb-md-3"></div>
          <SingleProduct11 product={product} />
          <RelatedSlider />
        </main>
        <Footer1 />
      </div>
    </>
  );
}