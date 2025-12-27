import React from "react";
import "../style/components/_totalCard.scss";

export default function TotalCard() {
  return (
    <main className="mainOfTotalCard">
      <div className="total">
        <p>Total</p>
        <p>450 EG</p>
      </div>
      <div className="Shipping">
        <p>Shipping</p>
        <p>Free</p>
      </div>
      <hr />
      <div className="button">
        <button>Checkout</button>
      </div>
    </main>
  );
}
