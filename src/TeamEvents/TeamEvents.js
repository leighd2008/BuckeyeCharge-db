import React from 'react';
import './TeamEvents.css';
import { Card, CardTitle } from 'reactstrap';

const TeamEvents = ({ events }) => {

    return ( 
      <Card className = "ma3 events"
        style = {
            { backgroundColor: '#6c757d', borderColor: 'red', borderWidth: '4px', minWidth: '48vw' } } >
        <CardTitle tag = "h1"> Team Events </CardTitle> 
        <table className = "f3 w-100 mw8 center pa4 ma3">
          <thead>
            <tr>
              <th> Date </th> 
              <th> Time </th>
              <th> Event </th>
            </tr> 
          </thead> 
          {
            events.map((event, i) => {
              return ( 
                <tbody>
                  <tr key = { i }>
                    <td> { event.date } </td> 
                    <td> { event.time } </td> 
                    <td> { event.name } </td>
                  </tr>
                  <tr>
                    <td>  </td> 
                    <td>  </td> 
                    <td> { event.note } </td> 
                  </tr>
                </tbody>
                )
            })
          }  
        </table> 
      </Card>
    );
};

export default TeamEvents;