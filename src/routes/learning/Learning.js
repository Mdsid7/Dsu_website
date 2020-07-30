import React from 'react';
import home from './home.jpeg';
import about from './home-about.png';
import Classroom from './Classroom.png'
import Knimbus from './KNIMBUS.png'
import Cds from './Cds.png'
import Corporate from './Corporate.png'
import Access from './Access.jpg'
import Nptl from './nptl.jpg'
import Dspace from './Dspace.png'
import Linki from './Link.png'
import Ebook from './Ebook.png'
import National from './national.png'
import Opac from './OPAC.png'
import Ejournals from './ejournals.jpg'
import apsci from './applied science.jpg';
import arts from './arts.jpg';
import commerce from './commerce and managment.jpeg';
import health from './health science.jpg';

import eng from './Engineering.png'
import {Image,Button,Row,Col,Container,Media} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Learning.css';

export class Home extends React.Component {
    render() {
     
      return (
            <>
            <div className="container-fluid home-first-section">
                <Image src={home} className="home-bg-img" />
                <h1 className ="welcoMessageCss"> WELCOME TO DSU DIGITAL LIBRARY</h1>
            </div>
            <Container fluid>
                <Row className = "home-about">
                
                
                <Col lg={6} md={12} xs={12}>
                <Image   src={about} alt="" fluid/>
                </Col>
                
                
                <Col lg={6} md={12} xs={12}>
                    <h3>About DSU Digital Library</h3>
                    <p >Books are chief instrument of Education and Library is center of intellectual life so the Dayananda Sagar University is proud of good and comprehensive University Library with most modern facilities catering to the academic needs of the students and teaching community. The Library has a huge collection of books, along with CD's and DVD's apart from latest Journals and Periodicals, along with this access to e-resources is also available through the Digital Library 'Think Centre' systems. DSU Digital Library Provides E-resources and other digital library services for users in a single search point.<br/><br/> <Button variant="warning">Read More</Button>{' '}</p>
                </Col>
                
                </Row>
            </Container>
         
            <Container fixed="true" >
                <div className="home-school-Recatngle">
                    <h1 className ="school_text">OUR SCHOOLS</h1>
                    <h3 className ="school_text">CHECK OUT ALL OUR PROFESSIONAL COURSES HERE</h3>
                </div>
                <Row>
                    <Col lg={2} md={12} xs={12}>
                        <Image src={apsci} alt = "Applied Science" className ="home-school-image" fluid />
                        <h5 >Applied Science</h5>
                        <Button  href="/schools" >Learn More</Button>
                    </Col>
                    <Col lg={2} md={12} xs={12}>
                        <Image src={arts} alt = "Arts and humanities" className ="home-school-image"fluid />
                        <h5 >Arts and Humanities</h5>
                        <Button  href="/schools" >Learn More</Button>
                    </Col>
                    <Col lg={2} md={12} xs={12}>
                        <Image src={commerce} alt = "Comerce" className ="home-school-image"fluid />
                        <h5 >Commerce</h5>
                        <Button  href="/schools" >Learn More</Button>
                    </Col>
                    <Col lg={2} md={12} xs={12}>
                        <Image src={health} alt = "Health Science" className ="home-school-image"fluid />
                        <h5 >Health Science</h5>
                        <Button  href="/schools" >Learn More</Button>
                    </Col>
                    <Col lg={2} md={12} xs={12}>
                        <Image src={eng} alt = "Engineering" className ="home-school-image" fluid />
                        <h5 >Engineering</h5>
                        <Button  href="/schools" >Learn More</Button>
                    </Col>

                </Row>
                <Switch>
              <Route path="/schools">
                <Schools />
              </Route>
            </Switch>
            </Container>
       <br/>
       <br/>
        
        <div className="App">
      <header className="App-header">
        
        <p>
          Learning Resources
        </p>
       
      </header>
     <Image src={Classroom} alt = "Classroom" className ="home-learning-image" fluid/>
     <Image src={Cds} alt = "Cds" className ="home-learning-image"fluid />
     <Image src={Corporate} alt = "Corporate" className ="home-learning-image"fluid />
     <Image src={Access} alt = "Access" className ="home-learning-image"fluid />
     <Image src={Knimbus} alt = "Knimbus" className ="home-learning-image"fluid />
     <Image src={Nptl} alt = "Nptl" className ="home-learning-image"fluid />
     <Image src={Dspace} alt = "Dspace" className ="home-learning-image"fluid />
     <Image src={Linki} alt = "Link" className ="home-learning-image"fluid />
     <Image src={Ebook} alt = "Ebook" className ="home-learning-image"fluid />
     <Image src={National} alt = "National" className ="home-learning-image"fluid />
     <Image src={Opac} alt = "Opac" className ="home-learning"fluid />
     <Image src={Ejournals} alt = "Ejournals" className ="home-learning-image"fluid />
    </div> 
    
   </>         
        )
        
    }
}
function Schools(){
  return(
  <div>School Page</div>
  )}
