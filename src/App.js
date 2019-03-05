import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import homeImage from './images/BCLogo-clr.png';
import Warren12u from './Warren12u/Warren12u';
import { Jumbotron } from 'reactstrap';
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
    return (
      <div className="App">
        <Navigation
          onRouteChange={this.onRouteChange}
        />
        <Jumbotron style={{ backgroundImage: `url(${homeImage})`, width: '40vw', height: '40vw', maxWidth: '600px', maxHeight: '600px', border: 'none' }}> 
        </Jumbotron>
        { this.state.route === 'home'
          ?<div>
            <Home homeImage={this.state.homeImage}/>
          </div>
          : <Warren12u
            homeImage={this.state.homeImage}
            backgroundImage={this.state.backgroundImage}
            teamName={this.state.teamName}
            statement={this.state.statement}
            eventUrls={this.state.eventUrls}
          />
        }

      </div>
    );
  }
}

export default App;
