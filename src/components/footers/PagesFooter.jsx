import { Link } from "react-router-dom";
import { currencyOptions, socialLinks } from "@/data/footer";
import { useContextElement } from "@/context/Context";

export default function PagesFooter() {
  const { currentUserDetails } = useContextElement();
  return (
    <footer className="footer footer_type_1 dark theme-bg-color">
      <div className="footer-top container">
        <div className="block-newsletter mb-4">
          <h3 className="block__title text-uppercase text-white fs-30 fw-semi-bold mb-2">
            Subscribe to our newsletter
          </h3>
          <p>
            Be the first to get the latest news from <b>Brown Commerce</b> in
            regards to <b>Promotions</b>, <b>New Sales</b> and <b>much more!</b>
          </p>

          <div className="mb-2 pb-1"></div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="block-newsletter__form"
          >
            <input
              className="form-control border-radius-8"
              type="email"
              name="email"
              placeholder="Your email address"
            />
            <button
              className="btn btn-secondary fw-semi-bold fs-base theme-bg-color-secondary theme-color border-0 border-radius-8"
              type="submit"
            >
              JOIN
            </button>
          </form>
        </div>

        <div className="mb-3 pb-2"></div>
        <ul className="sub-menu__list list-unstyled d-flex gap-4 align-items-center justify-content-center">
          <li className="sub-menu__item">
            <Link to="/terms" className="menu-link menu-link_us-s">
              Returns Policy
            </Link>
          </li>
          {currentUserDetails.displayName && (
            <>
              <li className="sub-menu__item">
                <Link
                  to="/shop_order_tracking"
                  className="menu-link menu-link_us-s"
                >
                  Track Your Order
                </Link>
              </li>
              <li className="sub-menu__item">
                <Link to="/about" className="menu-link menu-link_us-s">
                  Shipping & Delivery
                </Link>
              </li>
            </>
          )}
        </ul>

        <ul className="social-links list-unstyled d-flex flex-wrap mb-0 align-items-center justify-content-center">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="footer__social-link d-block">
                <svg
                  className={link.className}
                  width={link.width}
                  height={link.height}
                  viewBox={link.viewBox}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {typeof link.icon === "string" ? (
                    <use href={link.icon} />
                  ) : (
                    link.icon
                  )}
                </svg>
              </a>
            </li>
          ))}
        </ul>

        <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-4"></div>
      </div>

      <div className="footer-bottom">
        <div className="d-block d-md-flex align-items-center container">
          <span className="footer-copyright me-auto">
            ©{new Date().getFullYear()} Brown Commerce
          </span>
          <div className="footer-settings d-block d-md-flex align-items-center">
            {/* <div className="d-flex align-items-center">
              <label
                htmlFor="footerSettingsLanguage"
                className="me-2 text-white"
              >
                Language
              </label>
              <select
                id="footerSettingsLanguage"
                className="form-select form-select-sm bg-transparent border-0"
                aria-label="Default select example"
                name="store-language"
              >
                {languageOptions.map((option, index) => (
                  <option
                    key={index}
                    className="footer-select__option"
                    value={option.value}
                  >
                    {option.text}
                  </option>
                ))}
              </select>
            </div> */}

            <div className="d-flex align-items-center">
              <label
                htmlFor="footerSettingsCurrency"
                className="ms-md-3 me-2 text-white"
              >
                Currency
              </label>
              <select
                id="footerSettingsCurrency"
                className="form-select form-select-sm bg-transparent border-0"
                aria-label="Default select example"
                name="store-language"
              >
                {currencyOptions.map((option, index) => (
                  <option
                    key={index}
                    className="footer-select__option"
                    value={option.value}
                  >
                    {option.text}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* <!-- /.footer-settings --> */}
        </div>
        {/* <!-- /.d-flex --> */}
      </div>
      {/* <!-- /.footer-bottom container --> */}
    </footer>
  );
}
