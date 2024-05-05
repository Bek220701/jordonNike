import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: JSON.parse(localStorage.getItem("pro")) || [],
  sale: JSON.parse(localStorage.getItem("sale")) || [],
  details: {},
  search:[],
  man : [], 
  woman:[],
  kids : []
};

export const addCardSlice = createSlice({
  name: "ADDPRODUCT",
  initialState,
  reducers: {
    addProduct(state, action) {
      action.payload.quantity = 1;
      localStorage.setItem(
        "pro",
        JSON.stringify([...state.product, action.payload])
      );
      state.product = [...state.product, action.payload];
    },
    saleProduct(state,action) {
      let filterPrice = state.product.filter((el) => el.price > 90);
      state.sale = filterPrice.map((el) => {
        return {...el, oldPrice:el.price,price:el.price - el.price / 100 * 30 }
      });
    },
    productDetails(state,action){
      state.details = action.payload
    },
    productSearch(state,action){
      let findSearch = state.product.filter((el)=> el.title === action.payload)
  state.search = findSearch
  },
  categoryMan(state,action){
    state.man = state.product.filter((el)=> el.category === "man")
  },
  categoryWomen(state,action){
state.woman = state.product.filter((el)=> el.category === "woman")
  },
  categoryKids(state,action){
    state.kids = state.product.filter((el)=> el.category === "kids")
  }
  },
});
export const { addProduct,saleProduct,productDetails,productSearch,categoryMan,categoryWomen,categoryKids } = addCardSlice.actions;
export default addCardSlice.reducer;
