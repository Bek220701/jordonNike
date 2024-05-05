import React from "react";
import kross1 from "../../assets/img/kross1.png";
import kross2 from "../../assets/img/kross2.png";
import kross3 from "../../assets/img/kross3.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const nav= useNavigate()
  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <div className="home--jordan">
            <div className="home--jordan__kross">
              <h3>CHOOSE COLOR : </h3>
              <div className="home--jordan__kross--nike">
                <img src={kross1} alt="img" />
                <img src={kross2} alt="img" />
                <img src={kross3} alt="img" />
              </div>
            </div>
            <div className="home--jordan__btns">
              <button className="home--jordan__btns--right" onClick={()=>nav("/addCard")}>ADD TO CART</button>
              <button className="home--jordan__btns--left"  onClick={()=>nav("/buyNow")}>BUY NOW</button>
            </div>
            <div className="home--jordan__text">
              <h2>INSPIRATION</h2>
              <p>
                Inspired by the design of the latest Air Jordan game shoe,
                <br /> the Jordan Jumpman 2021 helps up-and-coming players{" "}
                <br /> level up their game.{" "}
              </p>
            </div>
          </div>
          <div className="home--price">
            <h1>134$</h1>
            <button>exclusive</button>
            <h2>
              JORDAN <br />
              JUMPMAN 2021 PF
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
