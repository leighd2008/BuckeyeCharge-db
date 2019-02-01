import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import fieldImage from '../images/mark-duffel-352915-unsplash2.jpg';
import HomeField from '../HomeField/HomeField';
import './Home.css';

const Home = ({ backgroundImage, teamName, statement }) => {
  const contact1="Email: buckeyechargefastpitch@gmail.com"
  const contact2="Phone: 740-319-1727"
  const fieldName="Jedd Park"
  const fieldAddress1="2275 Pickle Rd"
  const fieldAddress2="Akron, Ohio 44312"
  const googleMapLink="https://goo.gl/maps/a9NZ6ZDooJm"
  return (
    <div className="App">
      <div className='lgscreen' >
        <Contact contact1={contact1} contact2={contact2} />
        <Banner
          backgroundImage={backgroundImage}
          teamName={teamName}
          statement={statement}
        />
        <HomeField
          fieldName={fieldName}
          fieldAddress1={fieldAddress1}
          fieldAddress2={fieldAddress2}
          googleMapLink={googleMapLink}
          fieldImage={fieldImage}
        />
      </div>
      <div className='smscreen' >
        <Banner
          backgroundImage={backgroundImage}
          teamName={teamName}
          statement={statement}
        />
        <Contact contact1={contact1} contact2={contact2} />
        <HomeField className='homefieldsm'
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

export default Home;
