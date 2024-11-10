import Footer1 from "@/components/footers/PagesFooter";

import Header24 from "@/components/headers/PagesHeader";

import RelatedSlider from "@/components/singleProduct/RelatedSlider";

import SingleProduct4 from "@/components/singleProduct/SingleProduct4";

import { allProducts } from "@/data/products";
// e0e0e0;
import MetaComponent from "@/components/common/MetaComponent";
import { useParams } from "react-router-dom";
const metadata = {
  title: "Shop Single 9 || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function ProductDetailsPage9() {
  let params = useParams();
  const productId = params.id;
  const product =
    allProducts.filter((elm) => elm.id == productId)[0] || allProducts[0];
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header24 />
        <main style={{ padding: 0 }}>
          {/* <div className="mb-md-1 pb-md-3"></div> */}
          <SingleProduct4 product={product} />
          <RelatedSlider />
        </main>
        <Footer1 />
      </div>
    </>
  );
}
