import React from 'react';
import fieldImage from '../images/mark-duffel-352915-unsplash2.jpg';
import Contact from '../Contact/Contact';
import HomeField from '../HomeField/HomeField';
import TeamRoster from '../TeamRoster/TeamRoster';
import TeamPhotos from '../TeamPhotos/TeamPhotos';
import {teamData} from './teamData'
import {roster} from './roster'
import TeamEvents from '../TeamEvents/TeamEvents';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import W12UImage from '../images/Warren12U.jpg';
import W12UUrls from '../Warren12U/events';

// import './TeamPage.css';

import Banner from '../Banner/Banner';

const TeamPage = ({ route, teamName}) => {
    const index = teamData.findIndex(teamData => teamData.teamName === teamName)
    const contact1=`${teamData[index].headCoach}(${teamData[index].teamEmail})`
    const contact2=`Assistant Coaches: ${teamData[index].assistantCoach1}, ${teamData[index].assistantCoach2}`
    const fieldName="Johnson Community Center"
    const fieldAddress1="800 Gillmer Rd"
    const fieldAddress2="Leavittsburg, Ohio 44430"
    const googleMapLink="https://goo.gl/maps/TSZ2T6Ti4oo"
    
  return (
    <div className="App">
      <Banner
          backgroundImage={W12UImage}
          teamName={teamName}
        />
      <div  >
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
          <TeamPhotos  />
      </div>
      <div >
          <ScoreBoard />
          <TeamEvents eventUrls={W12UUrls} />
      </div>
    </div>
  );
}

export default TeamPage;
