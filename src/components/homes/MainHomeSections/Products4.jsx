/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

export default function Products4() {
  return (
    <section className="grid-banner container mb-3">
      <div className="row">
        <div className="col-md-6">
          <div className="grid-banner__item grid-banner__item_rect position-relative mb-3">
            <div
              className="background-img"
              style={{
                backgroundImage: "url(/assets/images/sports-wears.png)",
              }}
            ></div>
            <div className="content_abs content_bottom content_left content_bottom-lg content_left-lg">
              <h6 className="text-uppercase text-white fw-medium mb-3">
                {/*Starting At $19*/ ""}
              </h6>
              <h3 className="text-white mb-3">Sporting Gears</h3>
              <Link
                to="/sports-gear-shop"
                className="btn-link default-underline text-uppercase text-white fw-medium"
              >
                Shop Now
              </Link>
            </div>
            {/* <!-- /.content_abs content_bottom content_left content_bottom-md content_left-md --> */}
          </div>
        </div>
        <div className="col-md-6">
          <div className="grid-banner__item grid-banner__item_rect position-relative mb-3">
            <div
              className="background-img"
              style={{
                backgroundImage: "url(/assets/images/home-funiture.jpg)",
              }}
            ></div>
            <div className="content_abs content_bottom content_left content_bottom-lg content_left-lg">
              <h6 className="text-uppercase text-white fw-medium mb-3">
                {/*Starting At $19*/ ""}
              </h6>
              <h3 className="text-white mb-3">House Whole Funitures</h3>
              <Link
                to="/house-whole-funitures-shop"
                className="btn-link default-underline text-uppercase text-white fw-medium"
              >
                Shop Now
              </Link>
            </div>
            {/* <!-- /.content_abs content_bottom content_left content_bottom-md content_left-md --> */}
          </div>
        </div>
      </div>
      {/* <!-- /.row --> */}
    </section>
  );
}
