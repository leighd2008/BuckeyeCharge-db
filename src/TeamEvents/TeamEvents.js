import React from 'react';
import './TeamEvents.css';
import { Card, CardTitle } from 'reactstrap';

// import Splash from './Splash'
import Events from './Events'

const TeamEvents = () => {

    return ( 
      <Card className = "ma3 events"
        style = {
            { backgroundColor: '#6c757d', borderColor: 'red', borderWidth: '4px', minWidth: '48vw' } } >
        <CardTitle tag = "h1"> Team Events </CardTitle> 
        <Events />
      </Card>
    );
};

export default TeamEvents;