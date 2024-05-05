import React from "react";
import { FaStar } from "react-icons/fa";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../../redux/AddToBasketSlice";
import { deleteFavorite } from "../../redux/AddToFavoriteSlice";
import { MdDeleteSweep } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const FavoriteCard = ({ el }) => {
  const dispathch = useDispatch();
  const nav = useNavigate();
  const { basket } = useSelector((s) => s.addBasket);
  let someBas = basket.some((some) => some.id === el.id);
  return (
    <div id="card">
      <div className="container">
        <div className="card">
          <div className="cards">
            <Zoom>
              <img src={el.url} alt="img" />
            </Zoom>
            <div className="cards--text">
              <h1 onClick={()=>nav(`/details/${el.id}`)}>{el.title}</h1>
              <h3>{el.price}$</h3>
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
            { !someBas ? <button onClick={() => dispathch(addBasket(el))}>
                Add to Product
              </button> :<button onClick={() => nav("/basket")}>
                GO to Basket
              </button> } 
              <h1
                onClick={() => dispathch(deleteFavorite(el))}
                style={{
                  fontSize: "26px",
                  marginLeft: "280px",
                  marginTop: "10px",
                }}
              >
                <MdDeleteSweep />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
