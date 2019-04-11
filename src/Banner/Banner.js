import React from 'react';
import { Jumbotron } from 'reactstrap';
import './Banner.css';

const Banner = ({ teamName, backgroundImage, location }) => {
  return (
    <div >
      <h1 className="ma0 pa0">{teamName} {location}</h1>
      <Jumbotron style={{ backgroundImage: `url(${backgroundImage })` }}>
        
      </Jumbotron>
    </div>
  );
};

export default Banner;
