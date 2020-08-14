import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'react-bootstrap/Image'
import nav_logo from './nav-logo.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,	
 
} from "react-router-dom";
import {Navbar, Nav, Form, Button} from "react-bootstrap"
import { Learning } from './routes/learning/Learning';
import { Ejournal } from './routes/ejournal/Ejournal';
import { Ebook } from './routes/ebook/Ebook';



function App() {
  return (
    <Router>
          <div>

            <Navbar  className = "navbarcss"  fixed="top"  expand="lg" variant="dark">

              <Navbar.Brand href="/"><Image src={nav_logo} height = "50px" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
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

                <Route path = "/ejournal" exact component = {Ejournal} />
                <Route path = "/ebook" exact component = {Ebook} />
                <Route path = "/login" exact>
					     	<login />
					</Route>
                <Route path="/" exact component = {Learning} />
            </Switch>
          </div>
         
        </Router>
  );
}
export default App;



