import React from 'react';
import fieldImage from '../images/mark-duffel-352915-unsplash2.jpg';
import Contact from '../Contact/Contact';
import HomeField from '../HomeField/HomeField';
import TeamRoster from '../TeamRoster/TeamRoster';
import TeamPhotos from '../TeamPhotos/TeamPhotos';
import {teamData} from './teamData'
import TeamEvents from '../TeamEvents/TeamEvents';
import ScoreBoard from '../ScoreBoard/ScoreBoard';


// import './TeamPage.css';

import Banner from '../Banner/Banner';
// import { faImages } from '@fortawesome/free-solid-svg-icons';

const TeamPage = ({ route, teamName, eventUrls}) => {
    const index = teamData.findIndex(teamData => teamData.teamName === teamName)
    const contact1=`${teamData[index].headCoach}(${teamData[index].teamEmail})`
    const contact2=`Assistant Coaches: ${teamData[index].assistantCoach1}, ${teamData[index].assistantCoach2}`
    const fieldName="Johnson Community Center"
    const fieldAddress1="800 Gillmer Rd"
    const fieldAddress2="Leavittsburg, Ohio 44430"
    const googleMapLink="https://goo.gl/maps/TSZ2T6Ti4oo"
    const images = require.context('../../public/images', true);
    let imgsrc = images(`./${teamData[index].teamPic}`)
    
  return (
    <div className="App">
      <Banner
          backgroundImage={imgsrc}
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
          <TeamRoster roster={teamData[index].roster} />
          <TeamPhotos  />
      </div>
      <div >
          <ScoreBoard />
          <TeamEvents eventUrls={eventUrls} />
      </div>
    </div>
  );
}

export default TeamPage;
