/* eslint-disable react/prop-types */
import { allProducts } from "@/data/products";
import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { auth } from "../../firebase/firebaseUtils";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseUtils";
import { signOut } from "firebase/auth";
const dataContext = React.createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useContextElement = () => {
  return useContext(dataContext);
};

let initialUserState = {
  displayName: null,
  email: null,
  phoneNumber: null,
  photoURL: null,
};

export default function Context({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [quickViewItem, setQuickViewItem] = useState(allProducts[0]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [currentUserDetails, setCurrentUserDetails] = useState({
    ...initialUserState,
  });

  useEffect(() => {
    const subtotal = cartProducts.reduce((accumulator, product) => {
      return accumulator + product.quantity * product.price;
    }, 0);
    setTotalPrice(subtotal);
  }, [cartProducts]);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth)
        setCurrentUserDetails(() => {
          return { ...initialUserState };
        });
      else {
        const docRef = doc(db, "users", userAuth.email);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        if (userAuth.providerData[0].providerId == "password") {
          if (docSnap.exists()) {
            setCurrentUserDetails((prev) => {
              return {
                ...prev,
                displayName: data.displayName,
                email: data.email,
                phoneNumber: data.phoneNumber,
                photoURL: data.photoURL,
              };
            });
          }
        } else if (userAuth.providerData[0].providerId == "google.com") {
          if (docSnap.exists()) {
            setCurrentUserDetails((prev) => {
              return {
                ...prev,
                displayName: data.displayName,
                email: data.email,
                phoneNumber: data.phoneNumber,
                photoURL: data.photoURL,
              };
            });
          } else {
            await setDoc(doc(collection(db, "users"), userAuth.email), {
              date: new Date().toUTCString(),
              displayName: userAuth.displayName.toUpperCase(),
              email: userAuth.email,
              phoneNumber: userAuth.phoneNumber,
              photoURL: userAuth.photoURL,
              providerId: userAuth.providerId,
              uid: userAuth.uid,
            });
            setCurrentUserDetails((prev) => {
              return {
                ...prev,
                displayName: userAuth.displayName.toUpperCase(),
                email: userAuth.email,
                phoneNumber: userAuth.phoneNumber,
                photoURL: userAuth.photoURL,
              };
            });
          }
        }
      }
    });
  }, []);

  const addProductToCart = (id) => {
    if (!cartProducts.filter((elm) => elm.id == id)[0]) {
      const item = {
        ...allProducts.filter((elm) => elm.id == id)[0],
        quantity: 1,
      };
      setCartProducts((pre) => [...pre, item]);

      document
        .getElementById("cartDrawerOverlay")
        .classList.add("page-overlay_visible");
      document.getElementById("cartDrawer").classList.add("aside_visible");
    }
  };
  const isAddedToCartProducts = (id) => {
    if (cartProducts.filter((elm) => elm.id == id)[0]) {
      return true;
    }
    return false;
  };

  const toggleWishlist = (id) => {
    if (wishList.includes(id)) {
      setWishList((pre) => [...pre.filter((elm) => elm != id)]);
    } else {
      setWishList((pre) => [...pre, id]);
    }
  };
  const isAddedtoWishlist = (id) => {
    if (wishList.includes(id)) {
      return true;
    }
    return false;
  };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartList"));
    if (items?.length) {
      setCartProducts(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartProducts));
  }, [cartProducts]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("wishlist"));
    if (items?.length) {
      setWishList(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);

  const contextElement = {
    cartProducts,
    setCartProducts,
    totalPrice,
    addProductToCart,
    isAddedToCartProducts,
    toggleWishlist,
    isAddedtoWishlist,
    quickViewItem,
    wishList,
    setQuickViewItem,
    currentUserDetails,
    setCurrentUserDetails,
  };
  return (
    <dataContext.Provider value={contextElement}>
      {children}
    </dataContext.Provider>
  );
}
