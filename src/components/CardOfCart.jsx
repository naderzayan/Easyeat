import React from "react";
import "../style/components/_cardOfCart.scss";

export default function MenuCard() {
  return (
    <div className="menu-card">
      <img src="/shop_background.jpg" alt="" className="menu-img" />

      <div className="menu-info">
        <h3>PORK CHOP WITH APPLE CHUTNEY</h3>
        <span className="price">150 EG</span>
        <div className="paraO">
          <p>4 Pieces</p>
          <p>Spicy Sauce</p>
        </div>
      </div>

      <div className="counter">
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>
    </div>
  );
}
