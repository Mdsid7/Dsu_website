import React from 'react';
import './Ebook.css' ;
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router-dom';
import { Table}  from 'react-bootstrap';
import { Tab } from '../ejournal/tab/ Tab';
const styles = {
  fontFamily: 'sans-serif',
};

export class Ebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: 'aTab'};
  }
  render() {
    const content = {
      aTab: 
      <Table striped bordered hover variant="dark" className = "cd-table" >
      <thead>
          <tr>
              <th>Sl. No.</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Edition</th>
              <th>Pages</th>
              <th>Remarks</th>
          </tr>
      </thead>
      <tbody>
      <tr>
            <td>1</td>
            <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
            <td class="text-white">Android app development in android </td></a>
            <td>J Paul cardle</td>		
            <td>Manchester Academics</td>
            <td>1st Ed.</td>
            <td>202</td>
            <td></td>
          </tr>
          <tr>
              <td>2</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Beginning Java Script </td></a>
              <td>Wilton Paul</td>		
              <td>Wiley</td>
              <td>4th Ed.</td>
              <td>793</td>
              <td></td>
          </tr>
          <tr>
              <td>3</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Computer networks and Internets</td></a>
              <td>Douglas E Corner</td>		
              <td>Pearson</td>
              <td>6th Ed.</td>
              <td>637</td>
              <td></td>
          </tr>
          <tr>
              <td>4</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Cryptography and Network Security Principles and Practice</td></a>
              <td>William Stallings</td>		
              <td>Prentice Hall</td>
              <td>5th Ed.</td>
              <td>900</td>
              <td></td>
          </tr>
          <tr>
              <td>5</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Data structure algorithm</td></a>
              <td>Sartaj Sahni</td>		
              <td>University press</td>
              <td>2th Ed.</td>
              <td>826</td>
              <td></td>
          </tr>
          <tr>
              <td>6</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">High Performance Computing</td></a>
              <td>Charles Severance</td>		
              <td>Connexinos rice university</td>
              <td></td>
              <td>294</td>
              <td></td>
          </tr>
          <tr>
              <td>7</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">iPhone iOS4XC4 Essentials Preview</td></a>
              <td></td>		
              <td></td>
              <td>4th Ed.</td>
              <td>55</td>
              <td></td>
          </tr>
          <tr>
              <td>8</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Object oriented software engineering</td></a>
              <td>Stephan R. Schach</td>		
              <td>McGraw Hill</td>
              <td></td>
              <td>578</td>
              <td></td>
          </tr>
          <tr>
              <td>9</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Programming google app engine</td></a>
              <td>Dan Sanderson</td>		
              <td>O'Reilly</td>
              <td>2nd Ed.</td>
              <td>538</td>
              <td></td>
          </tr>
          <tr>
              <td>10</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Security Guide to network security fundamental</td></a>
              <td>Mark Ciampa</td>		
              <td>Cengage Lear</td>
              <td>4th Ed.</td>
              <td>660</td>
              <td></td>
          </tr>
          <tr>
              <td>11</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">The Specifications of Complex Systems</td></a>
              <td>B Cohen</td>		
              <td>Addison Wesley</td>
              <td></td>
              <td>169</td>
              <td></td>
          </tr>
          <tr>
              <td>12</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Ubuntu Linux Bible</td></a>
              <td>William von Hagen</td>		
              <td>Wiley</td>
              <td>3rd Ed.</td>
              <td>1226</td>
              <td></td>
          </tr>
          <tr>
              <td>13</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">UNIX System administrator A Beginner Guide</td></a>
              <td>Steven Maxwell</td>		
              <td>McGraw-Hill</td>
              <td></td>
              <td>697</td>
              <td></td>
          </tr>
          </tbody>
        </Table> ,
      bTab: 
      <Table striped bordered hover variant="dark" className = "cd-table" >
      <thead>
          <tr>
              <th>Sl. No.</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Edition</th>
              <th>Pages</th>
              <th>Remarks</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>1</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">An introduction to business research methods</td></a>
              <td>Joe Martelli</td>		
              <td>BookBoon</td>
              <td>2nd Ed.</td>
              <td>137</td>
              <td></td>
          </tr>
          <tr>
              <td>2</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">International Financial reporting</td></a>
              <td>William von Hagen</td>		
              <td>BookBoon</td>
              <td>1st Ed.</td>
              <td>54</td>
              <td></td>
          </tr>
          <tr>
              <td>3</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Managing the human resource in the 21st Century</td></a>
              <td>Zorlu Senyucel</td>		
              <td>BookBoon</td>
              <td></td>
              <td>77</td>
              <td></td>
          </tr>
          </tbody>
        </Table> ,
      cTab: 
      <Table striped bordered hover variant="dark" className = "cd-table" >
      <thead>
          <tr>
              <th>Sl. No.</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Edition</th>
              <th>Pages</th>
              <th>Remarks</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>1</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Design and simulation of two stroke engines</td></a>
              <td>Gordon P. Blair</td>		
              <td>Society of Automotive Engineers, Inc</td>
              <td></td>
              <td>641</td>
              <td></td>
          </tr>
          <tr>
              <td>2</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Design through Verilog HDL </td></a>
              <td>Padmanabhan</td>		
              <td>John Wiley and sons</td>
              <td></td>
              <td>461</td>
              <td></td>
          </tr>
          <tr>
              <td>3</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Wireless sensor Networks</td></a>
              <td>Kazem Sohraby</td>		
              <td>John Wiley and sons</td>
              <td></td>
              <td>326</td>
              <td></td>
          </tr>
          </tbody>
        </Table> ,
      dTab: 
      <Table striped bordered hover variant="dark" className = "cd-table" >
      <thead>
          <tr>
              <th>Sl. No.</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Edition</th>
              <th>Pages</th>
              <th>Remarks</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>1</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Beginning Java Script</td></a>
              <td>Wilton Paul</td>		
              <td>Wiley</td>
              <td>4th Ed.</td>
              <td>793</td>
              <td></td>
          </tr>
          <tr>
              <td>1</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Beginning Java Script</td></a>
              <td>Wilton Paul</td>		
              <td>Wiley</td>
              <td>4th Ed.</td>
              <td>793</td>
              <td></td>
          </tr>
          <tr>
              <td>2</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Beginning Java Script</td></a>
              <td>Wilton Paul</td>		
              <td>Wiley</td>
              <td>4th Ed.</td>
              <td>793</td>
              <td></td>
          </tr>
          <tr>
              <td>2</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Beginning Java Script</td></a>
              <td>Wilton Paul</td>		
              <td>Wiley</td>
              <td>4th Ed.</td>
              <td>793</td>
              <td></td>
          </tr>
          <tr>
              <td>2</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Beginning Java Script</td></a>
              <td>Wilton Paul</td>		
              <td>Wiley</td>
              <td>4th Ed.</td>
              <td>793</td>
              <td></td>
          </tr>
          <tr>
              <td>2</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Beginning Java Script</td></a>
              <td>Wilton Paul</td>		
              <td>Wiley</td>
              <td>4th Ed.</td>
              <td>793</td>
              <td></td>
          </tr>
          <tr>
              <td>2</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Beginning Java Script</td></a>
              <td>Wilton Paul</td>		
              <td>Wiley</td>
              <td>4th Ed.</td>
              <td>793</td>
              <td></td>
          </tr>
          <tr>
              <td>2</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Beginning Java Script</td></a>
              <td>Wilton Paul</td>		
              <td>Wiley</td>
              <td>4th Ed.</td>
              <td>793</td>
              <td></td>
          </tr>
          </tbody>
        </Table> ,
      eTab: 
      <Table striped bordered hover variant="dark" className = "cd-table" >
      <thead>
          <tr>
              <th>Sl. No.</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Edition</th>
              <th>Pages</th>
              <th>Remarks</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>1</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Beginning Java Script</td></a>
              <td>Wilton Paul</td>		
              <td>Wiley</td>
              <td>4th Ed.</td>
              <td>793</td>
              <td></td>
          </tr>
          <tr>
              <td>1</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Beginning Java Script</td></a>
              <td>Wilton Paul</td>		
              <td>Wiley</td>
              <td>4th Ed.</td>
              <td>793</td>
              <td></td>
          </tr>
          <tr>
              <td>2</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Beginning Java Script</td></a>
              <td>Wilton Paul</td>		
              <td>Wiley</td>
              <td>4th Ed.</td>
              <td>793</td>
              <td></td>
          </tr>
          <tr>
              <td>2</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Beginning Java Script</td></a>
              <td>Wilton Paul</td>		
              <td>Wiley</td>
              <td>4th Ed.</td>
              <td>793</td>
              <td></td>
          </tr>
          <tr>
              <td>2</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Beginning Java Script</td></a>
              <td>Wilton Paul</td>		
              <td>Wiley</td>
              <td>4th Ed.</td>
              <td>793</td>
              <td></td>
          </tr>
          <tr>
              <td>2</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Beginning Java Script</td></a>
              <td>Wilton Paul</td>		
              <td>Wiley</td>
              <td>4th Ed.</td>
              <td>793</td>
              <td></td>
          </tr>
          <tr>
              <td>2</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Beginning Java Script</td></a>
              <td>Wilton Paul</td>		
              <td>Wiley</td>
              <td>4th Ed.</td>
              <td>793</td>
              <td></td>
          </tr>
          <tr>
              <td>2</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Beginning Java Script</td></a>
              <td>Wilton Paul</td>		
              <td>Wiley</td>
              <td>4th Ed.</td>
              <td>793</td>
              <td></td>
          </tr>
          <tr>
              <td>2</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Beginning Java Script</td></a>
              <td>Wilton Paul</td>		
              <td>Wiley</td>
              <td>4th Ed.</td>
              <td>793</td>
              <td></td>
          </tr>
          <tr>
              <td>2</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Beginning Java Script</td></a>
              <td>Wilton Paul</td>		
              <td>Wiley</td>
              <td>4th Ed.</td>
              <td>793</td>
              <td></td>
          </tr>
          <tr>
              <td>2</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Beginning Java Script</td></a>
              <td>Wilton Paul</td>		
              <td>Wiley</td>
              <td>4th Ed.</td>
              <td>793</td>
              <td></td>
          </tr>
          <tr>
              <td>2</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Beginning Java Script</td></a>
              <td>Wilton Paul</td>		
              <td>Wiley</td>
              <td>4th Ed.</td>
              <td>793</td>
              <td></td>
          </tr>
          </tbody>
        </Table> ,
      fTab: 
      <Table striped bordered hover variant="dark" className = "cd-table" >
      <thead>
          <tr>
              <th>Sl. No.</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Edition</th>
              <th>Pages</th>
              <th>Remarks</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>1</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Beginning Java Script</td></a>
              <td>Wilton Paul</td>		
              <td>Wiley</td>
              <td>4th Ed.</td>
              <td>793</td>
              <td></td>
          </tr>
          <tr>
              <td>1</td>
              <a href="http://125.234.102.27/bitstream/TVDHBRVT/15778/1/An-introduction-to-Business-Research-Methods.pdf">
              <td class="text-white">Beginning Java Script</td></a>
              <td>Wilton Paul</td>		
              <td>Wiley</td>
              <td>4th Ed.</td>
              <td>793</td>
              <td></td>
          </tr>
          </tbody>
        </Table> ,
    };
      return (
          <>
        <br></br>  
        <br></br>
        <div className="App">
      <header className="App-header">
        
        <p>
          E-BOOK
        </p>
        </header>
       </div> 
       <br></br><br></br>
        <div style={styles}>

<Tab
  active={this.state.active}
  onChange={active => this.setState({active})}
>
   
 <div key="aTab">COMPUTER SCIENCE  </div>
  <div key="bTab">COMMERCE & MANAGEMENT</div>
  <div key="cTab">ELECTRONICS</div>
  <div key="dTab">MATHEMATICS</div>
  <div key="eTab">MECHANICAL</div>
  <div key="fTab">GENERAL STUDY</div>
</Tab>



<br></br>
<p>{content[this.state.active]}</p>
</div>

<Switch>
      <Route path="/ejournal/tab">
        <Tab />
      </Route>
</Switch> 

</>

        )

    }
}
export default Ebook;
