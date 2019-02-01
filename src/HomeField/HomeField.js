import React from 'react';
import { Card, CardTitle, CardText, CardBody, CardGroup } from 'reactstrap';
import './HomeField.css';

const HomeField = ({ googleMapLink, fieldName, fieldAddress1, fieldAddress2, fieldImage }) => {
  return (
    <Card className="ma3 homefield" style={{ backgroundColor: '#6c757d', 
        borderColor: 'red', borderWidth: '4px', height: '300px', minWidth: '25vw'}}>
      <CardTitle className="tc" tag="h1">Home Field</CardTitle>
      <CardGroup >
        <Card style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>
          <CardBody>
            <CardText tag="h3"><a href={googleMapLink} target="_blank" 
                rel="noopener noreferrer" 
                className="gmap">{fieldName}</a></CardText>
            <CardText tag="h5">{fieldAddress1}</CardText>
            <CardText tag="h5">{fieldAddress2}</CardText>
          </CardBody>
        </Card>
        <Card  style={{ backgroundColor: '#6c757d', 
            borderColor: '#6c757d' }}>
          <CardBody>
            <p>
              <a href={googleMapLink} target="_blank" 
                  rel="noopener noreferrer" 
                  className="gmap">
                  <img src={fieldImage} alt="home field"/>
                    
                  <br/>Click for Directions
              </a>
            </p>
          </CardBody>
        </Card>
      </CardGroup>
    </Card>
  );
};

export default HomeField;
