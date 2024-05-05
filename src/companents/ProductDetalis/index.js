import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { VscCircleFilled } from "react-icons/vsc";

const ProductDetails = () => {
  const { details } = useSelector((s) => s.addCard);
  const { url, title, price } = details;
  const nav = useNavigate();
  const [modal, setModal] = useState(false);
  return (
    <div id="details">
      <div className="container">
        <div className="details">
          <img src={url} width={450} alt="img" />
          <div className="details--text">
            <h1>{title}</h1>
            <h3>Men's Waterproof Trail Running Shoes</h3>
            <h2>
              {price}$ <span>30% off</span>
            </h2>
            <div className="details--text__size">
              <h1>Select Size</h1>
              <h2>Size Guide</h2>
            </div>
            <div className="details--text__btns">
              <button>6</button>
              <button>6.5</button>
              <button>7</button>
              <button>7.5</button>
              <button>8</button>
              <button>8.5</button>
              <button>9</button>
              <button>9.5</button>
              <button>10</button>
              <button>10.5</button>
              <button>11</button>
              <button>11.5</button>
              <button>12</button>
              <button>12.5</button>
              <button>13</button>
              <button>14</button>
              <button>15</button>
            </div>
            <div className="details--text__bag">
              <p>
                4 interest-free payments of $23.99 with <br />{" "}
                <span className="klar">Klarna.</span>{" "}
                <span className="learn">Learn More</span>{" "}
              </p>
              <button className="bag" onClick={() => setModal(true)}>
                Add to Bag
              </button>
              <button onClick={() => nav("/favBuy")} className="fav">
                Favorite
              </button>
              <a>
                <MdFavoriteBorder />
              </a>
            </div>

            <div
              className="details--text__modal"
              style={{
                display: modal ? "block" : "none",
              }}
            >
              <div className="details--text__modal--hed">
                <h1>Klarna</h1>
                <h3 onClick={() => setModal(false)}>X</h3>
                <h2>
                  In collaboration with<span>Nike</span>{" "}
                </h2>
              </div>
              <div className="details--text__modal--scrool">
                <div className="details--text__modal--scrool__buy">
                  <h1>
                    Buy now. Pay with Klarna at your <br />{" "}
                    <span>own pace.</span>
                  </h1>
                  <p>Get what you love, choose how you pay.</p>
                  <h3>Pay now</h3>
                </div>
                <div className="details--text__modal--scrool__puy">
                  <h1>$260.00</h1>
                  <h2> Pay in full</h2>
                </div>
                <div className="details--text__modal--scrool__works">
                  <h1>How it works</h1>
                  <div className="details--text__modal--scrool__works--choose">
                    <h3>
                      <VscCircleFilled />
                      At checkout select Klarna
                    </h3>
                    <h4>
                      <VscCircleFilled />
                      Choose your payment plan <br />{" "}
                      <span>
                        Different payment plans may be shown depending on the{" "}
                        <br />
                        purchase amount and credit score.
                      </span>
                    </h4>
                    <h5>
                      <VscCircleFilled />
                      Complete your checkout <br />{" "}
                      <span>
                        The amount will be charged based on the payment plan{" "}
                        <br /> you chose.
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="details--text__modal--btn">
                <button onClick={() => setModal(false)}>CLOSE</button>
              </div>
            </div>
            <div
              className="details--bg"
              onClick={() => setModal(false)}
              style={{
                display: modal ? "block" : "none",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
