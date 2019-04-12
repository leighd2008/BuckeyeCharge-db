import React from 'react';
import { Card, CardTitle } from 'reactstrap';

const TeamRoster = ({ roster }) => {

  return (
    <Card className="ma3 roster" style={{ backgroundColor: '#6c757d', borderColor: 'red', borderWidth: '4px', minWidth:'48vw' }}>
      <CardTitle tag="h1">Team Roster</CardTitle>
      <table className="f4 w-100 mw8 center pa4 ma3" >
        <thead>
          <tr >
            <th>Jersey #</th>
            <th>First Name</th>
            <th>Positions</th>
          </tr>
        </thead>
        <tbody>
          { 
            roster.map((player, i) => {
              return (
                <tr className="stripe-dark" key={i}>
                  <td>{player.jersey_num}</td>
                  <td>{player.firstName}</td>
                  <td>{player.positions}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </Card>
  );
};

export default TeamRoster;
