import React from "react";
import "../style/_shop.scss";
import NavBar from "../components/NavBar";
import ShopCard from "../components/ShopCard";
import Footer from "../components/Footer";

export default function Shop() {
  return (
    <main className="mainOfShop">
      <NavBar />
      <h1>HOME - SHOP</h1>
      <div className="para">
        <p>Shop by category</p>
        <h3>Shop by category</h3>
      </div>
      <div className="mainOfVarieties">
        <div className="imges">
          <img src="/shop_background.jpg" alt="" />
          <p>Vegetarian</p>
        </div>
        <div className="imges">
          <img src="/shop_background.jpg" alt="" />
          <p>Meal </p>
        </div>
        <div className="imges">
          <img src="/shop_background.jpg" alt="" />
          <p>Chicken</p>
        </div>
        <div className="imges">
          <img src="/shop_background.jpg" alt="" />
          <p>Dubble</p>
        </div>
      </div>
      <div className="shopCard">
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </div>
      <Footer />
    </main>
  );
}
