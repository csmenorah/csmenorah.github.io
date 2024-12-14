import Footer2 from "@/components/footers/PagesFooter";

import Header2 from "@/components/headers/PagesHeader";
import Categories from "@/components/homes/home-3/Categories";
import CategoryBanner from "@/components/homes/home-3/CategoryBanner";
import FeaturesProducts from "@/components/homes/home-3/FeaturesProducts";
import Hero from "@/components/homes/home-3/Hero";
import HotDeals from "@/components/homes/home-3/HotDeals";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Brown Commerce Female Clothings",
  description: "Brown Commerce",
};

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase/firebaseUtils";
import { useEffect } from "react";

export default function HomePage2() {
  let products = []
    useEffect(() => {
      const productsArray = [];
      const q = query(
        collection(db, "products"),
        where("cartegory", "==", "Dresses")
      );
      const querySnapshot = getDocs(q);
      querySnapshot
        .then((result) => {
          result.forEach((product) => {
            // console.log(product.data());
            productsArray.push({ ...product.data(), id: product.id });
          });
          //console.log(productsArray)
          return productsArray;
        })
        .then((result) => {
          //console.log(result)
          if (result.length > 0) {
            var reducer = result.slice(0, 3);
            //console.log(reducer)
            reducer.forEach((ele) => {
              products.push(ele);
            });
            console.log(products);
          }
        });
    }, []);
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-18">
        <Header2 />{" "}
        <main style={{ padding: 0 }}>
          <Hero />
          <div className="container mw-1620 bg-white border-radius-10">
            <div className="mb-3 mb-xl-5 pt-1 pb-4"></div>
            {//<Categories />
            }
            <div className="mb-3 mb-xl-5 pt-1 pb-4"></div>
            <HotDeals products={products} />
            <div className="mb-3 mb-xl-5 pt-1 pb-4"></div>
            <CategoryBanner />
            {/*<div className="mb-3 mb-xl-5 pt-1 pb-4"></div>
            <FeaturesProducts />*/}
          </div>
          <div className="mb-3 mb-xl-5 pt-1 pb-4"></div>
        </main>{" "}
        <Footer2 />
      </div>
    </>
  );
}
