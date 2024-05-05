import React from "react";
import { useSelector } from "react-redux";
import FavoriteCard from "../FavoriteCard";

const Favorite = () => {
  const { favorite } = useSelector((s) => s.addFavorite);
  return (
    <div id="favorite">
      <div className="container">
        <div className="favorite">
          {favorite.map((el) => (
            <FavoriteCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
