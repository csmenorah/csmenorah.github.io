import { Link } from "react-router-dom";

export default function Products1() {
  return (
    <section
      className="collections-grid collections-grid_masonry"
      id="section-collections-grid_masonry"
    >
      <div className="container h-md-100">
        <div className="row h-md-100">
          <div className="col-lg-6 h-md-100">
            <div className="collection-grid__item position-relative h-md-100">
              <div
                className="background-img"
                style={{
                  backgroundImage: "url(/assets/images/collection_grid_1.jpg)",
                }}
              ></div>
              <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                <p className="text-uppercase mb-1">Hot List</p>
                <h3 className="text-uppercase">
                  <strong>Women</strong> Collection
                </h3>
                <Link
                  to="/shop-1"
                  className="btn-link default-underline text-uppercase fw-medium"
                >
                  Shop Now
                </Link>
              </div>
              {/* <!-- /.content_abs content_bottom content_left content_bottom-md content_left-md --> */}
            </div>
          </div>
          {/* <!-- /.col-md-6 --> */}

          <div className="col-lg-6 d-flex flex-column">
            <div className="collection-grid__item position-relative flex-grow-1 mb-lg-4">
              <div
                className="background-img"
                style={{
                  backgroundImage:
                    "url(/assets/images/men-collection-home-img.jpg)",
                }}
              ></div>
              <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                <p className="text-uppercase mb-1">Hot List</p>
                <h3 className="text-uppercase">
                  <strong>Men</strong> Collection
                </h3>
                <Link
                  to="/shop-1"
                  className="btn-link default-underline text-uppercase fw-medium"
                >
                  Shop Now
                </Link>
              </div>
              {/* <!-- /.content_abs content_bottom content_left content_bottom-md content_left-md --> */}
            </div>
            <div className="position-relative flex-grow-1 mt-lg-1">
              <div className="row h-md-100">
                <div className="col-md-6 h-md-100">
                  <div className="collection-grid__item h-md-100 position-relative">
                    <div
                      className="background-img"
                      style={{
                        backgroundImage:
                          "url(/assets/images/kids-collection.jpg)",
                      }}
                    ></div>
                    <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                      <p className="text-uppercase mb-1">Hot List</p>
                      <h3 className="text-uppercase">
                        <strong>Kids</strong>
                      </h3>
                      <h3 className="text-uppercase">
                        Collection
                      </h3>
                      <Link
                        to="/shop-1"
                        className="btn-link default-underline text-uppercase fw-medium"
                      >
                        Shop Now
                      </Link>
                    </div>
                    {/* <!-- /.content_abs content_bottom content_left content_bottom-md content_left-md --> */}
                  </div>
                  {/* <!-- /.collection-grid__item --> */}
                </div>
                <div className="col-md-6 h-md-100">
                  <div className="collection-grid__item h-md-100 position-relative">
                    <div
                      className="background-img"
                      style={{
                        backgroundImage:
                          "url(/assets/images/africa-collection.jpg)",
                      }}
                    ></div>
                    <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                      <p className="text-uppercase mb-1">Hot List</p>
                      <h3 className="text-uppercase">
                        <strong>African</strong>
                      </h3>
                      <h3 className="text-uppercase"> Collection</h3>
                      <Link
                        to="/shop-1"
                        className="btn-link default-underline text-uppercase fw-medium"
                      >
                        Shop Now
                      </Link>
                    </div>
                    {/* <!-- /.content_abs content_bottom content_left content_bottom-md content_left-md --> */}
                  </div>
                  {/* <!-- /.collection-grid__item --> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.col-md-6 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  );
}
