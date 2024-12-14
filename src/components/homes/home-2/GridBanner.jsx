import { Link } from "react-router-dom";

export default function GridBanner() {
  return (
    <section className="grid-banner container mb-3" id="section-grid-banner">
      <div className="row">
        <div className="col-lg-4">
          <div className="grid-banner__item position-relative mb-3">
            <img
              loading="lazy"
              className="w-100 h-auto"
              src="https://cdn.shopify.com/s/files/1/0336/4064/4740/files/3438d83064778f8d5cd09e9f9e4f8d06_1600x.jpg?v=1725365939"
              width="450"
              height="450"
              alt="image"
            />
            <div
              className="content_abs content_center text-center"
              style={{ color: "white" }}
            >
              <h3
                className="text-uppercase fw-bold mb-1"
                style={{ color: "white" }}
              >
                New
              </h3>
              <h3
                className="text-uppercase fw-bold mb-1"
                style={{ color: "white" }}
              >
                Horizons
              </h3>
              <Link
                to="/men-clothings-shop"
                className="btn-link default-underline text-uppercase fw-medium"
                style={{ color: "white" }}
              >
                Shop Now
              </Link>
            </div>
            {/* <!-- /.content_abs .content_center --> */}
          </div>
        </div>
        {/* <!-- /.col-lg-4 --> */}
        <div className="col-lg-4">
          <div className="grid-banner__item position-relative mb-3">
            <img
              loading="lazy"
              className="w-100 h-auto"
              src="https://ae-pic-a1.aliexpress-media.com/kf/Sc4e41f5347b243658ff8deec1a8fec09F/New-Stylish-Short-Sleeve-Casual-Printing-Cotton-Shirt-Men-Brand-Fashion-Comfortable-Top-Clothes-Camisa-Masculina.jpg_640x640Q90.jpg_.webp"
              width="450"
              height="450"
              alt="image"
            />
            <div
              className="content_abs content_center text-center"
              style={{ color: "white" }}
            >
              <h3 className="text-uppercase fw-bold mb-1">Summer</h3>
              <h3 className="text-uppercase fw-bold mb-1">Hats</h3>
              <Link
                to="/men-clothings-shop"
                className="btn-link default-underline text-uppercase fw-medium"
              >
                Shop Now
              </Link>
            </div>
            {/* <!-- /.content_abs .content_center --> */}
          </div>
        </div>
        {/* <!-- /.col-lg-4 --> */}
        <div className="col-lg-4">
          <div className="grid-banner__item position-relative mb-3">
            <img
              loading="lazy"
              className="w-100 h-auto"
              src="https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2023/09/hockerty_spanish_man_spanish_style_linen_shirt_tailored_shorts__7d3f1677_aafe_4670_b641_e50b33b89334.jpg"
              width="450"
              height="450"
              alt="image"
            />
            <div className="content_abs content_center text-center">
              <p className="text-white mb-1">Free delivery for Uomo members</p>
              <h3 className="text-uppercase fw-bold text-white mb-1">
                Promotions Up
              </h3>
              <h3 className="text-uppercase fw-bold text-white mb-1">
                To 10% Off
              </h3>
              <Link
                to="/men-clothings-shop"
                className="btn-link default-underline text-uppercase text-white fw-medium"
              >
                See More
              </Link>
            </div>
            {/* <!-- /.content_abs .content_center --> */}
          </div>
        </div>
        {/* <!-- /.col-lg-4 --> */}
      </div>
      {/* <!-- /.row --> */}
    </section>
  );
}
