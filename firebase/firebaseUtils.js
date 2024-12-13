import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./firebaseConfig";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  signInWithRedirect,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { closeModalUserlogin } from "@/utlis/aside";
import {
  collection,
  getDocs,
  query,
} from "firebase/firestore";

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = async () => {
  await signInWithPopup(auth, provider).then(() => closeModalUserlogin());
};
export const signInWithGoogleRedirect = async () => {
  await signInWithRedirect(auth, provider);
};

export const userSignOut = async (redirect) => {
  await signOut(auth);
  redirect;
};




