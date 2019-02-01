import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import './Contact.css';

const Contact = ({ contact1, contact2 }) => {
  return (
    <div >
      <Card className="ma3 contact" style={{ backgroundColor: '#6c757d', 
      borderColor: 'red', borderWidth: '4px', minWidth: '25vw' }}>
        <CardTitle className="tc" tag="h1">Contact Information</CardTitle>
        <CardText tag="h4">{contact1}</CardText>
        <CardText className="pa2" tag="h4">{contact2}</CardText>
      </Card>
    </div>
  );
};

export default Contact;
