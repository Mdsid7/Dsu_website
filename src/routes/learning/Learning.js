import React from 'react';
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
import Moodle from './Moodle.jpeg';
import database from './database.png';
import digimat from './digimat.jpeg';

import {Image } from 'react-bootstrap'

import './Learning.css';

export class Learning extends React.Component {

    render() {
      return (
            <>
        <br></br>  
        <br></br>
        <div className="App">
      <header className="App-header">
        
        <p>
          LEARNING RESOURCES
        </p>

        </header>
      <a href= 'https://stackoverflow.com/questions/47839856/image-onclick-failing-in-react/52554318'>
     <Image src={Classroom} alt = "Classroom" className ="home-learning-image" fluid/>
     </a>
     
     <a href= 'https://www.microsoft.com/en-in/microsoft-365/access'>
     <Image src={Cds} alt = "Cds" className ="home-learning-image" fluid />
     </a>

     <a href= 'https://new.knimbus.com/#/'>
     <Image src={Corporate} alt = "Corporate" className ="home-learning-image" fluid />
     </a>
     <a href= 'https://www.microsoft.com/en-in/microsoft-365/access'>
     <Image src={Access} alt = "Access" className ="home-learning-image"fluid />
     </a>


     <a href= 'https://new.knimbus.com/#/'>
     <Image src={Knimbus} alt = "Knimbus" className ="home-learning-image"fluid /> 
     </a>
     
     <a href= 'https://nptel.ac.in/'>
     <Image src={Nptl} alt = "Nptl" className ="home-learning-image"fluid />
     </a>
     
     <a href= 'https://duraspace.org/dspace/'>
     <Image src={Dspace} alt = "Dspace" className ="home-learning-image"fluid />
     </a>

     <a href= 'https://new.knimbus.com/#/'>
     <Image src={Linki} alt = "Link" className ="home-learning-image"fluid />
     </a>

     <a href= 'https://new.knimbus.com/#/'>
     <Image src={Ebook} alt = "Ebook" className ="home-learning-image"fluid />
     </a>

     <a href= 'https://ndl.iitkgp.ac.in/'>
     <Image src={National} alt = "National" className ="home-learning-image"fluid />
     </a>

     <a href= 'https://new.knimbus.com/#/'>
     <Image src={Opac} alt = "Opac" className ="home-learning"fluid />
     </a>

     <a href= '/Ejournals'>
     <Image src={Ejournals} alt = "Ejournals" className ="home-learning-image"fluid />
     </a>

     <a href= 'https://moodle.org/'>
     <Image src={Moodle} alt = "Moodle" className ="home-learning-image"fluid />
     </a>

     <a href= 'https://moodle.org/'>
     <Image src={database} alt = "database" className ="home-learning"fluid />
     </a>

     <a href= 'https://new.knimbus.com/#/'>
     <Image src={digimat} alt = "digimat" className ="home-learning-image"fluid />
     </a>

    </div> 
  </>         
        )
        
    }
}
export default Learning;


