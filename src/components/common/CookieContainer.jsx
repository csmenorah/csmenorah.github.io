import { useState, useEffect } from "react";



export default function CookieContainer() {
  const [show, setShow] = useState(true);
  const [addCookie, setAddCookie] = useState("");
  const today = new Date();
  const expireDate = new Date(Number(today) + 604800000);

  const setCookie = async () => {
    document.cookie = `_BCVisit=1245836++623;expires=${expireDate.toUTCString()}; path=/`;
  };

  useEffect(() => {
    function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
    let cookieExist = getCookie("_BCVisit");
    if (cookieExist) {
      /* const cookieDecoder = document.cookie.toString();
      const cookieSplitter = cookieDecoder.split(';');
      console.log(cookieSplitter);
      for (let i=0; i <= cookieSplitter.length; i++) {
        let slicValue = cookieSplitter[i]
        // console.log(typeof slicValue);
        if (slicValue.indexOf("_landmarkVisit") >= 0 ) {
          setShow(false);
        }
      } */
      setShow(false);
    } else setShow(true);
  }, []);
  return (
    <>
      {show && (
        <div
          className="cookieConsentContainer"
          style={{ opacity: 1, display: "block" }}
        >
          <div className="cookieDesc">
            <p>
              In order to provide you a personalized shopping experience, our
              site uses cookies. By continuing to use this site, you are
              agreeing to our cookie policy.
            </p>
          </div>
          <div className="cookieButton">
            <a
              onClick={() => {
                setCookie();
                setShow(false);
              }}
            >
              Accept
            </a>
          </div>
        </div>
      )}
    </>
  );
}
