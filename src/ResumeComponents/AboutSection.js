import React, {Component} from 'react';
import Fullpage from './Fullpage';
import data from '../data.json';
import { Link, Element} from 'react-scroll';
import './AboutSection.css';

export default class AboutSection extends Component{
  constructor(){
      super()
      this.state ={
        backgroundColor:'rgba(23, 165, 137, .3)'
      }
      this.changeBackground = this.changeBackground.bind(this);
    }
    
  changeBackground(){
      this.setState({
        backgroundColor: this.state.backgroundColor ==='rgba(23, 165, 137, .3)' ? 'rgba(23, 165, 137, .5)':'rgba(23, 165, 137, .3)'
      })
  }

  render(){
    return(
      <Fullpage>
      <Element name="AboutSection" ></Element>

      <div className="about-section" 
      style={{backgroundColor:this.state.backgroundColor}} onMouseOver={this.changeBackground}
              onMouseOut={this.changeBackground}>
                
        <h2>{data.sections[0].title}</h2>
        {data.sections[0].items.map(ctn=>{return(<p>{ctn.content}</p>)})}
      </div>
      <div className="flash-container2">
              <div className="flash2">
              <Link activeClass="active" to="SkillsSection" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
              <img src={data.ArrowIcon.ArrowDown} alt="toSkillsSection" style={{cursor:'pointer'}}/>
              </Link>

              </div>  
      </div>   

</Fullpage>
    )
  }
}