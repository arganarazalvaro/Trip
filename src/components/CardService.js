import React from "react";
import Carditem from "./Carditem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>We help you discover unmissable things!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Carditem
              src="images/img-14.jpg"
              text="Enjoy the beaches of Cancun!"
              label="Relax"
              path="/services"
            />
            <Carditem
              src="images/img-15.jpg"
              text="Climb the Eiffel tower at night!"
              label="Romantic"
              path="/services"
            />
            <Carditem
              src="images/img-13.jpg"
              text="Fly by helicopter over the Iguazu Falls"
              label="Adrenaline"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <Carditem
              src="images/img-kayak.jpg"
              text="Travel by kayak in Iceland!"
              label="Adrenaline"
              path="/services"
            />
            <Carditem
              src="images/img-dinner.jpg"
              text="Have a romantic dinner in Rome!"
              label="Romantic"
              path="/services"
            />
            <Carditem
              src="images/img-wine.jpg"
              text="Tour a Chilean winery!"
              label="Flavors"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <Carditem
              src="images/img-perito.jpg"
              text="Look at the perito moreno glacierake a cruise through the Caribbean islands"
              label="Travel"
              path="/services"
            />
            <Carditem
              src="images/img-11.jpg"
              text="Rise to Christ the Redeemer in Rio"
              label="Travel"
              path="/services"
            />
            <Carditem
              src="images/img-ibiza.jpg"
              text="Go party to Ibiza!"
              label="Party"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <Carditem
              src="images/img-19.jpg"
              text="Take a cruise through the Caribbean islands"
              label="Luxury"
              path="/services"
            />
            <Carditem
              src="images/img-22.jpg"
              text="Tour the iconic places in Europe"
              label="Travel"
              path="/services"
            />
            <Carditem
              src="images/img-20.jpg"
              text="Practice your favorite sports"
              label="Adrenaline"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
