import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BuyCard from '../../BuyCard';
import { categoryMan } from '../../../redux/AddCardSlise';

const Man = () => {
    const {man} = useSelector((s)=>s.addCard)
    const dispatch = useDispatch()
    useEffect(()=>{
    dispatch(categoryMan())
    },[])
    return (
        <div id="buy">
    <div className="container">
  <div className="buy">{
    man.map((el,idx)=><BuyCard el={el} key={idx}/>)
  }</div>;
  </div>
  </div>
    );
};

export default Man;