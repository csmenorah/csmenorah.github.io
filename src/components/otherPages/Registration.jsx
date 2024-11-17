import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { openModalUserlogin } from "@/utlis/aside";
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { validatePassword, sendEmailVerification, createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth, signInWithGoogle } from "../../../firebase/firebaseUtils";
import ConfirmRegistration from "../modals/ConfirmMessage";

export default function Registration() {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState({
    inputPW: "",
    showInputPW: false,
  });
  const [confirmPassword, setComfirmPassword] = useState({
    inputConfPW: "",
    showInputConfPW: false,
  });
  const [terms, setTerms] = useState(false);
  const [passwordDiff, setPasswordDiff] = useState("");
  // const [passwordNotLen, setPasswordNotLen] = useState("");
  const [passwordLes8, setPasswordLes8] = useState("");
  const [conPasswordLes8, setConPasswordLes8] = useState("");
  const [checkboxErr, setCheckBoxErr] = useState("");
  const [checkUserEmail, setCheckUserEmail] = useState("");
  const [checkUserName, setCheckUserName] = useState("");
  const [checkPWUpper, setCheckPWUpper] = useState("");
  const [checkPWLower, setCheckPWLower] = useState("");
  const [checkPWSpecialChar, setCheckPWSpecialChar] = useState("");
  const [checkPWNum, setCheckPWNum] = useState("");
  const [checkConPWUpper, setCheckConPWUpper] = useState("");
  const [checkConPWLower, setCheckConPWLower] = useState("");
  const [checkConPWSpecialChar, setCheckConPWSpecialChar] = useState("");
  const [checkConPWNum, setCheckConPWNum] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const reRoute = useNavigate();

  const conMsg = `Registration Complete. 
  A confirmation email link has been send to your email. Please follow the link to validate your registration.`;

  const handleShowPW = (value) => {
    value;
  };

  // enter input values
  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name == "userName") {
      setuserName(value);
    } else if (name == "email") {
      setEmail(value);
    } else if (name == "phoneNumber") {
      setPhoneNumber(value);
    } else if (name == "password") {
      setPassword((prev) => {
        return { ...prev, inputPW: value };
      });
    } else if (name == "confirmPassword") {
      setComfirmPassword((prev) => {
        return { ...prev, inputConfPW: value };
      });
    }
  };

  // checking error for password and checkbox
  const checkForErrors = async () => {
    let validation = true;
    let serverValidationPW = await validatePassword(auth, password.inputPW);
    let serverValidationConPW = await validatePassword(
      auth,
      confirmPassword.inputConfPW
    );

    if (
      !serverValidationPW.isValid ||
      !serverValidationConPW ||
      (!serverValidationConPW && !serverValidationPW) ||
      password.inputPW !== confirmPassword.inputConfPW ||
      terms == false
    ) {
      // validating password
      serverValidationPW.containsLowercaseLetter !== true &&
        setCheckPWLower("Password must contain one or more lowercase letters");
      serverValidationPW.containsLowercaseLetter == true && setCheckPWLower("");

      serverValidationPW.containsUppercaseLetter !== true &&
        setCheckPWUpper("Password must contain one or more uppercase letters");
      serverValidationPW.containsUppercaseLetter == true && setCheckPWUpper("");

      serverValidationPW.containsNumericCharacter !== true &&
        setCheckPWNum("Password must contain one or more number figures");
      serverValidationPW.containsNumericCharacter == true && setCheckPWNum("");

      serverValidationPW.containsNonAlphanumericCharacter !== true &&
        setCheckPWSpecialChar("Password must contain a Special Character");
      serverValidationPW.containsNonAlphanumericCharacter == true &&
        setCheckPWSpecialChar("");

      serverValidationPW.meetsMinPasswordLength !== true &&
        setPasswordLes8("Password must be eight or more characters");
      serverValidationPW.meetsMinPasswordLength == true && setPasswordLes8("");

      // validating confirm password
      serverValidationConPW.containsLowercaseLetter !== true &&
        setCheckConPWLower(
          "Confirm Password must contain one or more lowercase letters"
        );
      serverValidationConPW.containsLowercaseLetter == true &&
        setCheckConPWLower("");

      serverValidationConPW.containsUppercaseLetter !== true &&
        setCheckConPWUpper(
          "Confirm Password must contain one or more uppercase letters"
        );
      serverValidationConPW.containsUppercaseLetter == true &&
        setCheckConPWUpper("");

      serverValidationConPW.containsNumericCharacter !== true &&
        setCheckConPWNum(
          "Confirm Password must contain one or more number figures"
        );
      serverValidationConPW.containsNumericCharacter == true &&
        setCheckConPWNum("");

      serverValidationConPW.containsNonAlphanumericCharacter !== true &&
        setCheckConPWSpecialChar(
          "Confirm Password must contain a Special Character"
        );
      serverValidationConPW.containsNonAlphanumericCharacter == true &&
        setCheckConPWSpecialChar("");

      serverValidationConPW.meetsMinPasswordLength !== true &&
        setConPasswordLes8("Confirm Password must be eight or more characters");
      serverValidationConPW.meetsMinPasswordLength == true &&
        setConPasswordLes8("");

      // validating checkbox
      terms == false &&
        setCheckBoxErr(
          "Please checked the box to agree to our privacy policy."
        );
      terms == true && setCheckBoxErr("");

      //validating if password and confirm password are the same
      password.inputPW !== confirmPassword.inputConfPW &&
        setPasswordDiff("Password must match confirm password");
      password.inputPW == confirmPassword.inputConfPW && setPasswordDiff("");

      validation = false;
    } else {
      serverValidationPW.containsLowercaseLetter == true && setCheckPWLower("");
      serverValidationConPW.containsNumericCharacter == true &&
        setCheckConPWNum("");
      password.inputPW == confirmPassword.inputConfPW && setPasswordDiff("");
      terms == true && setCheckBoxErr("");
      serverValidationConPW.meetsMinPasswordLength == true &&
        setConPasswordLes8("");
      serverValidationConPW.containsNonAlphanumericCharacter == true &&
        setCheckConPWSpecialChar("");
      serverValidationConPW.containsUppercaseLetter == true &&
        setCheckConPWUpper("");
      serverValidationConPW.containsUppercaseLetter == true &&
        setCheckConPWUpper("");
      serverValidationConPW.containsLowercaseLetter == true &&
        setCheckConPWLower("");
      serverValidationPW.meetsMinPasswordLength == true && setPasswordLes8("");
      serverValidationPW.containsNonAlphanumericCharacter == true &&
        setCheckPWSpecialChar("");
      serverValidationPW.containsNumericCharacter == true && setCheckPWNum("");
      serverValidationPW.containsUppercaseLetter == true && setCheckPWUpper("");
    }
    return validation;
  };

  // handling submit
  const handleSubmit = async function () {
    let data = {
      date: new Date().toUTCString(),
      displayName: userName.toUpperCase(),
      email,
      phoneNumber,
      password: password.inputPW,
      providerId: "Password",
      uid: email,
      photoURL: "",
    };
    //
    let docRef = doc(db, "users", data.email);
    let docSnap = await getDoc(docRef);
    let userColRef = collection(db, "users");
    let newUserRef = doc(userColRef, data.email);
    if (docSnap.exists()) {
      setCheckUserEmail("User with Email Exist. Please Login instead");
      setCheckUserName("");
      openModalUserlogin();
    } else {
      let docSnapShots = await getDocs(collection(db, "users"));
      let userNameExist = false;
      docSnapShots.forEach((doc) => {
        if (doc.data().displayName.toUpperCase() == data.displayName) {
          setCheckUserEmail("");
          setCheckUserName("User name exist. Please try another User Name");
          userNameExist = true;
        }
      });
      if (userNameExist == false) {
        setCheckUserName("");
        await setDoc(newUserRef, { ...data, userCartegory: "Client" })
          .then(async () => {
            setShowConfirm(true);
            await createUserWithEmailAndPassword(auth, data.email, data.password)
            reRoute('/')
            location.reload()
          })
          .then(() => {
            setTerms(false);
            setuserName("");
            setEmail("");
            setPhoneNumber("");
            setPassword("");
            setComfirmPassword("");
          })
          .then(() => {
            sendEmailVerification(auth.currentUser)
            setShowConfirm(true);
          });
      }
    }
  };
  return (
    <>
      {showConfirm && (
        <ConfirmRegistration
          img={"/assets/images/confirm-msg.jpg"}
          msg={
            conMsg
          }
          btnCall={() => reRoute('/')}
        />
      )}
      <section className="login-register container">
        <h2 className="d-none">Login & Register</h2>
        <ul className="nav nav-tabs mb-5" id="login_register">
          <li className="nav-item">
            <a className="nav-link nav-link_underscore" id="register-tab">
              Register
            </a>
          </li>
        </ul>
        <div className="tab-content pt-2" id="login_register_tab_content">
          <div
            className="tab-pane fade show active"
            id="tab-item-login"
            role="tabpanel"
            aria-labelledby="login-tab"
          >
            <div className="login-form">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  checkForErrors().then((value) => {
                    if (value == true) {
                      handleSubmit().then(() => {
                        if (
                          checkUserEmail.length < 0 &&
                          checkUserName.length < 0
                        )
                          location.reload();
                      });
                    }
                  });
                }}
                className="needs-validation"
              >
                <div className="form-floating mb-3">
                  <input
                    name="userName"
                    type="text"
                    className="form-control form-control_gray"
                    placeholder="User Name *"
                    value={userName}
                    onChange={handleInput}
                    required
                  />
                  <label>User Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    name="email"
                    type="email"
                    className="form-control form-control_gray"
                    placeholder="Email address *"
                    value={email}
                    onChange={handleInput}
                    required
                  />
                  <label>Email address *</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    name="phoneNumber"
                    type="text"
                    className="form-control form-control_gray"
                    placeholder="Phone Number *"
                    value={phoneNumber}
                    onChange={handleInput}
                    required
                  />
                  <label>Phone Number *</label>
                </div>

                <div className="pb-3"></div>

                <div className="form-floating mb-3">
                  <input
                    name="password"
                    type={password.showInputPW ? "text" : "password"}
                    className="form-control form-control_gray"
                    id="customerPasswodInput"
                    placeholder="Password *"
                    value={password.inputPW}
                    onChange={handleInput}
                    required
                  />
                  <label htmlFor="customerPasswodInput">Password *</label>
                </div>

                <div className="pb-3"></div>

                <div className="form-floating mb-3">
                  <input
                    name="confirmPassword"
                    type={confirmPassword.showInputPW ? "text" : "password"}
                    className="form-control form-control_gray"
                    id="customerConfirmPasswodInput"
                    placeholder="Confirm Password *"
                    value={confirmPassword.inputConfPW}
                    onChange={handleInput}
                    required
                  />
                  <label htmlFor="customerPasswodInput">
                    Comfirm Password *
                  </label>
                </div>

                <ul className="pb-3" style={{ color: "red" }}>
                  {checkboxErr.length > 0 && <li>{checkboxErr}</li>}
                  {passwordDiff.length > 0 && <li>{passwordDiff}</li>}
                  {passwordLes8.length > 0 && <li>{passwordLes8}</li>}
                  {checkPWLower.length > 0 && <li>{checkPWLower}</li>}
                  {checkPWUpper.length > 0 && <li>{checkPWUpper}</li>}
                  {checkPWNum.length > 0 && <li>{checkPWNum}</li>}
                  {checkPWSpecialChar.length > 0 && (
                    <li>{checkPWSpecialChar}</li>
                  )}
                  {checkConPWLower.length > 0 && <li>{checkConPWLower}</li>}
                  {checkConPWUpper.length > 0 && <li>{checkConPWUpper}</li>}
                  {checkConPWNum.length > 0 && <li>{checkConPWNum}</li>}
                  {checkConPWSpecialChar.length > 0 && (
                    <li>{checkConPWSpecialChar}</li>
                  )}
                  {conPasswordLes8.length > 0 && <li>{conPasswordLes8}</li>}
                  {checkUserName && <li>{checkUserName}</li>}
                  {checkUserEmail && <li>{checkUserEmail}</li>}
                </ul>

                <div className="d-flex align-items-left mb-3 pb-2">
                  <div className="form-check mb-0">
                    <input
                      name="term"
                      className="form-check-input form-check-input_fill"
                      type="checkbox"
                      checked={terms}
                      onChange={() => {
                        setTerms(!terms);
                      }}
                    />
                    <label className="form-check-label text-secondary">
                      Please check the box to agree with Brown Commerce privacy
                      policy. Your personal data will be used to support and
                      improve your personal experience throughout this website,
                      to manage access to your account, and for other purposes
                      described in our privacy policy.
                    </label>
                  </div>
                </div>
                <button
                  style={{
                    marginBottom: "5px",
                    borderColor: "#f2f2f2",
                    borderRadius: "50px",
                    borderWidth: "3px",
                  }}
                  className="btn btn-primary w-100 text-uppercase"
                  type="submit"
                >
                  SignUp
                </button>
                <hr />
                <button
                  onClick={() => {
                    signInWithGoogle()
                      .then(() => {
                        reRoute("/");
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
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
