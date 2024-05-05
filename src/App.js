import { Route, Routes } from "react-router-dom";
import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./companents/Header";
import Home from "./companents/Home";
import AddCard from "./companents/AddCard";
import Buy from "./companents/BuyNow";
import Basket from "./companents/Basket";
import Favorite from "./companents/Favorite";
import Sale from "./companents/Sale";
import ProductDetalis from "./companents/ProductDetalis";
import Saerch from "./companents/Search";
import FavoriteBuy from "./companents/FavoriteBuy";
import Man from "./companents/category/Man";
import Woman from "./companents/category/Woman";
import Kids from "./companents/category/Kids";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addCard" element={<AddCard />} />
        <Route path="/buyNow" element={<Buy />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/man" element={<Man />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/details/:id" element={<ProductDetalis />} />
        <Route path="/search/:name" element={<Saerch />} />
        <Route path="/favBuy" element={<FavoriteBuy />} />
      </Routes>
    </div>
  );
}

export default App;
