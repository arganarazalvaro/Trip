import React from 'react';
import "../App.css";
import { Button } from './Button';
import './HeroSection.css';
import { ButtonTrailer } from './ButtonTrailer';


function HeroSection() {
    return (
      <div className="hero-container">
        <video src="./videos/portada.mp4" autoPlay loop muted />
        <h1>A World To See</h1>
        <p>Go where you feel the most alive</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
          <ButtonTrailer
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            WATCH TRAILER
            <i className="far fa-play-circle" />
          </ButtonTrailer>
        </div>
      </div>
    );
}

export default HeroSection;
