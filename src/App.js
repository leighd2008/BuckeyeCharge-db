import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import homeImage from './images/softballcrop2.jpg';
import Warren12u from './Warren12u/Warren12u';
import Home from './Home/Home'

const initialState = {
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
        backgroundImage: image,
        teamName: team,
        eventUrls: eventUrls,
        statement: statement,
      });
    }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Navigation
          onRouteChange={this.onRouteChange}
        />
        { this.state.route === 'home'
          ?<div>
            <Home backgroundImage={this.state.backgroundImage}
              teamName={this.state.teamName}
              statement={this.state.statement}
            />
          </div>
          : <Warren12u
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
