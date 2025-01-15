import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import  style from "./index.module.scss"
import { FaUserAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
const Header = () => {
  return (
    <header>
      
      <div className={style["navbar"]}>
      <div className={style["input"]}>
      <IoIosSearch />
      <input type="text" placeholder="Search..." />
      </div>

      <div className={style["shopper"]}>
      <h3>Shoppers</h3>
      </div>

      <div className={style["ikon"]}>
      <FaUserAlt />
      <CiHeart />
      </div>
      <hr />
      </div>
      <hr className="horizon" />
      <nav className={style["router"]}>
        
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          <li>
            <NavLink to={"/add"}>Add</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>about</NavLink>
          </li>
          <li>
            <NavLink to={"/wishlist"}>wishlist</NavLink>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
