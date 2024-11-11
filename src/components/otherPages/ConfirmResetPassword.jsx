import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import {
  validatePassword,
  signInWithEmailAndPassword,
  updatePassword,
} from "firebase/auth";
import { db, auth } from "../../../firebase/firebaseUtils";
import { useParams } from "react-router-dom";
import { updateDoc } from "firebase/firestore";

export default function ConfirmPasswordReset() {
  let params = useParams();
  const email = params.email;
  const [password, setPassword] = useState({
    inputPW: "",
    showInputPW: false,
  });
  const [confirmPassword, setComfirmPassword] = useState({
    inputConfPW: "",
    showInputConfPW: false,
  });
  const [passwordDiff, setPasswordDiff] = useState("");
  // const [passwordNotLen, setPasswordNotLen] = useState("");
  const [passwordLes8, setPasswordLes8] = useState("");
  const [conPasswordLes8, setConPasswordLes8] = useState("");
  const [checkPWUpper, setCheckPWUpper] = useState("");
  const [checkPWLower, setCheckPWLower] = useState("");
  const [checkPWSpecialChar, setCheckPWSpecialChar] = useState("");
  const [checkPWNum, setCheckPWNum] = useState("");
  const [checkConPWUpper, setCheckConPWUpper] = useState("");
  const [checkConPWLower, setCheckConPWLower] = useState("");
  const [checkConPWSpecialChar, setCheckConPWSpecialChar] = useState("");
  const [checkConPWNum, setCheckConPWNum] = useState("");

  const reRoute = useNavigate();

  // enter input values
  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name == "password") {
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
      password.inputPW !== confirmPassword.inputConfPW
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

      //validating if password and confirm password are the same
      password.inputPW !== confirmPassword.inputConfPW &&
        setPasswordDiff("Password must match confirm password");
      password.inputPW == confirmPassword.inputConfPW && setPasswordDiff("");

      validation = false;
    } else {
      serverValidationPW.containsLowercaseLetter == true && setCheckPWLower("");
      serverValidationConPW.containsNumericCharacter == true &&
        setCheckConPWNum("");
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
      email,
      password: password.inputPW,
    };
    //
    let docRef = doc(db, "users", data.email);
    await getDoc(docRef).then(async (docSnap) => {
      await signInWithEmailAndPassword(
        auth,
        data.email,
        docSnap.data().password
      ).then(async () => {
        const user = auth.currentUser;
        await updatePassword(user, data.password).then(() => {
          updateDoc(docRef, {
            password: data.password,
          });
        });
      });
    });
  };

  return (
    <section className="login-register container">
      <h2 className="d-none">Login & Register</h2>
      <ul className="nav nav-tabs mb-5" id="login_register">
        <li className="nav-item">
          <a className="nav-link nav-link_underscore" id="register-tab">
            Reset Password
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
                    handleSubmit().then(() => {reRoute('/')});
                  }
                });
              }}
              className="needs-validation"
            >
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
                <label htmlFor="customerPasswodInput">New Password *</label>
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
                  Comfirm New Password *
                </label>
              </div>

              <ul className="pb-3" style={{ color: "red" }}>
                {passwordDiff.length > 0 && <li>{passwordDiff}</li>}
                {passwordLes8.length > 0 && <li>{passwordLes8}</li>}
                {checkPWLower.length > 0 && <li>{checkPWLower}</li>}
                {checkPWUpper.length > 0 && <li>{checkPWUpper}</li>}
                {checkPWNum.length > 0 && <li>{checkPWNum}</li>}
                {checkPWSpecialChar.length > 0 && <li>{checkPWSpecialChar}</li>}
                {checkConPWLower.length > 0 && <li>{checkConPWLower}</li>}
                {checkConPWUpper.length > 0 && <li>{checkConPWUpper}</li>}
                {checkConPWNum.length > 0 && <li>{checkConPWNum}</li>}
                {checkConPWSpecialChar.length > 0 && (
                  <li>{checkConPWSpecialChar}</li>
                )}
                {conPasswordLes8.length > 0 && <li>{conPasswordLes8}</li>}
              </ul>
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
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
