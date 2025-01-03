/* eslint-disable no-undef */
import { useEffect, useRef, useContext } from "react";
import { NewsletterContext } from "@/App";

export default function NewsLetter() {
  const modalElement = useRef(null);
  const { newsLetterDisplayFunc } =
    useContext(NewsletterContext);

  useEffect(() => {
    import("bootstrap").then((bootstrap) => {
      const myModal = new bootstrap.Modal(
        document.getElementById("newsletterPopup"),
        {
          keyboard: false,
        }
      );

      myModal.show();
      modalElement.current.addEventListener("hidden.bs.modal", () => {
        myModal.hide();
        newsLetterDisplayFunc(false);
      });
    });
  }, []);

  return (
    <div
      className="modal fade"
      id="newsletterPopup"
      ref={modalElement}
      tabIndex="-1"
      data-bs-backdrop={"true"}
      aria-hidden="true"
    >
      <div className="modal-dialog newsletter-popup modal-dialog-centered">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => newsLetterDisplayFunc(false)}
          ></button>
          <div className="row p-0 m-0">
            <div className="col-md-6 p-0 d-none d-md-block">
              <div className="newsletter-popup__bg h-100 w-100">
                <img
                  width={450}
                  height={550}
                  style={{ height: "fit-content" }}
                  loading="lazy"
                  src="/assets/images/newsletter-popup1.jpg"
                  className="h-100 w-100 object-fit-cover d-block"
                  alt="image"
                />
              </div>
            </div>
            <div className="col-md-6 p-0 d-flex align-items-center">
              <div className="block-newsletter w-100">
                <h3 className="block__title">Sign Up to Our Newsletter</h3>
                <p>
                  Be the first to get the latest news from <b>Brown Commerce</b>{" "}
                  in regards to <b>Promotions</b>, <b>New Sales</b> and <b>much more!</b>
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="footer-newsletter__form position-relative bg-body"
                >
                  <input
                    className="form-control border-2"
                    type="email"
                    name="email"
                    placeholder="Your email address"
                  />
                  <input
                    className="btn-link fw-medium bg-transparent position-absolute top-0 end-0 h-100"
                    type="submit"
                    defaultValue="JOIN"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
