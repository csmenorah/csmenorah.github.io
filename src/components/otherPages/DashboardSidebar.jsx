import { dashboardMenuItems } from "@/data/menu";
import { Link, useLocation } from "react-router-dom";
import { userSignOut } from "../../../firebase/firebaseUtils";
import { useNavigate } from "react-router-dom";



export default function DashboardSidebar() {
  const { pathname } = useLocation();
  let reRoute = useNavigate();
  return (
    <div className="col-lg-3">
      <ul className="account-nav">
        {dashboardMenuItems.map((elm, i) => (
          <li key={i}>
            <Link
              to={elm.href}
              className={`menu-link menu-link_us-s ${
                pathname == elm.href ? "menu-link_active" : ""
              } `}
            >
              {elm.title}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to={'/'}
            onClick={() => {
              userSignOut(reRoute("/")).then(() => location.reload());
            }}
            className={`menu-link menu-link_us-s`}
          >
            LogOut
          </Link>
        </li>
      </ul>
    </div>
  );
}
