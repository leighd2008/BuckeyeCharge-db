import React from 'react';
import nextArrow from '../images/slider-right-arrow.svg';

const RightArrow = (props) => {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide}>
      <img src={nextArrow} alt='next arrow' />
    </div>
  );
}

export default RightArrow;
