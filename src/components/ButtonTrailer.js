import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ["btn--medium", "btn--large"];

export const ButtonTrailer = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
      <a
        href="https://www.youtube.com/watch?v=CC0ywOEAsIE&t=4s"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={type}
        >
          {children}
        </button>
      </a>
    );
};
