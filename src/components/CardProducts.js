import React from 'react';
import Carditem from './Carditem';
import './Cards.css';



function Cards() {
    return (
      <div className="cards">
        <h1>
            Your donation allows us to continue enriching your vacation!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <Carditem
                src="images/img-free.jpg"
                text="Free subscription"
                label="Free"
                path="/sign-up"
              />
              <Carditem
                src="images/img-donate.jpg"
                            text="You can help us with your donation!"
                label="Donate"
                path="/sign-up"
              />
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Cards;
