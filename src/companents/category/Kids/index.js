import React, { useEffect } from 'react';
import BuyCard from '../../BuyCard';
import { categoryKids} from '../../../redux/AddCardSlise';
import { useDispatch, useSelector } from 'react-redux';

const Kids = () => {
    const {kids} = useSelector((s)=> s.addCard)
    const dispatch = useDispatch()
    useEffect(()=>{
    dispatch(categoryKids())
    },[])
    return (
        <div id="buy">
    <div className="container">
  <div className="buy">{
    kids.map((el,idx)=><BuyCard el={el} key={idx}/>)
  }</div>;
  </div>
  </div>
    )
}
export default Kids;