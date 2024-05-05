import React from "react";
import { FaStar } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../../redux/AddToBasketSlice";
import { useNavigate } from "react-router-dom";
import { addFavorite } from "../../redux/AddToFavoriteSlice";
import saleImg from "../../assets/img/sale.png";
import { productDetails } from "../../redux/AddCardSlise";

const BuyCard = ({ el, sales }) => {
  const dispathch = useDispatch();
  const nav = useNavigate();
  const { favorite } = useSelector((s) => s.addFavorite);
  const { basket } = useSelector((s) => s.addBasket);

  let someBas = basket.some((some) => some.id === el.id);
  let someCard = favorite.some((some) => some.id === el.id);

  return (
    <div id="card">
      <div className="container">
        <div className="card">
          <div className="cards">
            {sales ? (
              <img src={saleImg} alt="img" className="cards--sale" />
            ) : null}
            <Zoom>
              <img src={el.url} alt="img" />
            </Zoom>
            <div className="cards--text">
              <h1 onClick={()=>{
              dispathch(productDetails(el))
              nav(`/details/${el.id}`)}}>{el.title}</h1>
              {
               el.category ?<h2>#{el.category}</h2> : null}
              <div className="cards--text__price">
                <h3
                  style={{
                    color: sales ? "red" : "black",
                  }}
                >
                  {el.price}$
                </h3>
                {sales ? <h4>{el.oldPrice}$</h4> : null}
              </div>
            </div>
            <div className="card--star">
              <FaStar
              //   style={{
              //     color: el.rating >= 1 ? "orange" : "black",
              //   }}
              />
              <FaStar
              // style={{
              //   color: el.rating >= 2 ? "orange" : "black",
              // }}
              />
              <FaStar
              // style={{
              //   color: el.rating >= 3 ? "orange" : "black",
              // }}
              />
              <FaStar
              // style={{
              //   color: el.rating >= 4 ? "orange" : "black",
              // }}
              />
              <FaStar
              // style={{
              //   color: el.rating >= 5 ? "orange" : "black",
              // }}
              />
            </div>
            <div className="cards--favorite">
              {!someBas ? (
                <button onClick={() => dispathch(addBasket(el))}>
                  Add to Product
                </button>
              ) : (
                <button onClick={() => nav("/basket")}>GO to Basket</button>
              )}
              <h1
                style={{
                  color: someCard ? "red" : " black",
                }}
                onClick={() => dispathch(addFavorite(el))}
              >
                <MdFavorite />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCard;
