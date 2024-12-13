import Footer1 from "@/components/footers/PagesFooter";
import Header1 from "@/components/headers/PagesHeader";
import MetaComponent from "@/components/common/MetaComponent";
import Shop1 from "@/components/shoplist/Shop1";
import { db } from "../../../../firebase/firebaseUtils";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import CommingSoon from "@/pages/otherPages/coming_soon";

const metadata = {
  title: "Brown Commerce",
  description: "",
};
export default function ShopPage6() {
  const [products, setProducts] = useState([]);
  const coverImage = "/assets/images/african-wears-long.jpeg";
  const banerTitle = "Jewelries";

  useEffect(() => {
    const productsArray = [];
    const q = query(
      collection(db, "products"),
      where("cartegory", "==", "Jewelries")
    );
    const querySnapshot = getDocs(q);
    querySnapshot.then((result) => {
      result.forEach((product) => {
        //if (product.data().subCart == "Bicycle") {
        productsArray.push({ ...product.data(), id: product.id });
        setProducts(productsArray);
        //}
      });
    });
  }, []);

  return (
    <>
      {products.length > 0 ? (
        <>
          <MetaComponent meta={metadata} />
          <div className="theme-18">
            <Header1 />
            <main className="page-wrapper" style={{ padding: 0 }}>
              <Shop1
                products={products}
                coverImage={coverImage}
                banerTitle={banerTitle}
              />
            </main>
            <div className="mb-5 pb-xl-5"></div>
            <Footer1 />
          </div>
        </>
      ) : (
        <CommingSoon />
      )}
    </>
  );
}
