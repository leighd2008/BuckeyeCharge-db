import React from 'react';
import { Jumbotron } from 'reactstrap';
import './Banner.css';

const Banner = ({ teamName, backgroundImage, statement }) => {
  return (
    <div >
      <Jumbotron>
        <h1 className="ma0 pa0">{teamName}</h1>
        <div className="cover" style={{ backgroundImage: `url(${backgroundImage})` }}>

          <h2 className="mission">{statement}</h2>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Banner;
