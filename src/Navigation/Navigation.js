import React from 'react';
import BCLogo from '../images/BCLogo-blk-sml.png';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Navigation.css';
import { Ch16UURLS, C16UURLS, G14UURLS, Y14UURLS, N12UURLS, W12UURLS, G11UURLS, A10UURLS } from '../Warren12U/events';

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
    return (
      <div >
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
                  <p onClick={() => onRouteChange('home')} >
                    <br/> HOME 
                  </p> 
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar >
                <DropdownToggle tag="h6" nav caret ><br/>TEAMS </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => 
                      onRouteChange('Cholley16U', 'Cholley 16U', Ch16UURLS)} >Cholley 16U</p>
                  </DropdownItem>
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => 
                      onRouteChange('Cavanagh16U', 'Cavanagh 16U', C16UURLS)} >Cavanagh 16U</p>
                  </DropdownItem>
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => 
                      onRouteChange('Gardner14U', 'Gardner 14U', G14UURLS)} >Gardner 14U</p>
                  </DropdownItem>
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => 
                      onRouteChange('Yoder14U', 'Yoder 14U', Y14UURLS)} >Yoder 14U</p>
                  </DropdownItem>
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => 
                      onRouteChange('Norman12U', 'Norman 12U', W12UURLS)} >Norman 12U</p>
                  </DropdownItem>
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => 
                    onRouteChange('Warren12U', 'Warren 12U', N12UURLS)} >Warren 12U</p>
                  </DropdownItem>
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => 
                    onRouteChange('Gressman11U', 'Gressman 11U', G11UURLS)} >Gressman 11U</p>
                  </DropdownItem>
                  <DropdownItem onClick={this.toggle} >
                    <p onClick={() => 
                      onRouteChange('Albertson10U', 'Albertson 10U', A10UURLS)} >Albertson10U</p>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavLink tag="h6" href="/" onClick={this.toggle}>
                <p onClick={() => onRouteChange('tournaments')} >
                  <br/> TOURNAMENTS 
                </p> 
              </NavLink>
              <NavLink tag="h6" href="/" onClick={this.toggle}>
                <p onClick={() => onRouteChange('home')} >
                  <br/> SPONSORS 
                </p> 
              </NavLink>
              <NavLink tag="h6" href="/" onClick={this.toggle}>
                <p onClick={() => onRouteChange('training')} >
                  <br/> TRAINING 
                </p> 
              </NavLink>
              <NavLink tag="h6" href="/" onClick={this.toggle}>
                <p onClick={() => onRouteChange('tryouts')} >
                  <br/> TRY-OUTS 
                </p> 
              </NavLink>
              <NavLink tag="h6" href="/" onClick={this.toggle}>
                <p onClick={() => onRouteChange('home')} >
                  AB Pitching,<br/> Hitting <br/>and Fitness 
                </p> 
              </NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation;