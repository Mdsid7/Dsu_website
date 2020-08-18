import React from 'react';
import Classroom from './Classroom.png'
import Knimbus from './KNIMBUS.png'
import Cds from './Cds.png'
import Corporate from './Corporate.png'
import Access from './Access.jpg'
import Nptl from './nptl.jpg'
import Dspace from './Dspace.png'
import link from './Link.png'
import Ebook from './Ebook.png'
import National from './national.png'
import Opac from './OPAC.png'
import Ejournals from './ejournals.jpg'
import Moodle from './Moodle.jpeg';
import Database from './database.png';
import Digimat from './digimat.jpeg';
import {Link,} from "react-router-dom";
import {Image } from 'react-bootstrap'

import './Learning.css';

export class Learning extends React.Component {

    render() {
      return (
            <>
        <br></br>  
        <br></br>
        <div className="App"></div>
      <div className="App-header">
        
        <p>
          Learning Resources
        </p>

       </div> 
       <br></br>
       <Link to="/ebook">
     <Image src={Classroom} alt = "Classroom" className ="home-learning-image" fluid/>
     </Link>
     
     <Link to="/ebook">
     <Image src={Cds} alt = "Cds" className ="home-learning-image" fluid />
     </Link>

     <Link to="/ebook">
     <Image src={Corporate} alt = "Corporate" className ="home-learning-image" fluid />
     </Link>
    
     <Link to="/ebook">
     <Image src={Access} alt = "Access" className ="home-learning-image"fluid />
     </Link>

     <a href= 'https://new.knimbus.com/#/'>
     <Image src={Knimbus} alt = "Knimbus" className ="home-learning-image"fluid /> 
     </a>
     
     <a href= 'https://nptel.ac.in/'>
     <Image src={Nptl} alt = "Nptl" className ="home-learning-image"fluid />
     </a>
     
     <a href= 'https://duraspace.org/dspace/'>
     <Image src={Dspace} alt = "Dspace" className ="home-learning-image"fluid />
     </a>

     <Link to="/ebook">
     <Image src={link} alt = "Link" className ="home-learning-image"fluid />
     </Link>

     <Link to="/ebook">
     <Image src={Ebook} alt = "Ebook" className ="home-learning-image"fluid />
     </Link>

     <a href= 'https://ndl.iitkgp.ac.in/'>
     <Image src={National} alt = "National" className ="home-learning-image"fluid />
     </a>

     <Link to="/ebook">
     <Image src={Opac} alt = "Opac" className ="home-learning"fluid />
     </Link>

     <Link to="/ejournal">
     <Image src={Ejournals} alt = "Ejournals" className ="home-learning-image"fluid />
     </Link>

     <a href= 'https://moodle.org/'>
     <Image src={Moodle} alt = "Moodle" className ="home-learning-image"fluid />
     </a>

     <a href= 'https://moodle.org/'>
     <Image src={Database} alt = "database" className ="home-learning"fluid />
     </a>

     <a href= 'https://new.knimbus.com/#/'>
     <Image src={Digimat} alt = "digimat" className ="home-learning-image"fluid />
     </a>

  </>         
        )
        
    }
}
export default Learning;


