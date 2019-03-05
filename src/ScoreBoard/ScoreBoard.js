import React from 'react';

import './ScoreBoard.css';
import { Card, CardTitle } from 'reactstrap';

const ScoreBoard = (props) => {
  return (
    <div>
      <div className='lgscreen'>
        <Card className="scoreboard" >
          <CardTitle tag="h1">Scoreboard</CardTitle>
          <iframe src="//gc.com/team-5bb0a41f0d6f575261bc197f/scoreboard?g=5&p=5bafd0a9b7ce48001b2f2705" width="728" height="90" margin="auto"
              scrolling="no" frameBorder="0" title='scoreboard'></iframe>
        </Card>
      </div>
      {/* <div className='smscreen'>
        <Card className="scoreboard" >
          <CardTitle tag="h1">Scoreboard</CardTitle>
          <iframe src="//gc.com/team-5bb0a41f0d6f575261bc197f/scoreboard?g=3&p=5bafd0a9b7ce48001b2f2705" width="470" height="110" scrolling="no" frameborder="0" title='scoreboard-sm'></iframe>
        </Card>
      </div> */}
    </div>
  );
};

export default ScoreBoard;
