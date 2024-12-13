import Footer1 from "@/components/footers/PagesFooter";
import Header1 from "@/components/headers/PagesHeader";
import { useContextElement } from "@/context/Context";

import RelatedSlider from "@/components/singleProduct/RelatedSlider";
import SingleProduct7 from "@/components/singleProduct/SingleProduct7";

import { allProducts } from "@/data/products";
// e0e0e0;
import MetaComponent from "@/components/common/MetaComponent";
import { useParams } from "react-router-dom";
const metadata = {
  title: "Shop Single 7 || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function ProductDetailsPage12() {
  let {dataBaseProducts} = useContextElement()
  let params = useParams();
  const productId = params.id;
  const product =
    dataBaseProducts.filter((elm) => elm.id == productId)[0] || allProducts[0];
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header1 />
        <main className="page-wrapper" style={{ padding: 0 }}>
          {/* <div className="mb-md-1 pb-md-3"></div> */}
          <SingleProduct7 product={product} />
          <RelatedSlider />
        </main>
        <Footer1 />
      </div>
    </>
  );
}
