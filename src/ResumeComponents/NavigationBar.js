import React, {Component} from 'react';
import data from '../data.json';
import './NavigationBar.css';
import { Link} from 'react-scroll';

export default class AboutSection extends Component{
 
  changeBG(){
        if( document.getElementById('App').style.backgroundImage === 'url("./images/compute-ea4c57a4.png")'){
          document.getElementById('App').style.backgroundImage = 'url("./images/bg2.jpg")' 

        }
        else if(document.getElementById('App').style.backgroundImage === 'url("./images/bg2.jpg")' ){
          document.getElementById('App').style.backgroundImage = 'url("./images/bg3.jpg")';

        }
        else{
              document.getElementById('App').style.backgroundImage = 'url("./images/compute-ea4c57a4.png")';
        }
  }
  render(){
  
    return(
    <div className="navigation">
      <div className="navigation-theme-changer">                                
        <img  src={data.navigation.img} alt="change the BackGround" onClick={this.changeBG}/>

      </div>
      <div className="navigation-links">
        <Link activeClass="active" to="HeaderSection" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
          <span>Introduction</span>
                                 
        </Link>
        <Link activeClass="active" to="AboutSection" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
          <span>About</span>
        </Link>
        <Link activeClass="active" to="SkillsSection" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
          <span>Skills</span>
        </Link>

      </div>
    </div>
    )
  }
}