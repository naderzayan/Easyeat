import React from "react";
import "../style/_home.scss";
import NavBar from "../components/NavBar";
import ShopCard from "../components/ShopCard";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main className="mainOfHome">
        <NavBar />

        <div className="heroContent">
          <h1>Crafting your Exceptional Dining Reservations</h1>
          <p>
            Reservation is a step into a world of gastronomic wonder. Reserve
            your table today and let us paint your culinary dreams into reality.
          </p>

          <div className="btn">
            <button>Explore Products</button>
          </div>
        </div>
      </main>

      <section className="mostSelling">
        <div className="most">
          <p>Most Selling</p>
          <h3>Most Selling</h3>
        </div>
        <div className="card">
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
        <Slider />
      </section>
      <section className="imgvid">
        <img src="/shop_background.jpg" alt="video cover" />

        <div className="play-btn">
          <span>Play</span>
        </div>
      </section>
      <Footer />
    </>
  );
}
