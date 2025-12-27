import React from "react";
import "../style/_cart.scss";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardOfCart from "../components/CardOfCart";
import TotalCard from "../components/TotalCard";

export default function Cart() {
  return (
    <main>
      <section className="mainOfCart">
        <NavBar />
        <h1>HOME - Cart</h1>
      </section>

      <section className="detailsOfCart">
        <div>
          <h3>3 Items In Cart</h3>
        </div>
        <div className="mainOfCards">
          <div className="cards">
            <CardOfCart />
            <CardOfCart />
            <CardOfCart />
          </div>
          <div className="cards">
            <TotalCard />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
