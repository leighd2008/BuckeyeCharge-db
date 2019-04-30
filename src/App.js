import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
import ABPitching from './ABPitching/ABPitching';

library.add(faArrowRight, faArrowLeft);

const initialState = {
  homeImage: homeImage,
  backgroundImage: homeImage,
  // teamName: "",
  route: "home",
  // index: 0,
  // team: '',
  eventUrls: '',
}

class App extends Component {
  constructor(props) {
    super(props)
      this.state = initialState
    }

    onRouteChange = (route, eventUrls) => {
      if (route === 'home') {
        this.setState(initialState)
      } else {
        this.setState({
          route: route,
          homeImage: homeImage,
          eventUrls: eventUrls,
        });
        console.log(eventUrls)
      }
    }

  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <Navigation onRouteChange={this.onRouteChange} />
          <Route exact path="/" component={() => <Home homeImage={this.state.homeImage} />} />
          <Switch>
            <Route exact path="/tournaments" component={() => <TournamentPage />} />
            <Route exact path="/training" component={() => <Training />} />
            <Route exact path="/tryouts" component={() => <TryOuts homeImage={this.state.homeImage}/>} />
            <Route exact path="/Team/Meikle12U" component={() => <TeamPage route={'Meikle12U'} eventUrls={this.state.eventUrls}/>} />
            <Route exact path="/Team/Cholley16U" component={() => <TeamPage route={'Cholley16U'} eventUrls={this.state.eventUrls} />} />
            <Route exact path="/Team/Cavanagh15U" component={() => <TeamPage route={'Cavanagh15U'} eventUrls={this.state.eventUrls} />} />
            <Route exact path="/Team/Gardner13U" component={() => <TeamPage route={'Gardner13U'} eventUrls={this.state.eventUrls} />} />
            <Route exact path="/Team/Yoder14U" component={() => <TeamPage route={'Yoder14U'} eventUrls={this.state.eventUrls} />} />
            <Route exact path="/Team/Norman12U" component={() => <TeamPage route={'Norman12U'} eventUrls={this.state.eventUrls} />} />
            <Route exact path="/Team/Gressman11U" component={() => <TeamPage route={'Gressman11U'} eventUrls={this.state.eventUrls} />} />
            <Route exact path="/Team/Albertson10U" component={() => <TeamPage route={'Albertson10U'} eventUrls={this.state.eventUrls} />} />
            <Route exact path="/Team/Homan8U" component={() => <TeamPage route={'Homan8U'} eventUrls={this.state.eventUrls} />} />
            <Route exact path="/Team/Kaisk16U" component={() => <TeamPage route={'Kaisk16U'} eventUrls={this.state.eventUrls} />} />
            <Route exact path="/abpitching" component={() => <ABPitching />} />
          </Switch>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
