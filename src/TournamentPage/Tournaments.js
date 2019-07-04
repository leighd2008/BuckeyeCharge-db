import React, { Component } from 'react';
import { Card } from 'reactstrap';

class Tournaments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teams:[],
      tournaments:[],
      backgroundImage: '',
    } 
  }

  componentDidMount () {
    fetch(`http://localhost:3000/`)
      .then(response => response.json())
      .then(teams => this.setState({ teams: teams }));
      fetch(`http://localhost:3000/Tournaments`)
      .then(response => response.json())
      .then(tournaments => this.setState({ tournaments: tournaments }));
  }

  render () {
    const { teams, tournaments } = this.state;
    const { indexEnd, indexStart } = this.props;
    let teamnames = [];
    let teamtours = [];

    if (tournaments.length === 0){
      return <h1>Loading</h1>
    } else {
      for (let k = indexStart; k< indexEnd; k++){
        const teamtemp = teams.filter(team => team.id === k)
        teamnames.push(teamtemp[0].teamname)
      }
      for (let k = indexStart; k< indexEnd; k++){
        const tourtemp = tournaments.filter(teamtourn => teamtourn.teamId === k)
        tourtemp.sort(function (a, b) {
          return a.id - b.id;
        });
        teamtours.push(tourtemp)
      }

      return (
        <Card className="ma3 roster" style={{ backgroundColor: '#6c757d', borderColor: 'red', borderWidth: '4px', minWidth:'60vw' }}>
            <table className="f6 w-100 mw8 center pa4 ma2" >
              <thead>
                <tr >
                  <th>Weekend</th>
                {
                  teamnames.map((team, j) => {
                    return (
                      <th key={j}>{team}</th>
                    )
                  })
                }
  
                </tr>
                </thead>
              <tbody>
              {
                teamtours[0].map((tournament, i) => {
                  return(
                    <tr className="stripe-dark" key={i}>
                      <td>{teamtours[0][i].weekend}</td>
                      {
                        teamtours.map((team, j) => {
                            return (
                                <td key={j} >{team[i].tourname}</td>
                            )
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
    }
  }
};

export default Tournaments;
