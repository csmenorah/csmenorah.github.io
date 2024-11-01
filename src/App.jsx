/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import Svgs from "@/components/common/Svgs";
import "react-tooltip/dist/react-tooltip.css";
import "./styles/style.scss";
import "rc-slider/assets/index.css";
import "tippy.js/dist/tippy.css";
import LoginFormPopup from "@/components/common/LoginFormPopup";
import LoginMobilePage from "./pages/otherPages/login_mobile";

import ScrollTop from "@/components/common/ScrollTop";
import Context from "@/context/Context";
import QuickView from "@/components/modals/QuickView";
import CartDrawer from "@/components/shopCartandCheckout/CartDrawer";
import SiteMap from "@/components/modals/SiteMap";
import NewsLetter from "@/components/modals/NewsLetter";
import CookieContainer from "@/components/common/CookieContainer";
import MobileHeader from "@/components/headers/MobileHeader";
import SizeGuide from "@/components/modals/SizeGuide";
import Delivery from "@/components/modals/Delivery";
import CustomerLogin from "@/components/asides/CustomerLogin";
import ShopFilter from "@/components/asides/ShopFilter";
import ProductDescription from "@/components/asides/ProductDescription";
import ProductAdditionalInformation from "@/components/asides/ProductAdditionalInformation";
import ProductReviews from "@/components/asides/ProductReviews";
import MobileFooter1 from "@/components/footers/MobileFooter1";
import { useEffect, useState, Suspense } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";

import HomePage from "./pages/homes/HomePage";
import HomePage2 from "./pages/homes/Female Clothings";
import HomePage3 from "./pages/homes/Men Clothings";
import HomePage4 from "./pages/homes/Kids Clothings";
import HomePage5 from "./pages/homes/House Whole Funitures";
import HomePage6 from "./pages/homes/Skin Care";
import HomePage7 from "./pages/homes/Cars & Motobikes";
import HomePage8 from "./pages/homes/TV & Radios";
import HomePage9 from "./pages/homes/Phones & Computers";
import HomePage10 from "./pages/homes/Kids Toys";
import HomePage11 from "./pages/homes/Sport Gears";
import HomePage12 from "./pages/homes/Video Games";
import HomePage13 from "./pages/homes/Head Phones";
import HomePage14 from "./pages/homes/Glasses";
import HomePage15 from "./pages/homes/Jewelries";
import HomePage16 from "./pages/homes/Kitchen Utensils";
import HomePage17 from "./pages/homes/Bicycles";
import HomePage18 from "./pages/homes/Shoes";
import HomePage19 from "./pages/homes/Classic Clothings";
import HomePage20 from "./pages/homes/Coporate Wears";
import HomePage21 from "./pages/homes/Africa Wears";
import HomePage22 from "./pages/homes/Other Electronics";
import ShopPage1 from "./pages/shoplist/shop-1";
import ShopPage2 from "./pages/shoplist/shop-2";
import ShopPage3 from "./pages/shoplist/shop-3";
import ShopPage4 from "./pages/shoplist/shop-4";
import ShopPage5 from "./pages/shoplist/shop-5";
import ShopPage6 from "./pages/shoplist/shop-6";
import ShopPage7 from "./pages/shoplist/shop-7";
import ShopPage8 from "./pages/shoplist/shop-8";
import ShopPage9 from "./pages/shoplist/shop-9";
import ShopPage10 from "./pages/shoplist/shop-10";
import ShopPage11 from "./pages/shoplist/shop-11";
import ShopPage12 from "./pages/shoplist/shop-12";
import ProductDetailsPage2 from "./pages/shopSingle/product2_variable/[id]";
import ProductDetailsPage7 from "./pages/shopSingle/product7_v2/[id]";
import ProductDetailsPage8 from "./pages/shopSingle/product8_v3/[id]";
import ProductDetailsPage9 from "./pages/shopSingle/product9_v4/[id]";
import ProductDetailsPage10 from "./pages/shopSingle/product10_v5/[id]";
import ProductDetailsPage11 from "./pages/shopSingle/product11_v6/[id]";
import ProductDetailsPage12 from "./pages/shopSingle/product12_v7/[id]";
import ProductDetailsPage13 from "./pages/shopSingle/product13_v8/[id]";
import ProductDetailsPage14 from "./pages/shopSingle/product14_v9/[id]";
import ProductDetailsPage15 from "./pages/shopSingle/product15_v10/[id]";
import ProductDetailsPage16 from "./pages/shopSingle/product16_v11/[id]";
import ProductDetailsPage1 from "./pages/shopSingle/product1_simple/[id]";
import ProductDetailsPage3 from "./pages/shopSingle/product3_external/[id]";
import ProductDetailsPage4 from "./pages/shopSingle/product4_grouped/[id]";
import ProductDetailsPage5 from "./pages/shopSingle/product5_onsale/[id]";
import ProductDetailsPage6 from "./pages/shopSingle/product6_outofstock/[id]";
import ShopCartPage from "./pages/shop-cart-checkout/shop_cart";
import ShopCheckoutPage from "./pages/shop-cart-checkout/shop_checkout";
import ShopOrderConplate from "./pages/shop-cart-checkout/shop_order_complete";
import ShopOrderTrackingPage from "./pages/shop-cart-checkout/shop_order_tracking";
// import BlogPage1 from "./pages/blogs/blog_list1";
// import BlogPage2 from "./pages/blogs/blog_list2";
// import BlogPage3 from "./pages/blogs/blog_list3";
// import BlogDetailsPage from "./pages/blogs/blog_single/[id]";
import AccountPage from "./pages/dashboard/account_dashboard";
import LoginPage from "./pages/otherPages/login_mobile";
import StoreLocationPage from "./pages/otherPages/store_location";
import LookbookPage from "./pages/otherPages/lookbook";
import FaqPage from "./pages/otherPages/faq";
import TermsPage from "./pages/otherPages/terms";
import NotFound from "./pages/not-found";
import CommingSoonPage from "./pages/otherPages/coming_soon";
import AccountOrderPage from "./pages/dashboard/account_orders";
import AccountEditAddressPage from "./pages/dashboard/account_edit_address";
import AccountEditPage from "./pages/dashboard/account_edit";
import AccountWishlistPage from "./pages/dashboard/account_wishlist";
import ResetPasswordPage from "./pages/otherPages/reset_password";
import AboutPage from "./pages/otherPages/about";
import ContactPage from "./pages/otherPages/contact";
import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";
import RegistrationPage from "./pages/otherPages/registration";
import { auth } from "../firebase/firebaseUtils";
import { Navigate } from "react-router-dom";
import HomePage24 from "./pages/homes/Hand Bags";
import HomePage23 from "./pages/homes/Watches";
// import AdminDashboard from "./AdminConsole/layout/adminDashboard";
// import { AdminAppContent } from "./AdminConsole/components";
// import AdminConsole from "./AdminConsole/AdminConsole";

function App() {
  const [currentUserExist, setCurrentUserExist] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) setCurrentUserExist(true);
    });
  }, []);
  return (
    <>
      <Svgs />
      <Context>
        <MobileHeader />
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="female-clothings" element={<HomePage2 />} />
            <Route path="men-clothings" element={<HomePage3 />} />
            <Route path="kids-clothings" element={<HomePage4 />} />
            <Route path="phones-&-computers" element={<HomePage5 />} />
            <Route path="cars-&-motobikes" element={<HomePage6 />} />
            <Route path="tv-&-radios" element={<HomePage7 />} />
            <Route path="kids-toys" element={<HomePage8 />} />
            <Route path="house-whole-funitures" element={<HomePage9 />} />
            <Route path="sport-gears" element={<HomePage10 />} />
            <Route path="video-games" element={<HomePage11 />} />
            <Route path="skin-care" element={<HomePage12 />} />
            <Route path="eye-glasses" element={<HomePage13 />} />
            <Route path="jeweries" element={<HomePage14 />} />
            <Route path="kitchen-utensils" element={<HomePage15 />} />
            <Route path="bicycles" element={<HomePage16 />} />
            <Route path="sheos" element={<HomePage17 />} />
            <Route path="watches" element={<HomePage23 />} />
            <Route path="classic-clothings" element={<HomePage18 />} />
            <Route path="coporate-wears" element={<HomePage19 />} />
            <Route path="african-wears" element={<HomePage20 />} />
            <Route path="other-electronics" element={<HomePage21 />} />
            <Route path="headphones" element={<HomePage22 />} />
            <Route path="hand-bags" element={<HomePage24 />} />

            <Route path="shop-1" element={<ShopPage1 />} />
            <Route path="shop-2" element={<ShopPage2 />} />
            <Route path="shop-3" element={<ShopPage3 />} />
            <Route path="shop-4" element={<ShopPage4 />} />
            <Route path="shop-5" element={<ShopPage5 />} />
            <Route path="shop-6" element={<ShopPage6 />} />
            <Route path="shop-7" element={<ShopPage7 />} />
            <Route path="shop-8" element={<ShopPage8 />} />
            <Route path="shop-9" element={<ShopPage9 />} />
            <Route path="top-salers-all" element={<ShopPage10 />} />
            <Route path="shop-11" element={<ShopPage11 />} />
            <Route path="shop-12" element={<ShopPage12 />} />

            <Route
              path="product2_variable/:id"
              element={<ProductDetailsPage2 />}
            />
            <Route path="product7_v2/:id" element={<ProductDetailsPage7 />} />
            <Route path="product8_v3/:id" element={<ProductDetailsPage8 />} />
            <Route path="product9_v4/:id" element={<ProductDetailsPage9 />} />
            <Route path="product10_v5/:id" element={<ProductDetailsPage10 />} />
            <Route path="product11_v6/:id" element={<ProductDetailsPage11 />} />
            <Route path="product12_v7/:id" element={<ProductDetailsPage12 />} />
            <Route path="product13_v8/:id" element={<ProductDetailsPage13 />} />
            <Route path="product14_v9/:id" element={<ProductDetailsPage14 />} />
            <Route
              path="product15_v10/:id"
              element={<ProductDetailsPage15 />}
            />
            <Route
              path="product16_v11/:id"
              element={<ProductDetailsPage16 />}
            />
            <Route
              path="product1_simple/:id"
              element={<ProductDetailsPage1 />}
            />

            <Route
              path="product3_external/:id"
              element={<ProductDetailsPage3 />}
            />
            <Route
              path="product4_grouped/:id"
              element={<ProductDetailsPage4 />}
            />
            <Route
              path="product5_onsale/:id"
              element={<ProductDetailsPage5 />}
            />
            <Route
              path="product6_outofstock/:id"
              element={<ProductDetailsPage6 />}
            />

            <Route
              path="shop_cart"
              element={currentUserExist ? <ShopCartPage /> : <NotFound />}
            />
            <Route
              path="shop_checkout"
              element={currentUserExist ? <ShopCheckoutPage /> : <NotFound />}
            />
            <Route
              path="shop_order_complete"
              element={currentUserExist ? <ShopOrderConplate /> : <NotFound />}
            />
            <Route
              path="shop_order_tracking"
              element={
                currentUserExist ? <ShopOrderTrackingPage /> : <NotFound />
              }
            />
            {/* <Route path="blog_list1" element={<BlogPage1 />} />
            <Route path="blog_list2" element={<BlogPage2 />} />
            <Route path="blog_list3" element={<BlogPage3 />} />
            <Route path="blog_single/:id" element={<BlogDetailsPage />} /> */}

            <Route
              path="account_dashboard"
              element={currentUserExist ? <AccountPage /> : <NotFound />}
            />
            <Route path="store_location" element={<StoreLocationPage />} />
            <Route path="lookbook" element={<LookbookPage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="coming_soon" element={<CommingSoonPage />} />
            <Route
              path="account_orders"
              element={currentUserExist ? <AccountOrderPage /> : <NotFound />}
            />
            <Route
              path="account_edit_address"
              element={
                currentUserExist ? <AccountEditAddressPage /> : <NotFound />
              }
            />
            <Route
              path="account_edit"
              element={currentUserExist ? <AccountEditPage /> : <NotFound />}
            />
            <Route
              path="account_wishlist"
              element={
                currentUserExist ? <AccountWishlistPage /> : <NotFound />
              }
            />
            <Route path="reset_password" element={<ResetPasswordPage />} />
            <Route
              path="registration"
              element={
                !currentUserExist ? <RegistrationPage />: <NotFound/> 
              }
            />
            <Route
              path="mobile-login"
              element={!currentUserExist ? <LoginMobilePage /> : <NotFound />}
            />

            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />

            <Route path="*" element={<NotFound />} />
          </Route>
          {/* <Route path='/admin/' element={<AdminDashboard />}>
              <AdminAppContent />
          </Route> */}
        </Routes>

        <MobileFooter1 />
        <LoginFormPopup />
        <QuickView />
        <NewsLetter />
        <CookieContainer />
        <SizeGuide />
        <Delivery />
        <CartDrawer />
        <SiteMap />
        <CustomerLogin />
        <ShopFilter />
        <ProductDescription />
        <ProductAdditionalInformation />
        <ProductReviews />
      </Context>
      <div className="page-overlay" id="pageOverlay"></div>
      <ScrollTop />
      <ScrollTopBehaviour />
    </>
  );
}

export default App;
