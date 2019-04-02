import React from 'react';
import { Card, CardText, CardBody, Jumbotron } from 'reactstrap';
import Contact from '../Contact/Contact';
import fieldImage from '../images/mark-duffel-352915-unsplash2.jpg';
import HomeField from '../HomeField/HomeField';

const TryOuts = ({ homeImage }) => {
  const contact1="Email: buckeyechargefastpitch @gmail.com"
  const contact2="Phone: 740-319-1727"
  const fieldName="Jedd Park"
  const fieldAddress1="2275 Pickle Rd"
  const fieldAddress2="Akron, Ohio 44312"
  const googleMapLink="https://goo.gl/maps/a9NZ6ZDooJm"
  
  return (
    <div className="App">
      <Jumbotron style={{ backgroundImage: `url(${homeImage})`, width: '40vw', height: '40vw', maxWidth: '600px', maxHeight: '600px', border: 'none' }}> 
      </Jumbotron>
      <div>
      <Card style={{ backgroundColor: '#6c757d00', borderColor: '#6c757d00' }}>
          <CardBody>
            <CardText tag="h2">Try-outs for the 2019-2020 season have not been scheduled. Once the schedule is set, it will be posted here.</CardText>
          </CardBody>
        </Card>
      </div>
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

export default TryOuts;
