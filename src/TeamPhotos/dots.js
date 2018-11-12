import React from 'react';


const Dots = ({ images, currentIndex, handleDotClick }) => {
  return (
    <div className="dots-container">
      {
        images.map((image, i) => (
          <div 
            className={`${i === currentIndex ? 'dot active' : 'dot'}`} 
            onClick={handleDotClick}
            data-index={i}
            key={i}
           />
        ))
      }
    </div>
  )
}

export default Dots;