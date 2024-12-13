import { Link } from "react-router-dom";
import { useContextElement } from "@/context/Context";



export default function Dashboard() {
  const { currentUserDetails } = useContextElement();
  return (
    <div className="col-lg-9">
      <div className="page-content my-account__dashboard">
        <p>
          Hello <strong>{currentUserDetails.displayName}</strong>
        </p>
        <p>
          From your account dashboard you can view your <strong><Link className="unerline-link" to="/account_orders">
            Recent Orders
          </Link></strong>
          , manage your <strong><Link className="unerline-link" to="/account_edit_address">
            Shipping and Billing Addresses
          </Link></strong>
          , and <strong><Link className="unerline-link" to="/account_edit">
            Edit your Password and Account Details.
          </Link></strong>
        </p>
      </div>
    </div>
  );
}
