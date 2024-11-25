import { useState, useEffect } from "react";
import { newProdCart } from "@/data/products/newProduct";
import { newProdClothingSub } from "@/data/products/newProduct";
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebaseUtils";
import ConfirmMessage from "../modals/ConfirmMessage";
import ErrorLogs from "../asides/ErrorLogs";
import { openModalErrorLogs, closeModalErrorLogs } from "@/utlis/aside";
import { useNavigate } from "react-router-dom";

export default function AddNewProduct() {
  const [productTitle, setproductTitle] = useState("");
  const [productCartegory, setproductCartegory] = useState("");
  const [productUserCartegory, setproductUserCartegory] = useState("");
  const [productType, setProductType] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [color1, setColor1] = useState(null);
  const [color2, setColor2] = useState(null);
  const [color3, setColor3] = useState(null);
  const [color4, setColor4] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);
  const [image6, setImage6] = useState(null);
  const [whyChoseProduct1, setWhyChoseProduct1] = useState("");
  const [whyChoseProduct2, setWhyChoseProduct2] = useState("");
  const [whyChoseProduct3, setWhyChoseProduct3] = useState("");
  const [whyChoseProduct4, setWhyChoseProduct4] = useState("");
  const [whyChoseProduct5, setWhyChoseProduct5] = useState("");
  const [productSizeXL, setProductSizeXL] = useState(false);
  const [productSizeXS, setProductSizeXS] = useState(false);
  const [productSizeL, setProductSizeL] = useState(false);
  const [productSizeM, setProductSizeM] = useState(false);
  const [productSizeS, setProductSizeS] = useState(false);
  const whyChoseProduct = [];
  const productColors = [];
  const productSizes = [];
  const productImages = [];
  const [showConfirm, setShowConfirm] = useState(false);
  const [productTitleExist, setProductTitleExist] = useState("");
  const reRoute = useNavigate();

  const handleChangeImages = (e) => {
    const file = e.target.file[0];
    const name = e.target.name;
    if (name == "image1") {
      setImage1(file);
    } else if (name == "image2") {
      setImage2(file);
    } else if (name == "image3") {
      setImage3(file);
    } else if (name == "image4") {
      setImage4(file);
    } else if (name == "image5") {
      setImage5(file);
    } else if (name == "image6") {
      setImage6(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "productTitle") {
      setproductTitle(value);
    } else if (name === "productDescription") {
      setProductDescription(value);
    } else if (name === "productCartegory") {
      setproductCartegory(value);
    } else if (name === "productUserCartegory") {
      setproductUserCartegory(value);
    } else if (name === "productPrice") {
      setProductPrice(value);
    } else if (name === "productQuantity") {
      setProductQuantity(value);
    } else if (name === "whyChoseProduct1") {
      setWhyChoseProduct1(value);
    } else if (name === "whyChoseProduct2") {
      setWhyChoseProduct2(value);
    } else if (name === "whyChoseProduct3") {
      setWhyChoseProduct3(value);
    } else if (name === "whyChoseProduct4") {
      setWhyChoseProduct4(value);
    } else if (name === "whyChoseProduct5") {
      setWhyChoseProduct5(value);
    } else if (name === "productType") {
      setProductType(value);
    }
  };

  const addProducts = async () => {
    const data = {
      productTitle,
      productCartegory,
      productType,
      productPrice,
      productQuantity,
      productRating: 0,
      productDescription,
      ProductReviews: [],
    };
    if (productSizeXL === true) {
      productSizes.push("XL");
    }
    if (productSizeXS === true) {
      productSizes.push("XS");
    }
    if (productSizeL === true) {
      productSizes.push("L");
    }
    if (productSizeM === true) {
      productSizes.push("M");
    }
    if (productSizeS === true) {
      productSizes.push("S");
    }
    if (whyChoseProduct1 !== "") {
      whyChoseProduct.push(whyChoseProduct1);
    }
    if (whyChoseProduct2 !== "") {
      whyChoseProduct.push(whyChoseProduct2);
    }
    if (whyChoseProduct3 !== "") {
      whyChoseProduct.push(whyChoseProduct3);
    }
    if (whyChoseProduct4 !== "") {
      whyChoseProduct.push(whyChoseProduct4);
    }
    if (whyChoseProduct5 !== "") {
      whyChoseProduct.push(whyChoseProduct5);
    }
    if (color1.length > 0) {
      productColors.push(color1);
    }
    if (color2.length > 0) {
      productColors.push(color2);
    }
    if (color3.length > 0) {
      productColors.push(color3);
    }
    if (color4.length > 0) {
      productColors.push(color4);
    }

    if (productColors.length > 0) {
      data.productColors = productColors;
    }
    if (whyChoseProduct.length > 0) {
      data.whyChoseProduct = whyChoseProduct;
    }
    if (productSizes.length > 0) {
      data.productSizes = productSizes;
    }
    return data;
  };
  const handleSubmit = async () => {
    addProducts().then(async (data) => {
      const productRef = doc(db, "products", productTitle);
      await setDoc(productRef, { ...data });
    });
  };
  const submit = async () => {
    const docRef = doc(db, "products", productTitle);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setProductTitleExist(
        "Product with title already Exist, Do you want to update product"
      );
      openModalErrorLogs();
    } else {
      handleSubmit()
        .then(() => {
          resetForm();
        })
        .then(() => {
          setShowConfirm(true);
        });
    }
  };

  const resetForm = () => {
    setproductTitle("");
    setproductCartegory("");
    setproductUserCartegory("");
    setProductType("");
    setProductQuantity("");
    setProductDescription("");
    setWhyChoseProduct1("");
    setWhyChoseProduct2("");
    setWhyChoseProduct3("");
    setWhyChoseProduct4("");
    setWhyChoseProduct5("");
    setProductPrice("");
    setProductQuantity("");
    setColor1("");
    setColor2("");
    setColor3("");
    setColor4("");
    setProductSizeS(false);
    setProductSizeXL(false);
    setProductSizeXS(false);
    setProductSizeL(false);
    setProductSizeM(false);
  };

  useEffect(() => {
    const pageOverlay = document.getElementById("pageOverlay");

    pageOverlay.addEventListener("click", closeModalErrorLogs);

    return () => {
      pageOverlay.removeEventListener("click", closeModalErrorLogs);
    };
  }, []);
  return (
    <>
      {showConfirm && (
        <ConfirmMessage
          img={"/assets/images/upload-image.svg"}
          msg={"Visit the products page to make changes to product"}
          btnCall={() => location.reload("/add-new-product")}
        />
      )}
      <ErrorLogs title={"Product Upload Error"} errors={productTitleExist} />
      <div className="col-lg-9">
        <div className="page-content my-account__edit">
          <div className="my-account__edit-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}
              className="needs-validation"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="form-floating my-3">
                    <input
                      type="text"
                      className="form-control"
                      id="product_title"
                      placeholder="Product Title"
                      required
                      name="productTitle"
                      value={productTitle}
                      onChange={handleChange}
                    />
                    <label htmlFor="product_title">Product Title</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating my-3">
                    <input
                      className="form-control"
                      list="product_cart"
                      placeholder="Product Cartegory"
                      required
                      name="productCartegory"
                      value={productCartegory}
                      onChange={handleChange}
                    />
                    <datalist id="product_cart">
                      {newProdCart().map((val, index) => (
                        <option value={val} key={index} />
                      ))}
                    </datalist>
                    <label htmlFor="product_cart">Product Cartegory</label>
                  </div>
                </div>
                {productCartegory === "clothes" && (
                  <div className="col-md-12">
                    <p>Product Sizies</p>
                    <div
                      className="align-items-left mb-3 pb-2"
                      style={{ display: "inline-block", marginRight: "12px" }}
                    >
                      <div className="form-check mb-0">
                        <input
                          name="productSizeXL"
                          className="form-check-input form-check-input_fill"
                          type="checkbox"
                          id="productSizeXL"
                          checked={productSizeXL}
                          onChange={() => {
                            setProductSizeXL(!productSizeXL);
                          }}
                        />
                        <label
                          htmlFor="productSizeXL"
                          className="form-check-label text-secondary"
                        >
                          XL Size
                        </label>
                      </div>
                    </div>
                    <div
                      className="align-items-left mb-3 pb-2"
                      style={{ display: "inline-block", marginRight: "12px" }}
                    >
                      <div className="form-check mb-0">
                        <input
                          name="productSizeXS"
                          id="productSizeXS"
                          className="form-check-input form-check-input_fill"
                          type="checkbox"
                          checked={productSizeXS}
                          onChange={() => {
                            setProductSizeXS(!productSizeXS);
                          }}
                        />
                        <label
                          htmlFor="productSizeXS"
                          className="form-check-label text-secondary"
                        >
                          XS Size
                        </label>
                      </div>
                    </div>
                    <div
                      className="align-items-left mb-3 pb-2"
                      style={{ display: "inline-block", marginRight: "12px" }}
                    >
                      <div className="form-check mb-0">
                        <input
                          name="productSizeL"
                          id="productSizeL"
                          className="form-check-input form-check-input_fill"
                          type="checkbox"
                          checked={productSizeL}
                          onChange={() => {
                            setProductSizeL(!productSizeL);
                          }}
                        />
                        <label
                          htmlFor="productSizeL"
                          className="form-check-label text-secondary"
                        >
                          L Size
                        </label>
                      </div>
                    </div>
                    <div
                      className="align-items-left mb-3 pb-2"
                      style={{ display: "inline-block", marginRight: "12px" }}
                    >
                      <div className="form-check mb-0">
                        <input
                          name="productSizeM"
                          id="productSizeM"
                          className="form-check-input form-check-input_fill"
                          type="checkbox"
                          checked={productSizeM}
                          onChange={() => {
                            setProductSizeM(!productSizeM);
                          }}
                        />
                        <label
                          htmlFor="productSizeM"
                          className="form-check-label text-secondary"
                        >
                          M Size
                        </label>
                      </div>
                    </div>
                    <div
                      className="align-items-left mb-3 pb-2"
                      style={{ display: "inline-block", marginRight: "12px" }}
                    >
                      <div className="form-check mb-0">
                        <input
                          name="productSizeS"
                          id="productSizeS"
                          className="form-check-input form-check-input_fill"
                          type="checkbox"
                          checked={productSizeS}
                          onChange={() => {
                            setProductSizeS(!productSizeS);
                          }}
                        />
                        <label
                          htmlFor="productSizeS"
                          className="form-check-label text-secondary"
                        >
                          S Size
                        </label>
                      </div>
                    </div>
                  </div>
                )}
                <div className="col-md-12">
                  <p>Product Colors</p>
                  <div
                    className="align-items-left mb-3 pb-2"
                    style={{ display: "inline-block", marginRight: "12px" }}
                  >
                    <div className="form-check mb-0">
                      <input
                        name="color1"
                        className="form-check-input form-check-input_fill"
                        type="color"
                        //value={color1}
                        id="color1"
                        onChange={(e) => {
                          setColor1(e.target.value);
                        }}
                      />
                      <label htmlFor="color1" className="form-check-label ">
                        Color 1 {color1}
                      </label>
                    </div>
                  </div>
                  {color1 && (
                    <div
                      className="align-items-left mb-3 pb-2"
                      style={{ display: "inline-block", marginRight: "12px" }}
                    >
                      <div className="form-check mb-0">
                        <input
                          name="color2"
                          className="form-check-input form-check-input_fill"
                          type="color"
                          //value={color2}
                          id="color2"
                          onChange={(e) => {
                            setColor2(e.target.value);
                          }}
                        />
                        <label
                          htmlFor="color2"
                          className="form-check-label text-secondary"
                        >
                          Color 2 {color2}
                        </label>
                      </div>
                    </div>
                  )}
                  {color2 && (
                    <div
                      className="align-items-left mb-3 pb-2"
                      style={{ display: "inline-block", marginRight: "12px" }}
                    >
                      <div className="form-check mb-0">
                        <input
                          name="color3"
                          id="color3"
                          className="form-check-input form-check-input_fill"
                          type="color"
                          //value={color3}
                          onChange={(e) => {
                            setColor3(e.target.value);
                          }}
                        />
                        <label
                          htmlFor="color3"
                          className="form-check-label text-secondary"
                        >
                          color 3 {color3}
                        </label>
                      </div>
                    </div>
                  )}
                  {color3 && (
                    <div
                      className="align-items-left mb-3 pb-2"
                      style={{ display: "inline-block", marginRight: "12px" }}
                    >
                      <div className="form-check mb-0">
                        <input
                          name="color4"
                          id="color4"
                          className="form-check-input form-check-input_fill"
                          type="color"
                          //value={color4}
                          onChange={(e) => {
                            setColor4(e.target.value);
                          }}
                        />
                        <label
                          htmlFor="color4"
                          className="form-check-label text-secondary"
                        >
                          Color 4 {color4}
                        </label>
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-md-12">
                  <div className="form-floating my-3">
                    <input
                      className="form-control"
                      id="productType"
                      placeholder=""
                      name="productType"
                      value={productType}
                      onChange={handleChange}
                      type="text"
                    />
                    <label htmlFor="productType">Type of Product</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating my-3">
                    <input
                      className="form-control"
                      list="product_sub_cart_cloth"
                      placeholder="Product Sub Cartegory"
                      //required
                      name="productUserCartegory"
                      value={productUserCartegory}
                      onChange={handleChange}
                    />
                    <datalist id="product_sub_cart_cloth">
                      {newProdClothingSub().map((val, index) => (
                        <option value={val} key={index} />
                      ))}
                    </datalist>
                    <label htmlFor="product_sub_cart_cloth">
                      Users of Product
                    </label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating my-3">
                    <input
                      type="text"
                      className="form-control"
                      id="product_price"
                      placeholder="Product Price in USD"
                      //required
                      name="productPrice"
                      value={productPrice}
                      onChange={handleChange}
                    />
                    <label htmlFor="product_price">Product Price in USD</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating my-3">
                    <input
                      type="text"
                      className="form-control"
                      id="product_quantity"
                      placeholder="Product Quantity"
                      //required
                      name="productQuantity"
                      value={productQuantity}
                      onChange={handleChange}
                    />
                    <label htmlFor="product_quantity">Product Quantity</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating my-3">
                    <textarea
                      className="form-control"
                      id="product_description"
                      placeholder="Confirm new password"
                      name="productDescription"
                      value={productDescription}
                      onChange={handleChange}
                      rows="5"
                      cols="15"
                    />
                    <label htmlFor="account_confirm_password">
                      Product Description
                    </label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating my-3">
                    <input
                      type="text"
                      className="form-control"
                      id="whyChoseProduct1"
                      placeholder=""
                      name="whyChoseProduct1"
                      value={whyChoseProduct1}
                      onChange={(e) => {
                        setWhyChoseProduct1(e.target.value);
                      }}
                    />
                    <label htmlFor="whyChoseProduct1">
                      Why Choose Product 1
                    </label>
                  </div>
                </div>
                {whyChoseProduct1 && (
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        type="text"
                        className="form-control"
                        id="whyChoseProduct2"
                        placeholder=""
                        name="whyChoseProduct2"
                        value={whyChoseProduct2}
                        onChange={(e) => {
                          setWhyChoseProduct2(e.target.value);
                        }}
                      />
                      <label htmlFor="whyChoseProduct2">
                        Why Choose Product 2
                      </label>
                    </div>
                  </div>
                )}
                {whyChoseProduct2 && (
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        type="text"
                        className="form-control"
                        id="whyChoseProduct3"
                        placeholder=""
                        name="whyChoseProduct3"
                        value={whyChoseProduct3}
                        onChange={(e) => {
                          setWhyChoseProduct3(e.target.value);
                        }}
                      />
                      <label htmlFor="whyChoseProduct3">
                        Why Choose Product 3
                      </label>
                    </div>
                  </div>
                )}
                {whyChoseProduct3 && (
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        type="text"
                        className="form-control"
                        id="whyChoseProduct4"
                        placeholder=""
                        name="whyChoseProduct4"
                        value={whyChoseProduct4}
                        onChange={(e) => {
                          setWhyChoseProduct4(e.target.value);
                        }}
                      />
                      <label htmlFor="whyChoseProduct4">
                        Why Choose Product 4
                      </label>
                    </div>
                  </div>
                )}
                {whyChoseProduct4 && (
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        type="text"
                        className="form-control"
                        id="whyChoseProduct5"
                        placeholder=""
                        name="whyChoseProduct5"
                        value={whyChoseProduct5}
                        onChange={(e) => {
                          setWhyChoseProduct5(e.target.value);
                        }}
                      />
                      <label htmlFor="whyChoseProduct5">
                        Why Choose Product 5
                      </label>
                    </div>
                  </div>
                )}
                <div className="col-md-12">
                  <div className="form-floating my-3">
                    <input
                      type="file"
                      className="form-control"
                      id="image1"
                      placeholder="Upload Images"
                      name="image1"
                      // value={productImages[0]}
                      onChange={handleChangeImages}
                    />
                    <label htmlFor="image1">Product Image</label>
                  </div>
                </div>
                {image1 && (
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        type="file"
                        className="form-control"
                        id="image2"
                        placeholder="Upload Images"
                        name="image2"
                        // value={productImages[0]}
                        onChange={handleChangeImages}
                      />
                      <label htmlFor="image2">Product Image</label>
                    </div>
                  </div>
                )}
                {image2 && (
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        type="file"
                        className="form-control"
                        id="image3"
                        placeholder="Upload Images"
                        name="image3"
                        // value={productImages[0]}
                        onChange={handleChangeImages}
                      />
                      <label htmlFor="image3">Product Image</label>
                    </div>
                  </div>
                )}
                {image3 && (
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        type="file"
                        className="form-control"
                        id="image4"
                        placeholder="Upload Images"
                        name="image4"
                        // value={productImages[0]}
                        onChange={handleChangeImages}
                      />
                      <label htmlFor="image4">Product Image</label>
                    </div>
                  </div>
                )}
                {image4 && (
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        type="file"
                        className="form-control"
                        id="image5"
                        placeholder="Upload Images"
                        name="image5"
                        // value={productImages[0]}
                        onChange={handleChangeImages}
                      />
                      <label htmlFor="image5">Product Image</label>
                    </div>
                  </div>
                )}
                {image5 && (
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        type="file"
                        className="form-control"
                        id="image6"
                        placeholder="Upload Images"
                        name="image6"
                        // value={productImages[0]}
                        onChange={handleChangeImages}
                      />
                      <label htmlFor="image1">Product Image</label>
                    </div>
                  </div>
                )}
                <div className="col-md-12" style={{ display: "flex" }}>
                  <div className="my-3" style={{ margin: "12px" }}>
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Upload Product"
                    />
                  </div>
                  <div className="my-3" style={{ margin: "12px" }}>
                    <input
                      type="button"
                      className="btn btn-primary"
                      value="Reset Form"
                      onClick={resetForm}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
