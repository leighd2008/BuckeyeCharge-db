import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import homeImage from './images/BCLogo-clr.png';
import Home from './Home/Home'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import TeamPage from './TeamPage/TeamPage';
import TournamentPage from './TournamentPage/TournamentPage';
import Training from './Training/Training';
import TryOuts from './Try-Outs/Try-Outs';

library.add(faArrowRight, faArrowLeft);

const initialState = {
  homeImage: homeImage,
  backgroundImage: homeImage,
  teamName: "",
  route: "home",
  index: 0,
}

class App extends Component {
  constructor(props) {
    super(props)
      this.state = initialState
    }

    onRouteChange = (route, team, eventUrls) => {
      if (route === 'home') {
        this.setState(initialState)
      }
      this.setState({
        route: route,
        homeImage: homeImage,
        teamName: team,
        eventUrls: eventUrls,
      });
    }

  render() {
    const project = () => {
      switch(this.state.route) {
        case "home": return <Home homeImage={this.state.homeImage}/>;
        case "tournaments": return <TournamentPage />;
        case "training": return <Training />;
        case "tryouts": return <TryOuts homeImage={this.state.homeImage}/>;
        case "Warren12U": return <TeamPage backgroundImage={this.state.backgroundImage} teamName={this.state.teamName}  eventUrls={this.state.eventUrls} />;
        case "Cholley16U": return <TeamPage backgroundImage={this.state.backgroundImage} teamName={this.state.teamName}  eventUrls={this.state.eventUrls} />;
        case "Cavanagh16U": return <TeamPage backgroundImage={this.state.backgroundImage} teamName={this.state.teamName} eventUrls={this.state.eventUrls} />;
        case "Gardner14U": return <TeamPage backgroundImage={this.state.backgroundImage} teamName={this.state.teamName} eventUrls={this.state.eventUrls} />;
        case "Yoder14U": return <TeamPage backgroundImage={this.state.backgroundImage} teamName={this.state.teamName} eventUrls={this.state.eventUrls} />;
        case "Norman12U": return <TeamPage backgroundImage={this.state.backgroundImage} teamName={this.state.teamName} eventUrls={this.state.eventUrls} />;
        case "Gressman11U": return <TeamPage backgroundImage={this.state.backgroundImage} teamName={this.state.teamName} eventUrls={this.state.eventUrls} />;
        case "Albertson10U": return <TeamPage backgroundImage={this.state.backgroundImage} teamName={this.state.teamName} eventUrls={this.state.eventUrls} />;
        case "Homan8U": return <TeamPage backgroundImage={this.state.backgroundImage} teamName={this.state.teamName} eventUrls={this.state.eventUrls} />;
        case "Kaisk16U": return <TeamPage backgroundImage={this.state.backgroundImage} teamName={this.state.teamName} eventUrls={this.state.eventUrls} />;
        default: return <h1>No team match</h1>
      }
    }

    return (
      <div className="App">
        <Navigation
          onRouteChange={this.onRouteChange}
        />
        <div>{ project() }</div>

      </div>
    );
  }
}

export default App;
