import React from "react";
import { useSelector } from "react-redux";
import BuyCard from "../BuyCard";

const Buy = () => {
  const { product } = useSelector((s) => s.addCard);
  return <div id="buy">
    <div className="container">
  <div className="buy">{
    product.map((el)=><BuyCard el={el}/>)
  }</div>;
  </div>
  </div>
};

export default Buy;
