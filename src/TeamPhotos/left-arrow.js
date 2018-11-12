import React from 'react';
import backArrow from '../images/slider-left-arrow.svg';

const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      <img src={backArrow} alt='back arrow' />
    </div>
  );
}

export default LeftArrow;