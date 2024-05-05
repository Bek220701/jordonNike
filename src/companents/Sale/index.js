import React, { useEffect } from "react";
import BuyCard from "../BuyCard";
import { useDispatch, useSelector } from "react-redux";
import { saleProduct } from "../../redux/AddCardSlise";

const Sale = ({el,idx}) => {
  const { sale } = useSelector((s) => s.addCard);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(saleProduct())
  }, []);
  return (
    <div id="buy">
      <div className="container">
        <div className="buy">
          {sale.map((el) => (
            <BuyCard el={el} key ={idx} sales={true}/>
          ))}
        </div>
        ;
      </div>
    </div>
  );
};

export default Sale;
