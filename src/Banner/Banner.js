import React from 'react';
import { Jumbotron } from 'reactstrap';
import './Banner.css';

const Banner = ({ teamName, backgroundImage }) => {
  return (
    <div >
      {console.log('background', backgroundImage)}
      <Jumbotron style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1 className="ma0 pa0">{teamName}</h1>
      </Jumbotron>
    </div>
  );
};

export default Banner;
