import { closeModalUserlogin } from "@/utlis/aside";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { signInWithGoogle } from "../../../firebase/firebaseUtils";
import { db, auth } from "../../../firebase/firebaseUtils";
import {
  getDoc,
  doc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function CustomerUserProfile() {
  const [emailOrName, setEmailOrName] = useState("");
  const [password, setPassword] = useState("");
  const [veryLogin, setVeryLogin] = useState("");

  const reRoute = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name == "emailorname") {
      setEmailOrName(value);
    } else if (name == "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async () => {
    if (emailOrName.indexOf("@") >= 1) {
      let userRef = await getDoc(doc(db, "users", emailOrName));
      if (userRef.exists()) {
        if (userRef.data().password === password)
          await signInWithEmailAndPassword(auth, emailOrName, password).then(
            () => {
              setEmailOrName("");
              setPassword("");
              setVeryLogin("");
              closeModalUserlogin();
            }
          );
        else if (userRef.data().password === undefined)
          setVeryLogin("Account login method is through a provider");
        else {
          setVeryLogin("Password incorrect");
        }
      } else if (!userRef.exists()) {
        setVeryLogin("User not found. Create an account");
        setTimeout(() => {
          reRoute("/registration");
          closeModalUserlogin();
          setVeryLogin("");
          setEmailOrName("");
          setPassword("");
        }, 5000);
      }
    } else {
      let docNameAndPWExist = false;
      let docNameExistbutNotPW = false;
      let docNameExistButPWUndef = false;
      let docNoUserExists = false;
      let docMatch = {};
      const docSnapShoot = await getDocs(
        query(
          collection(db, "users"),
          where("displayName", "==", emailOrName.toUpperCase())
        )
      );
      if (docSnapShoot.empty) {
        docNoUserExists = true;
      } else {
        docSnapShoot.forEach(async (doc) => {
          if (
            doc.data().displayName === emailOrName.toUpperCase() &&
            doc.data().password === password
          ) {
            docNameAndPWExist = true;
            docMatch = {
              ...doc.data(),
            };
          } else if (
            doc.data().displayName === emailOrName.toUpperCase() &&
            doc.data().password !== password &&
            doc.data().password !== undefined
          ) {
            docNameExistbutNotPW = true;
          } else if (
            doc.data().displayName === emailOrName.toUpperCase() &&
            doc.data().password == undefined
          ) {
            docNameExistButPWUndef = true;
          }
        });
      }
      if (docNameAndPWExist === true) {
        docNameExistbutNotPW = false;
        docNameExistButPWUndef = false;
        docNoUserExists = false;
        await signInWithEmailAndPassword(auth, docMatch.email, password).then(
          () => {
            setEmailOrName("");
            setPassword("");
            setVeryLogin("");
            closeModalUserlogin();
          }
        );
      }
      if (docNameExistbutNotPW == true) {
        docNameAndPWExist = false;
        docNameExistButPWUndef = false;
        docNoUserExists = false;
        setVeryLogin("Incorrect password.");
      }
      if (docNameExistButPWUndef == true) {
        docNameAndPWExist = false;
        docNameExistbutNotPW = false;
        docNoUserExists = false;
        setVeryLogin("Account login method is through a provider");
      }
      if (docNoUserExists == true) {
        docNameAndPWExist = false;
        docNameExistbutNotPW = false;
        docNameExistButPWUndef = false;
        setVeryLogin("User not found");
      }
    }
  };

  useEffect(() => {
    const pageOverlay = document.getElementById("pageOverlay");

    pageOverlay.addEventListener("click", closeModalUserlogin);

    return () => {
      pageOverlay.removeEventListener("click", closeModalUserlogin);
    };
  }, []);

  return (
    <div
      id="userAside"
      className="aside aside_right overflow-hidden customer-forms "
    >
      <div className="customer-forms__wrapper d-flex position-relative">
        <div className="customer__login">
          <div className="aside-header d-flex align-items-center">
            <h3 className="text-uppercase fs-6 mb-0">Login</h3>
            <button
              onClick={() => closeModalUserlogin()}
              className="btn-close-lg js-close-aside ms-auto"
            />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault(), handleSubmit().then(() => location.reload());
            }}
            className="aside-content"
          >
            <div className="form-floating mb-3">
              <input
                name="emailorname"
                type={"text"}
                className="form-control form-control_gray"
                placeholder="name@example.com"
                onChange={handleChange}
                value={emailOrName}
              />
              <label>Username or email address *</label>
            </div>
            <div className="pb-3" />
            <div className="form-label-fixed mb-3">
              <label className="form-label">Password *</label>
              <input
                name="password"
                className="form-control form-control_gray"
                type="password"
                placeholder="***********"
                onChange={handleChange}
                value={password}
              />
            </div>
            <div className="d-flex align-items-center mb-3 pb-2">
              {/* <div className="form-check mb-0">
                <input
                  name="remember"
                  className="form-check-input form-check-input_fill"
                  type="checkbox"
                  defaultValue
                />
                <label className="form-check-label text-secondary">
                  Remember me
                </label>
              </div> */}
              <Link
                to="/reset_password"
                className="btn-text ms-auto"
                onClick={() => {
                  closeModalUserlogin();
                }}
              >
                Lost password?
              </Link>
            </div>
            <ul className="pb-3" style={{ color: "red" }}>
              {veryLogin.length > 0 && <li>{veryLogin}</li>}
            </ul>
            <button
              className="btn btn-primary w-100 text-uppercase"
              type="submit"
              style={{
                marginBottom: "0rem",
                borderColor: "#f2f2f2",
                borderRadius: "50px",
                borderWidth: "3px",
              }}
            >
              Log In
            </button>
            <hr />
            <button
              onClick={() => {
                signInWithGoogle()
                  .then(() => {
                    setEmailOrName("");
                    setPassword("");
                    setVeryLogin("");
                  })
                  .then(() => location.reload());
              }}
              className="btn btn-primary w-100 text-uppercase"
              type="button"
              style={{
                backgroundColor: "#DB4437",
                borderColor: "#ffe6e6",
                borderRadius: "50px",
                borderWidth: "3px",
              }}
            >
              signin with google
            </button>
            <div className="customer-option mt-4 text-center">
              <span className="text-secondary">No account yet?</span>{" "}
              <a href="/registration" className="btn-text js-show-register">
                Create Account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
