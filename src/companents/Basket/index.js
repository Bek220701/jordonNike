import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { FaStar } from "react-icons/fa";
import { deleteBas, quanMinus, quanPlus } from "../../redux/AddToBasketSlice";
import { RiDeleteBin5Fill } from "react-icons/ri";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";

const Basket = ({ el }) => {
  const nav = useNavigate()
  const dispatch = useDispatch();
  const { basket } = useSelector((s) => s.addBasket);
  let Total = basket.reduce((acc, el) => {
    return acc + +el.price * el.quantity;
  }, 0);
  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          {basket.map((el) => (
            <div className="card">
              <div className="card--img">
                <Zoom>
                  <img src={el.url} alt="img" />
                </Zoom>
              </div>
              <div className="card--text">
                <h1 onClick={()=>nav(`/details/${el.id}`)}>{el.title}</h1>
                <div className="card--block__star">
                  <FaStar
                  //   style={{
                  //     color: el.rating >= 1 ? "orange" : "black",
                  //   }}
                  />
                  <FaStar
                  //   style={{
                  //     color: el.rating >= 2 ? "orange" : "black",
                  //   }}
                  />
                  <FaStar
                  //   style={{
                  //     color: el.rating >= 3 ? "orange" : "black",
                  //   }}
                  />
                  <FaStar
                  //   style={{
                  //     color: el.rating >= 4 ? "orange" : "black",
                  //   }}
                  />
                  <FaStar
                  //   style={{
                  //     color: el.rating >= 5 ? "orange" : "black",
                  //   }}
                  />
                </div>
                <h4>
                  <CountUp
                    start={0}
                    end={el.price * el.quantity}
                    duration={2.75}
                    separator=""
                    decimals={0}
                  ></CountUp>
                  {""}$
                </h4>
                <div className="card--btns">
                  <button
                    className="card--btns__minus"
                    onClick={() => dispatch(quanMinus(el))}
                  >
                    -
                  </button>
                  <h3>{el.quantity}</h3>
                  <button
                    className="card--btns__plus"
                    onClick={() => dispatch(quanPlus(el))}
                  >
                    +
                  </button>
                </div>

                <h2
                  onClick={() => dispatch(deleteBas(el))}
                  style={{
                    color: "black",
                    marginLeft: "450px",
                    marginTop: "10px",
                    fontSize: "25px",
                  }}
                >
                  {" "}
                  <RiDeleteBin5Fill />
                </h2>
              </div>
            </div>
          ))}
        </div>
        <h1
          style={{
            color: "white",
          }}
        >
          {" "}
          Total Price:{" "}
          <CountUp
            start={0}
            end={Total}
            duration={2.75}
            separator=""
            decimals={0}
          ></CountUp>
          $
        </h1>
      </div>
    </div>
  );
};

export default Basket;
