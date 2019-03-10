import React from 'react';
import fieldImage from '../images/mark-duffel-352915-unsplash2.jpg';
import Contact from '../Contact/Contact';
import HomeField from '../HomeField/HomeField';
import TeamRoster from '../TeamRoster/TeamRoster';
import TeamPhotos from '../TeamPhotos/TeamPhotos';
import {roster} from './roster'
import TeamEvents from '../TeamEvents/TeamEvents';
import ScoreBoard from '../ScoreBoard/ScoreBoard';


// import './Cholley16U.css';

import Banner from '../Banner/Banner';

const Cholley16U = ({ backgroundImage, teamName, statement, eventUrls }) => {
    const contact1="Head Coach: Mark Cholley (buckeyechargefastpitch@gmail.com)"
    const contact2="Phone: 740-319-1727"
    const fieldName="Jedd Park"
    const fieldAddress1="2275 Pickle Rd"
    const fieldAddress2="Akron, Ohio 44312"
    const googleMapLink="https://goo.gl/maps/a9NZ6ZDooJm"
    
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

export default Cholley16U;
