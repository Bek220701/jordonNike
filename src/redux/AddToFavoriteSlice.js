import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: JSON.parse(localStorage.getItem("fav")) || [],
};

const addToFavorite = createSlice({
  name: "ADDFAVORITE",
  initialState,
  reducers: {
    addFavorite(state, action) {
      let findFavorite = state.favorite.find((el)=> el.id === action.payload.id)
      if (findFavorite) {
        console.log(findFavorite, "favoriteBar");
      }else{
      localStorage.setItem(
        "fav",
        JSON.stringify([...state.favorite, action.payload])
      );
      state.favorite = [...state.favorite, action.payload];
      }
    },
    deleteFavorite(state, action) {
      let deleFav = state.favorite.filter(
        (el) => el.id !== action.payload.id
        );
        localStorage.setItem(
          "fav",
          JSON.stringify(deleFav)
        );
      state.favorite = deleFav
    },
  },
});
export const { addFavorite,deleteFavorite } = addToFavorite.actions;
export default addToFavorite.reducer;
