import React from 'react';
import './Ejournal.css';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router-dom';
import { Tab } from './tab/ Tab.js';

const styles = {
    fontFamily: 'sans-serif',
  };
  
 export class Ejournal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {active: 'aTab'};
    }
    render() {
  
      const  content = {
        aTab: <div className='Rectangle' >
              <br></br><br></br> 
              <header   className='Box'>   
              <a href= "http://globalimpactfactor.com/iosr-journal-of-mechanical-and-civil-engineering/">
              <h1 className='text'>  
              IOSR Journal of Mechanical & Civil Engineering  
              </h1></a>
              </header>
              <br></br>
              <header   className='Box'>
              <h1 className='text'> 
              Indian Journal of Engineering Materials Science
              </h1>  
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Journal of Manufacturing Engineering
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              IOEI:SERIES-C (ME,PROD,MARIN)
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Indian Foundary Journal
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Journal of Mines, Metals & Fuels
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Journal of Mechanical Engineering
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Journal of Machine Design
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Jnl. of Experimental & Allied Mechanics
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Jnl. of Production Res & Management
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Jnl. of Material & Metallurgical Eng.
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Jnl. of Mechatronics and Automation
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Trends in Machine design
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Manufacturing Technology today
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Indian Journal of fluid Dynamics
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Indian Jnl. of Mechanics & Solids
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              JP Jnl. of Heat and Mass Transfer
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Int Jnl. of Thermal Engineering
              </h1> 
              </header>
        
        </div>,              
        bTab: <div className='Rectangle'>
              <br></br><br></br> 
              <header   className='Box'>    
              <h1 className='text'>  
              Journal of commmunication Engineering systems  
              </h1>
              </header>
              <br></br>
              <header   className='Box'>
              <h1 className='text'> 
              Journal on Communication Engineering Systems
              </h1>  
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Electronic Devices
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
            IOEI:Series-B Electrical Electronic communication
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Journal of electronics design Technology
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              IOSR Journal of Electronics & Communication
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Journal of Wireless Communication
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Int. Journal of Digital ELECTRONICS
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Jnl. Of Solid State, Electronics & De
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Current trends in Signal Processing
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Int. journal of Electronics & Comm. Eng. & tech.
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Journal of Microcircuits & Electronics
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              IUP JNL. OF ELECTRICAL & ELECTR.EN
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              IUP journal of Electrical Electronics
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Electronics Maker
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              International journal of Microelectronics & VLSI design
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              International journal of Electronic N.W.Device
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Advances in Wireless & Mobile Communications
              </h1> 
              </header>
        </div>,
        cTab: <div className='Rectangle1'>
              <br></br><br></br> 
              <header   className='Box'>    
              <h1 className='text'>  
              Journal of E-Technology (JET)  
              </h1>
              </header>
              <br></br>
              <header   className='Box'>
              <h1 className='text'> 
              Journal of Networking Technology
              </h1>  
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Journal of Intelligent Computing
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Journal of computer Science
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              IOSR journal of Computer Engineering 
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Journal on Software Engineering
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Int. journal of Web Application
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Int. journal of Computing Linguistic Rese
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Jnl of Information Security Res
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Journal of Data Processing 
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Progress in Computing Application 
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Int. journal of Inf. Technology & mgt Technology
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Int. journal of Computer Eng. & Tech.
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Journal of Software Engineering
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Int. journal of Graphics & Multimedia 
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Int. journal of Computer Application
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Journal of Software Quality Assurance
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Journal of Internet Research
              </h1> 
              </header>
              <br></br>
              <header   className='Box'>    
              <h1 className='text'>  
              Int. journal of Information Technology  
              </h1>
              </header>
              <br></br>
              <header   className='Box'>
              <h1 className='text'> 
              Jnl. of Computer Engineering & Technology
              </h1>  
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Jnl. of Computer Technology & Application
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Jnl. of Operating Systems Development & Training
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Journal of Image Processing & Pat Rec. P
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              IUP Journal of Soft Skills
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              IUP Journal of Information Technology
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              IUP Journal of Computer Sciences
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Indian Journal of Computing & High Speed Networks
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Indian Journal of Mobile Communication & Networks
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Journal of Intelligent Learning Systems & Applications
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Indian Journal of Advance Computer & VLSI Design
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              International Journal of Internet & Computer Security
              </h1> 
              </header>
        </div>,
        dTab: <div className='Rectangle2'>
              <br></br><br></br> 
              <header   className='Box'>    
              <h1 className='text'>  
              Pramana-journal of Physics  
              </h1>
              </header>
              <br></br>
              <header   className='Box'>
              <h1 className='text'> 
              Indian Journal of pure and applied physics
              </h1>  
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Indian Journal of Chemistry-SECT. A
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              IOSR Journal of applied chesmistry
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              IOSR journal of Mathematics 
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Proceedings (Mathematical science)
              </h1> 
              </header>
        </div>,
        eTab: <div className='Rectangle3'>
              <br></br><br></br> 
              <header   className='Box'>    
              <h1 className='text'>  
              Journal of Computer Hardware Engineering 
              </h1>
              </header>
              <br></br>
              <header   className='Box'>
              <h1 className='text'> 
              Embedded for You
              </h1>  
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Indian journal of Embedded System in Eng. Research
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Intl. Journal of Embedded System & Open Source
              </h1> 
              </header>
              <br></br>
              <header className='Box'>
              <h1 className='text'> 
              Images on Embedded System 
              </h1> 
              </header>
        </div>,
        fTab: <div className='Rectangle4'>
              <br></br><br></br> 
              <header   className='Box'>    
              <h1 className='text'>  
              University News  
              </h1>
              </header>
              <br></br>
              <header   className='Box'>
              <h1 className='text'> 
              Manufacturing Technology Today (CMTI Journal)
              </h1>  
              </header>
        </div>,
    };
      return (
            <>
        <br></br>  
        <br></br>
        <div className="App"></div>
      <div className="App-header">
        
        <p>
          E-JOURNAL
        </p>
        
        </div>
        <br></br>
        <br></br>
        <div style={styles}>

        <Tab
          active={this.state.active}
          onChange={active => this.setState({active})}
        >
          <div key="aTab">MECHANICAL  </div>
          <div key="bTab">ELECTRONICS & COM </div>
          <div key="cTab">COMPUTER SCIENCE</div>
          <div key="dTab">BASIC SCIENCE</div>
          <div key="eTab">EMBEDDED SYSTEMS</div>
          <div key="fTab">ADDITIONAL</div>
        </Tab>
        
       
      
    <br></br>
    <p>{content[this.state.active]}</p>
    </div>
     
      <Switch>
              <Route path="/tab">
                <Tab />
              </Route>
        </Switch> 
       
  </>   
  
        )
        
    }
}
export default Ejournal;
        