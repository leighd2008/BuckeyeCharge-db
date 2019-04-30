import React, { Component } from 'react';
import Contact from '../Contact/Contact';
import HomeField from '../HomeField/HomeField';
import TeamRoster from '../TeamRoster/TeamRoster';
import TeamPhotos from '../TeamPhotos/TeamPhotos';
import TeamEvents from '../TeamEvents/TeamEvents';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import fieldImage from '../images/mark-duffel-352915-unsplash2.jpg';
import Banner from '../Banner/Banner';

class TeamPage extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      team:{},
      roster:[],
      backgroundImage: '',
    } 
  }

  componentDidMount () {
    fetch(`http://localhost:3000/Team/${this.props.route}`)
        .then(response => response.json())
        .then(team => this.setState({ team: team }));
      
    fetch(`http://localhost:3000/Team/${this.props.route}/roster`)
      .then(response => response.json())
      .then(roster => this.setState({ roster: roster }));
  }
  
  render () {
    const { team, roster } = this.state;
    if (roster.length === 0){
      return <h1>Loading</h1>
    } else {
      const contact1=`${team.headcoach} (${team.teamemail})`;
      const contact2=`Assistant Coaches: ${team.assistantcoaches}`;
      const fieldName=`${team.fieldname}`;
      const fieldAddress1=`${team.fieldaddress1}`;
      const fieldAddress2=`${team.fieldaddress2}`;
      const location=`${team.location}`;
      const eventboard=team.eventsurls;
      const photoGallery=team.photogallery;
      const scoreboard=team.scoreboard;
      const googleMapLink=team.googlemaplink;
      const scoreboardlink=team.scoreboardlink;
      const images = require.context('../../public/images', true);
      let imgsrc = images(`./${team.teampic}`);
      return (
        <div className="App">
          <Banner
              backgroundImage={imgsrc}
              teamName={team.teamname}
              location={location}
            />
          <div>
            <Contact contact1={contact1} contact2={contact2} />
            <HomeField
              fieldName={fieldName}
              fieldAddress1={fieldAddress1}
              fieldAddress2={fieldAddress2}
              googleMapLink={googleMapLink}
              fieldImage={fieldImage}
            />
          </div>
          <div>
            <TeamRoster roster={roster} />
          </div>
          {photoGallery === true
            ? <div>
                <TeamPhotos  />
              </div>
            : null
          }
          {scoreboard === false
            ? null
            : <div>
                <ScoreBoard scoreboard={scoreboard} scoreboardlink={scoreboardlink} />
              </div>
          }
          {eventboard === true
            ? <div>
                <TeamEvents eventUrls={this.props.eventUrls} />
              </div>
            : null
          }
        </div>
      );
    }
  }
}

export default TeamPage;
