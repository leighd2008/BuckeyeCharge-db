import React from 'react';
import { Jumbotron } from 'reactstrap';
import './Banner.css';

const Banner = (props) => {
  return (
    <div >
      <Jumbotron>
        <h1 className="ma0 pa0">{props.teamName}</h1>
        <div className="cover" style={{ backgroundImage: `url(${props.backgroundImage})` }}>

          <h2 className="mission">{props.statement}</h2>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Banner;
