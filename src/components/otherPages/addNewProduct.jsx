import { useState, useEffect } from "react";
import { newProdCart } from "@/data/products/newProduct";
import { newProdClothingSub } from "@/data/products/newProduct";
import { newProdElectronicsSub } from "@/data/products/newProduct";
import { newProdVehiclesSub } from "@/data/products/newProduct";

export default function AddNewProduct() {
  const [productTitle, setproductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrimeCart, setProductPrimeCart] = useState("");
  const [productSubCartCloth, setProductSubCartCloth] = useState("");
  const [productSubCartElectronics, setProductSubCartElectronics] =
    useState("");
  const [productSubCartVehicles, setProductSubCartVehicles] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  
  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === "productTitle") {
      setproductTitle(value);
    }
    else if (name === "productDescription") {
      setProductDescription(value);
    }
    else if (name === "productPrimeCart") {
      setProductPrimeCart(value);
    }
    else if (name === "productSubCartCloth") {
      setProductSubCartCloth(value);
    }
    else if (name === "productSubCartElectronics") {
      setProductSubCartElectronics(value);
    }
    else if (name === "productSubCartVehicles") {
      setProductSubCartVehicles(value);
    }
    else if (name === "productPrice") {
      setProductPrice(value);
    }
    else if (name === "productQuantity") {
      setProductQuantity(value);
    }
  }


  return (
    <div className="col-lg-9">
      <div className="page-content my-account__edit">
        <div className="my-account__edit-form">
          <form
            onSubmit={(e) => e.preventDefault()}
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
                    name="productPrimeCart"
                    value={productPrimeCart}
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
              {productPrimeCart === "clothes" && (
                <div className="col-md-12">
                  <div className="form-floating my-3">
                    <input
                      className="form-control"
                      list="product_sub_cart_cloth"
                      placeholder="Product Sub Cartegory"
                      required
                      name="productSubCartCloth"
                      value={productSubCartCloth}
                      onChange={handleChange}
                    />
                    <datalist id="product_sub_cart_cloth">
                      {newProdClothingSub().map((val, index) => (
                        <option value={val} key={index} />
                      ))}
                    </datalist>
                    <label htmlFor="product_sub_cart_cloth">
                      Product Clothing Cartegory
                    </label>
                  </div>
                </div>
              )}
              {productPrimeCart === "electronics" && (
                <div className="col-md-12">
                  <div className="form-floating my-3">
                    <input
                      className="form-control"
                      list="product_sub_cart_elect"
                      placeholder="Product Sub Cartegory"
                      required
                      name="productSubCartElectronics"
                      value={productSubCartElectronics}
                      onChange={handleChange}
                    />
                    <datalist id="product_sub_cart_elect">
                      {newProdElectronicsSub().map((val, index) => (
                        <option value={val} key={index} />
                      ))}
                    </datalist>
                    <label htmlFor="product_sub_cart_elect">
                      Product Electronic Cartegory
                    </label>
                  </div>
                </div>
              )}
              {productPrimeCart === "vehicles" && (
                <div className="col-md-12">
                  <div className="form-floating my-3">
                    <input
                      className="form-control"
                      list="product_sub_cart"
                      placeholder="Product Sub Cartegory"
                      required
                      name="productSubCartVehicles"
                      value={productSubCartVehicles}
                      onChange={handleChange}
                    />
                    <datalist id="product_sub_cart">
                      {newProdVehiclesSub().map((val, index) => (
                        <option value={val} key={index} />
                      ))}
                    </datalist>
                    <label htmlFor="product_sub_cart">
                      Product Vehicle Cartegory
                    </label>
                  </div>
                </div>
              )}
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    className="form-control"
                    id="product_price"
                    placeholder="Product Price in USD"
                    required
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
                    required
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
                    type="file"
                    className="form-control"
                    id="image1"
                    placeholder="Upload Images"
                    required
                    name="image1"
                    value=""
                    onChange={handleChange}
                  />
                  <label htmlFor="product_quantity">Image One</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="my-3">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Upload Product"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
