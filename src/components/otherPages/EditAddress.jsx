import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../../../firebase/firebaseUtils";
import { useContextElement } from "@/context/Context";

export default function EditAddress() {
  const { currentUserDetails } = useContextElement();
  
  let billingAddress = "";
  useEffect(() => {
    const qBilling = query(
      collection(db, "users"),
      where("email", "==", currentUserDetails.email)
    );
    const querySnapshotBilling = getDocs(qBilling);
    querySnapshotBilling.then((result) => {
      result.forEach((doc) => {
        let newDoc = { id: doc.id, ...doc.data() };
        // doc.data() is never undefined for query doc snapshots
        billingAddress = newDoc;
        console.log(doc.id, " => ", doc.data());
        console.log(newDoc);
      });
    });
  }, []);


  return (
    <div className="col-lg-9">
      <div className="page-content my-account__address">
        <p className="notice">
          The following addresses will be used on the checkout page by default.
        </p>
        <div className="my-account__address-list">
          <div className="my-account__address-item">
            <div className="my-account__address-item__title">
              <h5>Billing Address</h5>
              <a href="/shop_checkout">Edit</a>
            </div>
            <div className="my-account__address-item__detail">
              <p>{`${billingAddress.firstName} ${billingAddress.lastName}`}</p>
              <p>{billingAddress.company}</p>
              <p>{billingAddress.street}</p>
              <p>{billingAddress.city}</p>
              <p>{billingAddress.zip}</p>
              <p>{billingAddress.state}</p>
              <br />
              <p>{billingAddress.email}</p>
              <p>{billingAddress.phone}</p>
            </div>
          </div>
          <div className="my-account__address-item">
            <div className="my-account__address-item__title">
              <h5>Shipping Address</h5>
              <a href="/account_edit">Edit</a>
            </div>
            <div className="my-account__address-item__detail">
              <p>{`${currentUserDetails.firstName} ${currentUserDetails.lastName}`}</p>
              <p>{currentUserDetails.streetOne}</p>
              <p>{currentUserDetails.streetTwo}</p>
              <p>{currentUserDetails.city}</p>
              <p>{currentUserDetails.zip}</p>
              <p>{currentUserDetails.state}</p>
              <p>{currentUserDetails.country}</p>
              <br />
              <p>{currentUserDetails.email}</p>
              <p>{currentUserDetails.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
