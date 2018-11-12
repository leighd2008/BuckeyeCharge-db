import React from 'react';

import './ScoreBoard.css';
import { Card, CardTitle } from 'reactstrap';

const ScoreBoard = (props) => {
  return (
    <Card className="ma3 scoreboard" style={{ backgroundColor: '#6c757d', borderColor: 'red', borderWidth: '4px', minWidth: '48vw' }}>
      <CardTitle tag="h1">Scoreboard</CardTitle>
      <iframe src="//gc.com/team-5bb0a41f0d6f575261bc197f/scoreboard?g=5&p=5bafd0a9b7ce48001b2f2705" width="728" height="90" scrolling="no" frameborder="0" title='scoreboard'></iframe>
    </Card>
  );
};

export default ScoreBoard;
