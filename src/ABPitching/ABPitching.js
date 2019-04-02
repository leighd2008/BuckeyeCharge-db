import React from 'react';
import { Jumbotron } from 'reactstrap';
import Contact from '../Contact/Contact';
import fieldImage from '../images/mark-duffel-352915-unsplash2.jpg';
import HomeField from '../HomeField/HomeField';
// import Banner from '../Banner/Banner';
// import BC12UTeams from '../images/BC12UTEAMS.png';
import homeImage from '../images/ABPitching.jpg'
import './ABPitching.css';

const ABPitching = () => {
  const contact1="Email: buckeyechargefastpitch @gmail.com"
  const contact2="Phone: 330-606-9887"
  const fieldName="AB Pitching, Hitting and Fitness, LLC"
  const fieldAddress1="2420 Wedgewood Dr"
  const fieldAddress2="Akron, Ohio 44312"
  const googleMapLink="https://goo.gl/maps/sTjniTviwCv"
  
  return (
    <div className="ABPitching" >
      <Jumbotron style={{ backgroundImage: `url(${homeImage})`, width: '40vw', height: '40vw', maxWidth: '600px', maxHeight: '600px', border: 'none' }}> 
      </Jumbotron>
      {/* <div>
        <Banner
          backgroundImage={BC12UTeams}
          teamName='Buckeye Charge 12U Teams'
        />
      </div> */}
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
    </div>
  );
}

export default ABPitching;
