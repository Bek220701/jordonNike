import React, { useEffect } from 'react';
import BuyCard from '../../BuyCard';
import { categoryWomen } from '../../../redux/AddCardSlise';
import { useDispatch, useSelector } from 'react-redux';

const Woman = () => {
    const {woman} = useSelector((s)=>s.addCard)
    const dispatch = useDispatch()
    useEffect(()=>{
    dispatch(categoryWomen())
    },[])
    return (
        <div id="buy">
    <div className="container">
  <div className="buy">{
    woman.map((el,idx)=><BuyCard el={el} key={idx}/>)
  }</div>;
  </div>
  </div>
    )
}
export default Woman;