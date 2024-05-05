import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import logo from "../../assets/img/logo-heder.svg";
import { MdFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { productSearch } from "../../redux/AddCardSlise";

const Header = () => {
  const dispathch = useDispatch();
  const nav = useNavigate();
  const { name } = useParams();
  const { basket } = useSelector((s) => s.addBasket);
  const { favorite } = useSelector((s) => s.addFavorite);
  const [search, setSearch] = useState("");
  const goToSearch = () => {
    dispathch(productSearch(search));
    nav(`/search/${name}`);
    setSearch("");
  };
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img onClick={() => nav("/buyNow")} src={logo} alt="img" />
          <div className="header--nav">
            <NavLink to={"/"}>HOME</NavLink>
            <NavLink to={"/man"} >MAN</NavLink>
            <NavLink to={"/woman"} >WOMAN</NavLink>
            <NavLink to={"/kids"}>KIDS</NavLink>
            <NavLink to={"/sale"}>SALE</NavLink>
          </div>
          <div className="header--icons">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="поиск..."
            />
            <h6 onClick={() => goToSearch()}>
              <IoSearch />
            </h6>
            <h6 onClick={() => nav("/favorite")}>
              <MdFavorite />
            </h6>
            {basket.length ? <h4> {basket.length}</h4> : null}
            <h6 onClick={() => nav("/basket")}>
              <IoMdCart />
            </h6>
            {favorite.length ? <h3> {favorite.length}</h3> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
