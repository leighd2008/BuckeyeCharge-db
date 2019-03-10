import React from 'react';
import fieldImage from '../images/mark-duffel-352915-unsplash2.jpg';
import Contact from '../Contact/Contact';
import HomeField from '../HomeField/HomeField';
import TeamRoster from '../TeamRoster/TeamRoster';
import TeamPhotos from '../TeamPhotos/TeamPhotos';
import {roster} from './roster'
import TeamEvents from '../TeamEvents/TeamEvents';
import ScoreBoard from '../ScoreBoard/ScoreBoard';


// import './Warren12u.css';

import Banner from '../Banner/Banner';

const Warren12u = ({ backgroundImage, teamName, statement, eventUrls }) => {
    const contact1="Head Coach: Rich Meikle (WarrenBuckeyeCharge@gmail.com)"
    const contact2="Assistant Coach: Denise Brunke-Allen (deebbmt@aol.com)"
    const fieldName="Johnson Community Center"
    const fieldAddress1="800 Gillmer Rd"
    const fieldAddress2="Leavittsburg, Ohio 44430"
    const googleMapLink="https://goo.gl/maps/TSZ2T6Ti4oo"
    
  return (
    <div className="App">
      <Banner
          backgroundImage={backgroundImage}
          teamName={teamName}
          statement={statement}
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
          <TeamEvents eventUrls={eventUrls} />
      </div>
    </div>
  );
}

export default Warren12u;
