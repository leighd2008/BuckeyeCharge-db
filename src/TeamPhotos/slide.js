import React from 'react'

const Slide = ({ image, isActive }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  
  return (
    <div 
      className={`slide ${isActive ? 'active-slide' : ''}`} 
      style={styles} 
    />
  )
}

export default Slide