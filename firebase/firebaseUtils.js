import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./firebaseConfig";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { closeModalUserlogin } from '@/utlis/aside';

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  await signInWithPopup(auth, provider).then(() => closeModalUserlogin())
};

export const userSignOut = (redirect) => {
  signOut(auth);
  redirect;
};
