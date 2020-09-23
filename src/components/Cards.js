import React from 'react';
import Carditem from './Carditem';
import './Cards.css';



function Cards() {
    return (
      <div className="cards">
        <h1>
          We keep you updated with the best places to visit!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <Carditem
                src="images/img-18.jpg"
                text="Enjoy the most beautiful beaches in the world"
                label="Relax"
                path="/services"
              />
              <Carditem
                src="images/img-12.jpg"
                text="Discover the magic of Disney and all its parks"
                label="Family"
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
