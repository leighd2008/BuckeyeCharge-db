import React from 'react';
import './TeamEvents.css';
import { Card, CardTitle } from 'reactstrap';
import Scroll from '../Scroll/Scroll';

import Events from './Events'

const TeamEvents = ({eventUrls}) => {
    return ( 
      <Card className = "ma3 events"
        style = {
            { backgroundColor: '#6c757d', borderColor: 'red', borderWidth: '4px',
             minWidth: '48vw' } } >
        <CardTitle tag = "h1"> Team Events </CardTitle> 
        <Scroll>
          <Events eventUrls={eventUrls}/>
        </Scroll>
      </Card>
    );
};

export default TeamEvents;