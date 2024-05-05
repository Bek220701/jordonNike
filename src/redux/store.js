import { configureStore } from "@reduxjs/toolkit";
import AddCardSlise from "./AddCardSlise";
import AddToBasketSlice from "./AddToBasketSlice";
import AddToFavoriteSlice from "./AddToFavoriteSlice";

export const store = configureStore({
  reducer: {
    addCard: AddCardSlise,
    addBasket: AddToBasketSlice,
    addFavorite: AddToFavoriteSlice,
  },
});
