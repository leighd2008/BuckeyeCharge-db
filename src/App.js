import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import homeImage from './images/BCLogo-clr.png';
import Warren12U from './Warren12U/Warren12u';
import Cholley16U from './Cholley16U/Cholley16U';
import Cavanagh16U from './Cavanagh16U/Cavanagh16U';
import Gardner14U from './Gardner14U/Gardner14U';
import Yoder14U from './Yoder14U/Yoder14U';
import Norman12U from './Norman12U/Norman12U';
import Gressman11U from './Gressman11U/Gressman11U';
import Albertson10U from './Albertson10U/Albertson10U';
import Home from './Home/Home'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowRight, faArrowLeft);

const initialState = {
  homeImage: homeImage,
  backgroundImage: homeImage,
  teamName: "",
  statement: "This organization is a benefit corporation in which young women can play competitive fastpitch softball (9u-18u) and develop the skills needed to become well rounded athletes.",
  route: "home"
}


class App extends Component {
  constructor(props) {
    super(props)
      this.state = initialState
    }

    onRouteChange = (route, image, team, eventUrls, statement) => {
      if (route === 'home') {
        this.setState(initialState)
      }
      this.setState({
        route: route,
        homeImage: homeImage,
        backgroundImage: image,
        teamName: team,
        eventUrls: eventUrls,
        statement: statement,
      });
    }

  render() {
    const project = () => {
      switch(this.state.route) {
        case "home": return <Home homeImage={this.state.homeImage}/>;
        case "Warren12U": return <Warren12U backgroundImage={this.state.backgroundImage} teamName={this.state.teamName} statement={this.state.statement} eventUrls={this.state.eventUrls} />;
        case "Cholley16U": return <Cholley16U backgroundImage={this.state.backgroundImage} teamName={this.state.teamName} statement={this.state.statement} eventUrls={this.state.eventUrls} />;
        case "Cavanagh16U": return <Cavanagh16U backgroundImage={this.state.backgroundImage} teamName={this.state.teamName} statement={this.state.statement} eventUrls={this.state.eventUrls} />;
        case "Gardner14U": return <Gardner14U backgroundImage={this.state.backgroundImage} teamName={this.state.teamName} statement={this.state.statement} eventUrls={this.state.eventUrls} />;
        case "Yoder14U": return <Yoder14U backgroundImage={this.state.backgroundImage} teamName={this.state.teamName} statement={this.state.statement} eventUrls={this.state.eventUrls} />;
        case "Norman12U": return <Norman12U backgroundImage={this.state.backgroundImage} teamName={this.state.teamName} statement={this.state.statement} eventUrls={this.state.eventUrls} />;
        case "Gressman11U": return <Guessamn11U backgroundImage={this.state.backgroundImage} teamName={this.state.teamName} statement={this.state.statement} eventUrls={this.state.eventUrls} />;
        case "Albertson10U": return <Albertson10U backgroundImage={this.state.backgroundImage} teamName={this.state.teamName} statement={this.state.statement} eventUrls={this.state.eventUrls} />;
        default: return <h1>No team match</h1>
      }
    }

    return (
      <div className="App">
        <Navigation
          onRouteChange={this.onRouteChange}
        />
        {/* { this.state.route === 'home'
          ?<div>
            <Home homeImage={this.state.homeImage}/>
          </div>
          : <Warren12U
            backgroundImage={this.state.backgroundImage}
            teamName={this.state.teamName}
            statement={this.state.statement}
            eventUrls={this.state.eventUrls}
          />
        } */}
        <div>{ project() }</div>

      </div>
    );
  }
}

export default App;
