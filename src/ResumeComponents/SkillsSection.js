import React, {Component} from 'react';
import data from '../data.json';
import Fullpage from './Fullpage';

import { Link, Element} from 'react-scroll';
import './SkillsSection.css';
import SkillsCard from './SkillsCard';


class SkillsSection extends Component{
  constructor(){
        super()
        this.state ={
          backgroundColor:'rgba(208, 211, 212 , .3)'
        }
        this.changeBackground = this.changeBackground.bind(this);
      }
      changeBackground(){
        this.setState({
          backgroundColor: this.state.backgroundColor ==='rgba(208, 211, 212 , .3)' ? 'rgba(208, 211, 212 , .5)':'rgba(208, 211, 212 , .3)'
        })
  }

  render(){
        return(
           <Fullpage>
            <div className=" skills-section" style={{backgroundColor:this.state.backgroundColor}} onMouseOver={this.changeBackground}
              onMouseOut={this.changeBackground}>
              <h2> {data.sections[1].title}</h2>
              <div className="skills-section-cards" >
                          {data.sections[1].items.map(sections =>{
                      return(
                      <SkillsCard sectionsProp={sections}/>
                      )}
                      )}
                  </div>
              </div> 
              <Link activeClass="active" to="HeaderSection" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
                <div className="flash-container">
                        <div className="flash">
                        <img src={data.ArrowIcon.ArrowUp} alt="up"/>
                        </div>  
            </div>
              </Link>
               <Element name="SkillsSection"></Element>
           </Fullpage>
        )
    }
}
export default SkillsSection;
