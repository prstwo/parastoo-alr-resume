import React, {Component} from 'react';
import HeaderSection from './ResumeComponents/HeaderSection';
import AboutSection from './ResumeComponents/AboutSection';
import SkillsSection from './ResumeComponents/SkillsSection';
import NavigationBar from './ResumeComponents/NavigationBar';
import './data.json';
import  './App.css';
import  './images/magic-wand.png';

class App extends Component {
  render(){
    return (
      <div className="App" id="App" style={{backgroundImage: 'url("./images/compute-ea4c57a4.png")'}}>
                <NavigationBar/>
                <HeaderSection/>
                <AboutSection/>
                <SkillsSection/>  
      </div>
    );
  }
  
}

// az root balaie nemitoone adress beskoone. mige support nemikone????
// chera axaye jadid to src console nemire? 
// box shadow skilss ba js (mesle header section)
// aval ba js sade changeTheme ro test konam baaad inja piyade sazish

export default App;
