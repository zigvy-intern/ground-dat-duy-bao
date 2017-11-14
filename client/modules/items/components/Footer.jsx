import React from 'react';
import {Nav,NavItem,Navbar,Glyphicon,Row} from 'react-bootstrap';
const Footer = ({content = () => null }) => (

  <Navbar>
  <Row>
    <Nav>
    <NavItem eventKey={1} href="#">Download App</NavItem>
    <NavItem eventKey={2} href="#">F.A.Q</NavItem>
    <NavItem eventKey={3} href="#">Support</NavItem>
    <NavItem eventKey={4} href="#">Feedback</NavItem>
    </Nav>
    <Nav pullRight>
    <NavItem eventKey={1} href="#"><Glyphicon glyph= "social-facebook"></Glyphicon></NavItem>
    <NavItem eventKey={1} href="#"><Glyphicon glyph= "social-twitter"></Glyphicon></NavItem>
    <NavItem eventKey={1} href="#"><Glyphicon glyph= "social-instagram"></Glyphicon></NavItem>
    </Nav>
  </Row>
  <p> © 2017 Zigvy Inc. </p>
  </Navbar>
);
export default Footer;
