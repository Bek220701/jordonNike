import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: JSON.parse(localStorage.getItem("bas")) || [],
};

const addToBasket = createSlice({
  name: "ADD_TO_BASKET",
  initialState,
  reducers: {
    addBasket(state, action) {
      let findBas = state.basket.find((el)=> el.id === action.payload.id)
      if (findBas) {
       console.log(findBas, "basketBar");
      }else{
      localStorage.setItem(
        "bas",
        JSON.stringify([...state.basket, action.payload])
      );
      state.basket = [...state.basket, action.payload];
      }
    },
    deleteBas (state,action){
      let deleteBasket = state.basket.filter((el)=> el.id !== action.payload.id)
      localStorage.setItem("bas",JSON.stringify(deleteBasket))
   state.basket = deleteBasket
    },
    quanPlus(state, action) {
      let quantityPlus = state.basket.map((el) =>
        el.id === action.payload.id ? { ...el, quantity: el.quantity + 1 } : el
      );
      state.basket = quantityPlus;
    },
    quanMinus(state, action) {
      let quantityMinus = state.basket.map((el) =>
        el.id === action.payload.id
          ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
          : el
      );
      state.basket = quantityMinus;
    },
  },
});

export const { addBasket, quanPlus, quanMinus,deleteBas } = addToBasket.actions;
export default addToBasket.reducer;
