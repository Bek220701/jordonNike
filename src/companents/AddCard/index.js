import React, { useEffect, useState } from "react";
import { addProduct } from "../../redux/AddCardSlise";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCard = () => {
  const [productImg, setProductImg] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");

  const dispatch = useDispatch();
  const { product } = useSelector((s) => s.addCard);
  console.log(product);
  const error = () => {
    toast.error("Заполните пустые ячейки!!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const success = () =>{
    toast.success('Продукт успешно добавлен!!!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
  }

  const createProduct = () => {
    if (
      productImg.trim() === "" ||
      productName.trim() === "" ||
      productPrice.trim() === ""
    ) {
      error();
    } else {
      let newProduct = {
        id: product.length ? product[product.length - 1].id + 1 : 1,
        url: productImg,
        title: productName,
        price: productPrice,
        category:productCategory,
      };
      setProductImg("");
      setProductName("");
      setProductPrice("");
      success()
      return dispatch(addProduct(newProduct));
    }
  };
 
  return (
    <div id="addCard">
      <div className="container">
        <div className="addCard">
          <input
            value={productImg}
            onChange={(e) => setProductImg(e.target.value)}
            type="text"
            placeholder="Product URL(...)"
          />
          <input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            type="text"
            placeholder="Product NAME(...)"
          />
          <div className="addCard--inp">
          <input
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            type="text"
            placeholder="Product PRICE(...)"
          />
          <select onChange={(e)=>setProductCategory(e.target.value)}>
            <option value="">Category</option>
            <option value="man">Man</option>
            <option value="woman">Woman</option>
            <option value="kids">Kids</option>
          </select>
          </div>
          <button onClick={() => createProduct()}>ADD PRODUCT</button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default AddCard;
