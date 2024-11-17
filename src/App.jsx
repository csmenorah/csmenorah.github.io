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
import { useEffect, useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";

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
import FemaleClothings from "./pages/shoplist/female-clothings";
import ShopPage2 from "./pages/shoplist/men-clothings";
import ShopPage3 from "./pages/shoplist/children-clothings";
import ShopPage4 from "./pages/shoplist/classic-dresses";
import ShopPage5 from "./pages/shoplist/coporate-dressing";
import ShopPage6 from "./pages/shoplist/african-wear-shop";
import ShopPage7 from "./pages/shoplist/sports-gear-shop";
import ShopPage8 from "./pages/shoplist/hand-bags-shop";
import ShopPage9 from "./pages/shoplist/shoes-shop";
import ShopPage10 from "./pages/shoplist/skin-care-shop";
import ShopPage11 from "./pages/shoplist/eye-glasses-shop";
import ShopPage12 from "./pages/shoplist/jewelries-shop";
import ShopPage13 from "./pages/shoplist/jewelries-shop";
import ShopPage14 from "./pages/shoplist/watches-shop";
import ShopPage15 from "./pages/shoplist/cars-&-moto-bike-shop";
import ShopPage17 from "./pages/shoplist/phone-&-computers-shop";
import ShopPage18 from "./pages/shoplist/headphones-shop";
import ShopPage19 from "./pages/shoplist/other-electronics-shop";
import ShopPage20 from "./pages/shoplist/bicycle-shop";
import ShopPage16 from "./pages/shoplist/tv-&-radio-shop";
import ShopPage21 from "./pages/shoplist/kids-toy-shop";
import ShopPage22 from "./pages/shoplist/video-games-shop";
import ShopPage23 from "./pages/shoplist/kitchen-utensils-shop";
import ShopPage24 from "./pages/shoplist/house-whole-funitures-shop";
import ProductDetailsPage2 from "./pages/product-details/variable_products/[id]";
import ProductDetailsPage12 from "./pages/product-details/product_detail/[id]";
import ProductDetailsPage3 from "./pages/product-details/external_product/[id]";
import ProductDetailsPage4 from "./pages/product-details/grouped_product/[id]";
import ProductDetailsPage5 from "./pages/product-details/product_onsale/[id]";
import ProductDetailsPage6 from "./pages/product-details/product_outofstock/[id]";
import ShopCartPage from "./pages/shop-cart-checkout/shop_cart";
import ShopCheckoutPage from "./pages/shop-cart-checkout/shop_checkout";
import ShopOrderConplate from "./pages/shop-cart-checkout/shop_order_complete";
import ShopOrderTrackingPage from "./pages/shop-cart-checkout/shop_order_tracking";
import AccountPage from "./pages/dashboard/account_dashboard";
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
import HomePage24 from "./pages/homes/Hand Bags";
import HomePage23 from "./pages/homes/Watches";
import ConfirmResetPasswordPage from "./pages/otherPages/confirm-reset-password";
import AddNewProductPage from "./pages/dashboard/add_new_product";

export const NewsletterContext = createContext()

function App() {
  const [newsLetterDisplay, setNewsLetterDisplay] = useState(true);
  const [currentUserExist, setCurrentUserExist] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);
  useEffect(() => {

    const authListener = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setCurrentUserExist(true);
      }
    });
    return () => authListener()
  }, []);
  const newsLetterDisplayFunc = (val) => {
    setNewsLetterDisplay(val);
    console.log(newsLetterDisplay);
  }

  const newsLetterContextEl = {
    newsLetterDisplay,
    newsLetterDisplayFunc,
    setNewsLetterDisplay
  }
  return (
    <>
      <Svgs />
      <Context>
        <NewsletterContext.Provider value={newsLetterContextEl}>
          <MobileHeader />
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="home" element={<HomePage />} />
              <Route path="female-clothings-display" element={<HomePage2 />} />
              <Route path="men-clothings-display" element={<HomePage3 />} />
              <Route path="kids-clothings-display" element={<HomePage4 />} />
              <Route
                path="phones-&-computers-display"
                element={<HomePage5 />}
              />
              <Route path="cars-&-motobikes-display" element={<HomePage6 />} />
              <Route path="tv-&-radios-display" element={<HomePage7 />} />
              <Route path="kids-toys-display" element={<HomePage8 />} />
              <Route
                path="house-whole-funitures-display"
                element={<HomePage9 />}
              />
              <Route path="sport-gears-display" element={<HomePage10 />} />
              <Route path="video-games-display" element={<HomePage11 />} />
              <Route path="skin-care-display" element={<HomePage12 />} />
              <Route path="eye-glasses-display" element={<HomePage13 />} />
              <Route path="jeweries-display" element={<HomePage14 />} />
              <Route path="kitchen-utensils-display" element={<HomePage15 />} />
              <Route path="bicycles-display" element={<HomePage16 />} />
              <Route path="sheos-display" element={<HomePage17 />} />
              <Route path="watches-display" element={<HomePage23 />} />
              <Route
                path="classic-clothings-display"
                element={<HomePage18 />}
              />
              <Route path="coporate-wears-display" element={<HomePage19 />} />
              <Route path="african-wears-display" element={<HomePage20 />} />
              <Route
                path="other-electronics-display"
                element={<HomePage21 />}
              />
              <Route path="headphones-display" element={<HomePage22 />} />
              <Route path="hand-bags-display" element={<HomePage24 />} />

              <Route
                path="female-clothings-shop"
                element={<FemaleClothings />}
              />
              <Route path="men-clothings-shop" element={<ShopPage2 />} />
              <Route path="children-clothings-shop" element={<ShopPage3 />} />
              <Route path="classic-dressing-shop" element={<ShopPage4 />} />
              <Route path="coporate-dressing-shop" element={<ShopPage5 />} />
              <Route path="african-wear-shop" element={<ShopPage6 />} />
              <Route path="sports-gear-shop" element={<ShopPage7 />} />
              <Route path="hand-bags-shop" element={<ShopPage8 />} />
              <Route path="shoes-shop" element={<ShopPage9 />} />
              <Route path="top-salers-all" element={<ShopPage10 />} />
              <Route path="skin-care-shop" element={<ShopPage11 />} />
              <Route path="eye-glasses-shop" element={<ShopPage12 />} />
              <Route path="jewelries-shop" element={<ShopPage13 />} />
              <Route path="watches-shop" element={<ShopPage14 />} />
              <Route path="cars-&-moto-bike-shop" element={<ShopPage15 />} />
              <Route path="tv-&-radio-shop" element={<ShopPage16 />} />
              <Route path="phone-&-computers-shop" element={<ShopPage17 />} />
              <Route path="headphones-shop" element={<ShopPage18 />} />
              <Route path="other-electronics-shop" element={<ShopPage19 />} />
              <Route path="bicycle-shop" element={<ShopPage20 />} />
              <Route path="kids-toy-shop" element={<ShopPage21 />} />
              <Route path="video-games-shop" element={<ShopPage22 />} />
              <Route path="kitchen-utensils-shop" element={<ShopPage23 />} />
              <Route
                path="house-whole-funitures-shop"
                element={<ShopPage24 />}
              />

              <Route
                path="product-variable/:id"
                element={<ProductDetailsPage2 />}
              />
              <Route
                path="product-detail/:id"
                element={<ProductDetailsPage12 />}
              />

              <Route
                path="external-product/:id"
                element={<ProductDetailsPage3 />}
              />
              <Route
                path="grouped-product/:id"
                element={<ProductDetailsPage4 />}
              />
              <Route
                path="product-onsale/:id"
                element={<ProductDetailsPage5 />}
              />
              <Route
                path="product-outofstock/:id"
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
                element={
                  currentUserExist ? <ShopOrderConplate /> : <NotFound />
                }
              />
              <Route
                path="shop_order_tracking"
                element={
                  currentUserExist ? <ShopOrderTrackingPage /> : <NotFound />
                }
              />

              <Route
                path="account_dashboard"
                element={currentUserExist ? <AccountPage /> : <NotFound />}
              />

              <Route
                path="add-new-product"
                element={currentUserExist ? <AddNewProductPage /> : <NotFound />}
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
              <Route
                path="new-password-reset/:email"
                element={
                  currentUserExist ? <HomePage /> : <ConfirmResetPasswordPage />
                }
              />
              <Route path="reset_password" element={<ResetPasswordPage />} />
              <Route
                path="registration"
                element={
                  !currentUserExist ? <RegistrationPage /> : <NotFound />
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
          </Routes>

          <MobileFooter1 />
          <LoginFormPopup />
          <QuickView />
          {newsLetterDisplay && <NewsLetter />}
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
        </NewsletterContext.Provider>
      </Context>
      <div className="page-overlay" id="pageOverlay"></div>
      <ScrollTop />
      <ScrollTopBehaviour />
    </>
  );
}

export default App;
