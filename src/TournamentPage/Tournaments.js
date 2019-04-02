import React from 'react';
import {teamData} from '../TeamPage/teamData'
import './Tournaments.css';
import { Card } from 'reactstrap';

const Tournaments = ({ indexStart, indexEnd }) => {
  
  return (
    <Card className="ma3 roster" style={{ backgroundColor: '#6c757d', borderColor: 'red', borderWidth: '4px', minWidth:'60vw' }}>
        <table className="f6 w-100 mw8 center pa4 ma2" >
          <thead>
            <tr >
              <th>Weekend</th>
            {
              teamData.map((team, j) => {
                if (j>= indexStart && j< indexEnd){
                  return (
                      <th >{team.teamName}</th>
                  )
                }
                return null;
              })
            }
            </tr>
          </thead>
          <tbody>
          {
            teamData[0].tournaments.map((tournament, i) => {
              return(
                <tr className="stripe-dark" key={i}>
                  <td>{teamData[0].tournaments[i].Weekend}</td>
                  {
                    teamData.map((team, j) => {
                      if (j>= indexStart && j< indexEnd){
                        return (
                            <td >{team.tournaments[i].name}</td>
                        )
                      }
                      return null;
                    })
                  }
                </tr>
              )
            })
          }
          </tbody>
        </table>
    </Card>
  );
};

export default Tournaments;
