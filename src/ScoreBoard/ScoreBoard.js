import React from 'react';

import './ScoreBoard.css';
import { Card, CardTitle } from 'reactstrap';

const ScoreBoard = ({scoreboardlink}) => {
  return (
    <div>
      <div className='lgscreen'>
        <Card className="scoreboard" >
          <CardTitle tag="h1">Scoreboard</CardTitle>
          <iframe src={scoreboardlink} width="728" height="90" scrolling="no" 
              frameBorder="0" title='scoreboard'></iframe>
        </Card>
      </div>
    </div>
  );
};

export default ScoreBoard;
