import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'react-bootstrap/Image'
import nav_logo from './nav-logo.jpg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap"
import { Home } from './routes/learning/Learning';
import { AboutUS } from './routes/aboutus';


function App() {
  return (
    <Router>
          <div>

            <Navbar  className = "navbarcss"  fixed="top"  expand="lg" variant="dark">

              <Navbar.Brand href="/"><Image src={nav_logo} height = "50px" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/schools">Schools</Nav.Link>
                  <Nav.Link href="/learning">Learning Resource</Nav.Link>
                  <Nav.Link href="/downloads">Downloads</Nav.Link>
                </Nav>
                <Form inline>

                      <Button variant="outline-warning">Login</Button>
                    </Form>
              </Navbar.Collapse>
            </Navbar>


            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <AboutUS />
              </Route>
              <Route path="/schools">
                <Schools />
              </Route>
              <Route path = "/downloads">
                  <Downloads />
               </Route>
              <Route path = "/learning">
                 <learning />
              </Route>
              <Route path = "/login">
                   <login />
              </Route>
              <Route path="/">
                <Home />
              </Route>


            </Switch>
          </div>
        </Router>
  );
}



export default App;



function login(){
return(
<div>login page</div>
)}

function Schools(){
return(
<div>School Page</div>
)}

function Downloads(){
return(
<div>Downloads page</div>
)}
