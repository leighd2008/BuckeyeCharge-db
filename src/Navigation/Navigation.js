import React from 'react';
// import { Link } from 'react-dom'
import BCLogo from '../images/BCLogo.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import './Navigation.css';
import W12uImage from '../images/team.jpg';
import homeImage from '../images/softballcrop2.jpg';


export default class Navigation extends React.Component {
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
      <div >
        <Navbar className="navbar navbar-expand-lg navbar-light bg-secondary">
          <NavbarBrand href = "/" >
            <img src={BCLogo}
                width="60"
                height="60"
                className="d-inline-block align-top"
                alt="BC logo" /> <h1 className="d-inline-block align-bottom 5ma"> 
                   Buckeye Charge Fastpitch Softball </h1>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar >
            <Nav className="ml-auto" navbar >
              <NavItem >
                <NavLink tag="h5" href="/" onClick={this.toggle}>
                  <h5 onClick={() => onRouteChange('home', homeImage, '', statement)} > Home </h5> 
                </NavLink>
              </NavItem>
              <NavItem >
                <NavLink tag="h5" href="/" > AB Pitching, < br/> Hitting and < br /> Fitness </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar >
                <DropdownToggle tag="h5" nav caret >Teams </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem >8 u </DropdownItem>
                  <DropdownItem >10 u </DropdownItem>
                  <DropdownItem >11 u </DropdownItem>
                  <DropdownItem >12 u </DropdownItem>
                  <DropdownItem onClick={this.toggle} >
                      <p onClick={() => onRouteChange('Warren12u', W12uImage, 'Warren12u', '')} >Warren 12 u </p>
                  </DropdownItem>
                  <DropdownItem >14 u </DropdownItem>
                  <DropdownItem >16 u </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem > Reset </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <FormGroup >
                <Label for="exampleSearch" > Search </Label>
                <Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
              </FormGroup>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}