import React from "react";
import "../style/components/_navBar.scss";
import { NavLink } from "react-router";
import { FaHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function NavBar() {
  return (
    <main className="navbar">
      <div>
        <img src="/logo.png" alt="" />
      </div>
      <div className="navlink">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="icon">
        <div className="heart">
          <NavLink to='/whish_list'><FaHeart /></NavLink>
        </div>
        <div className="cart">
          <NavLink to='/cart'><HiOutlineShoppingCart /></NavLink>
        </div>
      </div>
    </main>
  );
}
