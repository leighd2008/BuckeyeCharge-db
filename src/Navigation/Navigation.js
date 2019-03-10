import React from 'react';
import BCLogo from '../images/BCLogo-blk-sml.png';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Navigation.css';
import W12UImage from '../images/team.jpg';
import W12UUrls from '../Warren12U/events';
import homeImage from '../images/softballcrop2.jpg';


class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        isOpen: false,
    };
}

toggle() {
    this.setState(prevState => ({
        isOpen: !this.state.isOpen,
    }));
}

render() {
    const { onRouteChange } = this.props;
    const statement = "This organization is a benefit corporation in which young women can play competitive fastpitch softball (9u-18u) and develop the skills needed to become well rounded athletes."
    return (
      // <div >
        <Navbar sticky={'top'} className="navbar navbar-expand-lg navbar-light bg-secondary">
          <NavbarBrand href = "/" >
            <img src={BCLogo}
                width="60"
                height="60"
                className="d-inline-block align-top"
                alt="BC logo" /> <h4 className="d-inline-block align-bottom 5ma"> 
                   Buckeye Charge Fastpitch Softball </h4>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar >
            <Nav className="ml-auto" navbar >
              <NavItem >
                <NavLink tag="h6" href="/" onClick={this.toggle}>
                  <p onClick={() => onRouteChange('home', homeImage, '', statement)} >
                    <br/> HOME 
                  </p> 
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar >
                <DropdownToggle tag="h6" nav caret ><br/>TEAMS </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => onRouteChange('Cholley16U', W12UImage, 
                      'Cholley16U', W12UUrls, '')} >Cholley 16U</p>
                  </DropdownItem>
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => onRouteChange('Cavanagh16U', W12UImage, 
                      'Cavanagh16U', W12UUrls, '')} >Cavanagh 16U</p>
                  </DropdownItem>
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => onRouteChange('Gardner14U', W12UImage, 
                      'Gardner14U', W12UUrls, '')} >Gardner 14U</p>
                  </DropdownItem>
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => onRouteChange('Yoder14U', W12UImage, 
                      'Yoder14U', W12UUrls, '')} >Yoder 14U</p>
                  </DropdownItem>
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => onRouteChange('Norman12U', W12UImage, 
                      'Norman12U', W12UUrls, '')} >Norman 12U</p>
                  </DropdownItem>
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => onRouteChange('Warren12U', W12UImage, 
                      'Warren12U', W12UUrls, '')} >Warren 12U</p>
                  </DropdownItem>
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => onRouteChange('Gressman11U', W12UImage, 
                      'Gressman11U', W12UUrls, '')} >Gressamn 11U</p>
                  </DropdownItem>
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => onRouteChange('Albertson10U', W12UImage, 
                      'Albertson10U', W12UUrls, '')} >Albertson10U</p>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem > Reset </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavLink tag="h6" href="/" onClick={this.toggle}>
                <p onClick={() => onRouteChange('home', homeImage, '', statement)} >
                  <br/> TOURNAMENTS 
                </p> 
              </NavLink>
              <NavLink tag="h6" href="/" onClick={this.toggle}>
                <p onClick={() => onRouteChange('home', homeImage, '', statement)} >
                  <br/> SPONSORS 
                </p> 
              </NavLink>
              <NavLink tag="h6" href="/" onClick={this.toggle}>
                <p onClick={() => onRouteChange('home', homeImage, '', statement)} >
                  <br/> TRAINING 
                </p> 
              </NavLink>
              <NavLink tag="h6" href="/" onClick={this.toggle}>
                <p onClick={() => onRouteChange('home', homeImage, '', statement)} >
                  <br/> TRY-OUTS 
                </p> 
              </NavLink>
              <NavLink tag="h6" href="/" onClick={this.toggle}>
                <p onClick={() => onRouteChange('home', homeImage, '', statement)} >
                  AB Pitching,<br/> Hitting <br/>and Fitness 
                </p> 
              </NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      // </div>
    )
  }
}

export default Navigation;