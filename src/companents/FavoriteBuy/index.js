import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo-heder.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TiDeleteOutline } from "react-icons/ti";
import loading from "../../assets/img/load.svg";
import { FcOk } from "react-icons/fc";

const FavoriteBuy = () => {
  const [productName, setProductName] = useState("");
  const [productAdress, setProductAdress] = useState("");
  const [productPhone, setProductPhone] = useState("");
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState(true);
  const [loaderModal, setLoaderModal] = useState(false);
  const [succsessModal, setSuccsessModal] = useState(false);
  //-1002006339503
  const error = () => {
    toast.error("Заполните  ячейки!!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const resetState = () => {
    setModalText(true);
    setLoaderModal(false);
    setSuccsessModal(false);
  };

  function formSubmitTelegram() {
    const my_id = `-1002006339503`;
    const token = `6825873457:AAF7vLSg3NC9iM5MHxUmFLsVqpWxyOo3Mic`;
    const url_api = `https://api.telegram.org/bot${token}/sendMessage`;

    const newUser = {
      chat_id: my_id,
      parse_model: "html",
      text: `Новый заказ: 
             Имя:${productName}
             Адресс:${productAdress}
             Номер телефона:${productPhone}`,
    };
    setProductName("");
    setProductAdress("");
    setProductPhone("");
    setModalText(false);
    setLoaderModal(true);
    setTimeout(() => {
      setLoaderModal(false);
      setSuccsessModal(true);
      axios.post(url_api, newUser);
    }, 2000);
  }
  useEffect(() => {
    resetState();
  }, [modal]);
  
  const openModal = () => {
    if (
      productName.trim() === "" ||
      productAdress.trim() === "" ||
      productPhone.trim() === ""
    ) {
      return error();
    } else {
      setModal(!modal);
    }
  };
  return (
    <div id="favBuy">
      <div className="container">
        <div className="favBuy">
          <img src={logo} alt="img" />
          <h1>Оформление заказа: </h1>
          <div className="favBuy--text">
            <h1>
              Укажи адрес электронной почты, <br /> чтобы войти или <br />{" "}
              зарегистрироваться.
            </h1>
            <h2>
              Киргизия
              <select>
                <option value="">Поменять</option>
              </select>
            </h2>
            <div className="input">
              <input
                value={productName}
                type="text"
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Ф.И.О"
              />
              <input
                value={productAdress}
                type="text"
                onChange={(e) => setProductAdress(e.target.value)}
                placeholder="АДРЕСС..."
              />
              <input
                value={productPhone}
                type="text"
                onChange={(e) => setProductPhone(e.target.value)}
                placeholder="ТЕЛЕФОН НОМЕР..."
              />
            </div>
            <h3>
              Продолжая, я принимаю{" "}
              <span>
                Политику <br /> конфиденциальности и Условия использования{" "}
                <br />
              </span>{" "}
              Nike.
            </h3>
            <h3>Ваш заказ будет отправлен в телеграмм...</h3>
            <button onClick={() => openModal()}>Продолжить</button>
          </div>
          {modal ? (
            <>
              <div className="favBuy--modal">
                <a onClick={() => setModal(false)}>
                  <TiDeleteOutline />
                </a>
                {modalText ? (
                  <>
                    <h2>Проверте данные</h2>
                    {productName ? (
                      <h3>
                        {productName},{productAdress},{productPhone}
                      </h3>
                    ) : null}

                    <button onClick={() => formSubmitTelegram()}>
                      Подвердить
                    </button>
                  </>
                ) : null}
                {loaderModal ? (
                  <img src={loading} width={150} alt="img" />
                ) : null}
                {succsessModal ? (
                  <div className="favBuy--modal__success">
                    <h2 className="">
                      <FcOk />
                    </h2>
                    <h3>Отпровлено</h3>
                  </div>
                ) : null}
              </div>
              <div
                className="favBuy--blur"
                onClick={() => setModal(false)}
              ></div>
            </>
          ) : null}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FavoriteBuy;
