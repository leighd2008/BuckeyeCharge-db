import React from 'react';
import Contact from '../Contact/Contact';
import HomeField from '../HomeField/HomeField';
import TeamRoster from '../TeamRoster/TeamRoster';
import TeamPhotos from '../TeamPhotos/TeamPhotos';
import {teamData} from './teamData';
import TeamEvents from '../TeamEvents/TeamEvents';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import fieldImage from '../images/mark-duffel-352915-unsplash2.jpg';
import Banner from '../Banner/Banner';

const TeamPage = ({teamName, eventUrls}) => {
    const index = teamData.findIndex(teamData => teamData.teamName === teamName);
    const contact1=`${teamData[index].headCoach}(${teamData[index].teamEmail})`;
    const contact2=`Assistant Coaches: ${teamData[index].assistantCoaches}`;
    const fieldName=`${teamData[index].fieldName}`;
    const fieldAddress1=`${teamData[index].fieldAddress1}`;
    const fieldAddress2=`${teamData[index].fieldAddress2}`;
    const roster=teamData[index].roster;
    const eventboard=teamData[index].eventUrls;
    const photoGallery=teamData[index].photoGallery;
    const scoreboard=teamData[index].scoreboard;
    const googleMapLink="https://goo.gl/maps/TSZ2T6Ti4oo";
    const images = require.context('../../public/images', true);
    let imgsrc = images(`./${teamData[index].teamPic}`);
    
  return (
    <div className="App">
      <Banner
          backgroundImage={imgsrc}
          teamName={teamName}
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
            <ScoreBoard scoreboard={scoreboard}/>
          </div>
      }
      {eventboard === true
        ? <div>
            <TeamEvents eventUrls={eventUrls} />
          </div>
        : null
      }
    </div>
  );
}

export default TeamPage;
