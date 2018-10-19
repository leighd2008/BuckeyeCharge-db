import React, { Component } from 'react';
import fieldImage from '../images/mark-duffel-352915-unsplash2.jpg';
import Contact from '../Contact/Contact';
import HomeField from '../HomeField/HomeField';
import TeamRoster from '../TeamRoster/TeamRoster';
import {roster} from './roster'
import TeamEvents from '../TeamEvents/TeamEvents';

import './Warren12u.css';

import Banner from '../Banner/Banner';

class Warren12u extends Component {
  render() {
    const contact1="Head Coach: Rich Meikle (richmeikle@gmail.com)"
    const contact2="Assistant Coach: Dennise Brunke-Allen (deebbmt@aol.com)"
    const fieldName="Johnson Community Center"
    const fieldAddress1="800 Gillmer Rd"
    const fieldAddress2="Leavittsburg, Ohio 44430"
    const googleMapLink="https://goo.gl/maps/TSZ2T6Ti4oo"
    
    console.log(this.props.eventUrls)

    return (
      <div className="App">
        <div className='lgscreen' >
          <Contact contact1={contact1} contact2={contact2} />
          <Banner
            backgroundImage={this.props.backgroundImage}
            teamName={this.props.teamName}
            statement={this.props.statement}
          />
          <HomeField
            fieldName={fieldName}
            fieldAddress1={fieldAddress1}
            fieldAddress2={fieldAddress2}
            googleMapLink={googleMapLink}
            fieldImage={fieldImage}
          />
        </div>
        <div className='lgscreen' >
            <TeamRoster roster={roster} />
            <TeamEvents eventUrls={this.props.eventUrls} />
        </div>
        <div className='smscreen' >
          <Banner
            backgroundImage={this.props.backgroundImage}
            teamName={this.props.teamName}
            statement={this.props.statement}
          />
          <Contact contact1={contact1} contact2={contact2} />
          <HomeField className='homefieldsm'
            fieldName={fieldName}
            fieldAddress1={fieldAddress1}
            fieldAddress2={fieldAddress2}
            googleMapLink={googleMapLink}
            fieldImage={fieldImage}
          />
          <TeamRoster roster={roster} />
          <TeamEvents eventUrls={this.props.eventUrls}/>
        </div>
      </div>
    );
  }
}

export default Warren12u;
