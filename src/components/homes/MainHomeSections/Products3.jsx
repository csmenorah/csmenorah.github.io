import { Link } from "react-router-dom";
import CountDownComponent from "@/components/common/CountDownComponent";

export default function Products3() {
  return (
    <section
      className="deal-timer position-relative d-flex align-items-end overflow-hidden"
      style={{ backgroundColor: "#ebebeb" }}
    >
      <div
        className="background-img"
        style={{ backgroundImage: "url(/assets/images/cars.jpg)" }}
      ></div>

      <div className="deal-timer-wrapper container position-relative">
        <div className="deal-timer__content pb-2 mb-3 pb-xl-5 mb-xl-3 mb-xxl-5">
          <p className="text_dash text-uppercase text-red fw-medium">
            Deal of the week
          </p>
          <h3 className="h1 text-uppercase" style={{ color: "white" }}>
            <strong>Cars</strong> Collection
          </h3>
          <Link
            to="/cars-&-moto-bike-shop"
            className="btn-link default-underline text-uppercase fw-medium mt-3"
            style={{ color: "white" }}
          >
            Shop Now
          </Link>
        </div>

        <div className="position-relative d-flex align-items-center text-center pt-xxl-4 js-countdown">
          {/*<CountDownComponent />*/}
        </div>
      </div>
      {/* <!-- /.deal-timer-wrapper --> */}
    </section>
  );
}
