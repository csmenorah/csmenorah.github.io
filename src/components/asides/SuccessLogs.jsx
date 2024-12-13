import { closeModalSuccessLogs } from "@/utlis/aside";
import { useEffect } from "react";

export default function SuccessLogs({title, success}) {
  useEffect(() => {
    const pageOverlay = document.getElementById("pageOverlay");

    pageOverlay.addEventListener("click", closeModalSuccessLogs);

    return () => {
      pageOverlay.removeEventListener("click", closeModalSuccessLogs);
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
            <h3 className="text-uppercase fs-6 mb-0">{title}</h3>
            <button
              onClick={() => closeModalSuccessLogs()}
              className="btn-close-lg js-close-aside ms-auto"
            />
          </div>
          <ul className="aside-content">
            <li style={{ color: "#5cb85c" }}>{success}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
