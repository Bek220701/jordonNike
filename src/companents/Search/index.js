import React from "react";
import { useSelector } from "react-redux";
import BuyCard from "../BuyCard";

const Saerch = () => {
  const { search } = useSelector((s) => s.addCard);
  return (
    <div className="container">
      {search.map((el) => (
        <BuyCard el={el} />
      ))}
    </div>
  );
};

export default Saerch;
