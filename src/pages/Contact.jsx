import React from "react";
import "../style/_contact.scss";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <main>
      <section className="mainOfContact">
        <NavBar />
        <h1>HOME - Contact</h1>
      </section>

      <section className="contactDetails">
        <div className="titles">
          <p>Shop by category</p>
          <h3>Send Us Message</h3>
        </div>
        <div className="mainOfForm">
          <form className="form">
            <input type="text" placeholder="name"/>
            <input type="text" placeholder="phone"/>
            <input type="text" placeholder="supject"/>
            <input type="text" className="text" placeholder="message"/>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
