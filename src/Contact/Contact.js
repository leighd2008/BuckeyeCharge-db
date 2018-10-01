import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import './Contact.css';

const Contact = (props) => {
  return (
    <div >
      <Card className="ma3 contact" style={{ backgroundColor: '#6c757d', borderColor: 'red', borderWidth: '4px', minWidth: '29vw' }}>
        <CardTitle className="tc" tag="h1">Contact Information</CardTitle>
        <CardText tag="h4">{props.contact1}</CardText>
        <CardText tag="h4">{props.contact2}</CardText>
      </Card>
    </div>
  );
};

export default Contact;
