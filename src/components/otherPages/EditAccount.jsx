import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  setDoc,
  updateDoc,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../../firebase/firebaseUtils";
import { useContextElement } from "@/context/Context";
import { confirmPasswordReset, reload } from "firebase/auth";

export default function EditAccount() {
  const { currentUserDetails, setCurrentUserDetails } = useContextElement();
  let user = { ...currentUserDetails };

  const [fname, setfName] = useState("");
  const [lname, setLName] = useState(user.lastName);
  const [dname, setDName] = useState(user.displayName);
  const [streetAdd, setStreetAdd] = useState(user.street);
  const [city, setCity] = useState(user.city);
  const [zip, setZip] = useState(user.zip);
  const [state, setState] = useState(user.state);
  const [country, setCountry] = useState(user.country);
  const [phone, setPhone] = useState(user.phone);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [email, setEmail] = useState(user.email);
  const setInitValues = () => {
    setfName(user.firstName);
    setLName(user.LastName);
    setDName(user.displayName);
    setStreetAdd(user.street);
    setCity(user.city);
    setZip(user.zip);
    setState(user.state);
    setCountry(user.country);
    setPhone(user.phoneNumber);
    setEmail(user.email);
  };

  useEffect(() => {
    setInitValues();
  }, []);
  let handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "fname") {
      setfName(value);
    } else if (name === "lname") {
      setLName(value);
    } else if (name === "dname") {
      setDName(value);
    } else if (name === "streetAdd") {
      setStreetAdd(value);
    } else if (name === "city") {
      setCity(value);
    } else if (name === "zip") {
      setZip(value);
    } else if (name === "state") {
      setState(value);
    } else if (name === "country") {
      setCountry(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "currentPassword") {
      setCurrentPassword(value);
    } else if (name === "newPassword") {
      setNewPassword(value);
    } else if (name === "confirmNewPassword") {
      setNewPasswordConfirm(value);
    }
  };

  const addUserName = async () => {
    const userFName = doc(db, "users", currentUserDetails.email);
    if (fname !== false || fname !== undefined) {
      await updateDoc(userFName, { firstName: fname });
    }
    if (lname !== false || lname !== undefined) {
      await updateDoc(userFName, { lastName: lname });
    }
    if (dname !== false || dname !== undefined) {
      await updateDoc(userFName, { displayName: dname });
    }
    if (streetAdd !== false || streetAdd !== undefined) {
      await updateDoc(userFName, { street: streetAdd });
    }
    if (city !== false || city !== undefined) {
      await updateDoc(userFName, { city: city });
    }
    if (zip !== false || zip !== undefined) {
      await updateDoc(userFName, { zip: zip });
    }
    if (state !== false || state !== undefined) {
      await updateDoc(userFName, { state: state });
    }
    if (country !== false || country !== undefined) {
      await updateDoc(userFName, { country: country });
    }
    if (phone !== false || phone !== undefined) {
      await updateDoc(userFName, { phoneNumber: phone });
    }

    const docRef = doc(db, "users", currentUserDetails.email);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    if (docSnap.exists()) {
      setCurrentUserDetails((prev) => {
        return {
          ...prev,
          displayName: data.displayName,
          email: data.email,
          phoneNumber: data.phoneNumber,
          photoURL: data.photoURL,
          firstName: data.firstName,
          lastName: data.lastName,
          city: data.city,
          state: data.state,
          street: data.street, 
          country: data.country,
          zip: data.zip
        };
      });
    }
  };

  const handleSubmit = () => {
    addUserName();
    setInitValues();
  };

  return (
    <div className="col-lg-9">
      <div className="page-content my-account__edit">
        <div className="my-account__edit-form">
          <form
            onSubmit={(e) => {
              e.preventDefault(), handleSubmit();
            }}
            className="needs-validation"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    className="form-control"
                    id="account_first_name"
                    placeholder={
                      !user.firstName ? "First Name" : user.firstName
                    }
                    value={fname}
                    name="fname"
                    onChange={handleChange}
                  />
                  <label htmlFor="account_first_name">First Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    className="form-control"
                    id="account_last_name"
                    placeholder={!user.lastName ? "Last Name" : user.lastName}
                    value={lname}
                    name="lname"
                    onChange={handleChange}
                  />
                  <label htmlFor="account_last_name">Last Name</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    className="form-control"
                    id="account_display_name"
                    placeholder={dname}
                    value={dname}
                    name="dname"
                    onChange={handleChange}
                  />
                  <label htmlFor="account_display_name">Display Name</label>
                </div>
              </div>
              {/*<div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="email"
                    className="form-control"
                    id="account_email"
                    placeholder={user.email}
                    value={email}
                    name="email"
                    onChange={handleChange}
                  />
                  <label htmlFor="account_email">Email Address</label>
                </div>
              </div>*/}
              <div className="col-md-12">
                <div className="form-floating mt-3 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="checkout_street_address"
                    placeholder="Street Address *"
                    value={streetAdd}
                    name="streetAdd"
                    onChange={handleChange}
                  />
                  <label htmlFor="checkout_company_name">
                    Street Address *
                  </label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    className="form-control"
                    id="checkout_city"
                    placeholder="Town / City *"
                    value={city}
                    name="city"
                    onChange={handleChange}
                  />
                  <label htmlFor="checkout_city">Town / City *</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    className="form-control"
                    id="checkout_zipcode"
                    placeholder="Postcode / ZIP *"
                    value={zip}
                    name="zip"
                    onChange={handleChange}
                  />
                  <label htmlFor="checkout_zipcode">Postcode / ZIP *</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    className="form-control"
                    id="checkout_province"
                    placeholder="Province *"
                    value={state}
                    name="state"
                    onChange={handleChange}
                  />
                  <label htmlFor="checkout_province">Province / State *</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    className="form-control"
                    id="checkout_province"
                    placeholder="Country"
                    value={country}
                    name="country"
                    onChange={handleChange}
                  />
                  <label htmlFor="checkout_province">Country *</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    className="form-control"
                    id="checkout_phone"
                    placeholder="Phone *"
                    value={phone}
                    name="phone"
                    onChange={handleChange}
                  />
                  <label htmlFor="checkout_phone">Phone *</label>
                </div>
              </div>{/*
              <div className="col-md-12">
                <div className="my-3">
                  <h5 className="text-uppercase mb-0">Change Password</h5>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="password"
                    className="form-control"
                    id="account_current_password"
                    placeholder="Current password"
                    value={currentPassword}
                    name="currentPassword"
                    onChange={handleChange}
                  />
                  <label htmlFor="account_current_password">
                    Current password
                  </label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="password"
                    className="form-control"
                    id="account_new_password"
                    placeholder="New password"
                    value={newPassword}
                    name="newPassword"
                    onChange={handleChange}
                  />
                  <label htmlFor="account_new_password">New password</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="password"
                    className="form-control"
                    data-cf-pwd="#account_new_password"
                    id="account_confirm_password"
                    placeholder="Confirm new password"
                    value={newPasswordConfirm}
                    name="newPasswordConfirm"
                    onChange={handleChange}
                  />
                  <label htmlFor="account_confirm_password">
                    Confirm new password
                  </label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="my-3">
                  <button className="btn btn-primary">Save Changes</button>
                </div>
              </div>*/}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
