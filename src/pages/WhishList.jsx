import React from "react";
import NavBar from "../components/NavBar";
import "../style/_whishList.scss";
import ShopCard from "../components/ShopCard";
import Footer from "../components/Footer";

export default function WhishList() {
  return (
    <main>
      <section className="mainOfWhishList">
        <NavBar />
        <h1>HOME - Whishlist</h1>
      </section>
      <section className="cards">
        <div className="card">
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
      </section>
      <Footer />
    </main>
  );
}
