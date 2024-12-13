import { useEffect } from "react";
import {
  collection,
  getDocs,
  query,
  where
} from "firebase/firestore";
import { db } from "../../../firebase/firebaseUtils";
import { useContextElement } from "@/context/Context";


export default function AccountOrders() {
  const {currentUserDetails} = useContextElement()
  let orders = [''];
  useEffect(() => {
    const q = query(collection(db, "orders"), where('userID', '==', currentUserDetails.email));
    const querySnapshot = getDocs(q);
    querySnapshot.then((result) => {
      result.forEach((doc) => {
        let newDoc = { id: doc.id, ...doc.data() };
        // doc.data() is never undefined for query doc snapshots
        orders.push(newDoc);
        console.log(doc.id, " => ", doc.data());
        console.log(orders);
      });
    });
  }, []);

  return (
    <div className="col-lg-9">
      <div className="page-content my-account__orders-list">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              {
                //<th>Actions</th>
              }
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order,i) => {
                <tr key={i}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.status}</td>
                  <td>{order.totalPrice}</td>
                  {//<td>
                    //<button className="btn btn-primary">VIEW</button>
                  //</td>
                  }
                </tr>;
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
