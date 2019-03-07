import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import './Contact.css';

const Contact = ({ contact1, contact2 }) => {
  return (
    <div >
      <Card className="contact" >
        <CardTitle className="tc" tag="h1">Contact Information</CardTitle>
        <CardText tag="h2">{contact1}</CardText>
        <CardText className="pa2" tag="h2">{contact2}</CardText>
      </Card>
    </div>
  );
};

export default Contact;
