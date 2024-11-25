import { closeModalErrorLogs } from "@/utlis/aside";
import { useEffect } from "react";

export default function ErrorLogs({title, errors}) {
  useEffect(() => {
    const pageOverlay = document.getElementById("pageOverlay");

    pageOverlay.addEventListener("click", closeModalErrorLogs);

    return () => {
      pageOverlay.removeEventListener("click", closeModalErrorLogs);
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
              onClick={() => closeModalErrorLogs()}
              className="btn-close-lg js-close-aside ms-auto"
            />
          </div>
          <ul className="aside-content">
            <li style={{color: 'red'}}>{errors}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
