import React from 'react';
import Tournaments from './Tournaments';
import { Card, CardTitle } from 'reactstrap';

const TournamentPage = () => {
  let indexStart = 0;
  let indexEnd = 4;

  return (
    <Card className="ma3 roster" style={{ backgroundColor: '#6c757d', borderColor: 'red', borderWidth: '4px', minWidth:'48vw' }}>
      <CardTitle tag="h1">Tournaments</CardTitle>
      <Tournaments indexStart={indexStart} indexEnd={indexEnd} />
      <Tournaments indexStart={4} indexEnd={9} />
    </Card>
  )
}

export default TournamentPage;