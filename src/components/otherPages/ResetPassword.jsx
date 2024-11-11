import { Link } from "react-router-dom";
import { auth, db } from "../../../firebase/firebaseUtils";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import ResetPasswordOk from "../modals/ConfirmMessage";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [veryEmail, setVeryEmail] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const reRoute = useNavigate()

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = async () => {
    try {
      let userRef = await getDoc(doc(db, "users", email));
      if (userRef.exists()) {
        await sendPasswordResetEmail(auth, email).then(() => {
          setShowConfirm(true);
        });
      } else {
        setVeryEmail("Email not found!!!");
      }
    } catch {}
  };

  return (
    <>
      {showConfirm && (
        <ResetPasswordOk
          img={"/assets/images/confirm-msg.jpg"}
          msg={
            "A reset password link has been send to your email. A Please follow the link to change your password"
          }
          btnCall={() => reRoute("/mobile-login")}
        />
      )}
      <section className="login-register container">
        <h2 className="section-title text-center fs-3 mb-xl-5">
          Reset Your Password
        </h2>
        <p>We will send you an email to reset your password</p>
        <div className="reset-form">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="needs-validation"
          >
            <div className="form-floating mb-3">
              <input
                name="email"
                type="email"
                className="form-control form-control_gray"
                placeholder="Email address *"
                required
                value={email}
                onChange={handleChange}
              />
              <label>Email address *</label>
            </div>
            <ul className="pb-3" style={{ color: "red" }}>
              {veryEmail.length > 0 && <li>{veryEmail}</li>}
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
              Submit
            </button>

            <div className="customer-option mt-4 text-center">
              <span className="text-secondary">Back to </span>
              <Link to="/login_register" className="btn-text js-show-register">
                Login
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
