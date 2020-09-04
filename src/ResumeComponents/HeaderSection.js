import React, {Component} from 'react';
import data from '../data.json';
import Fullpage from './Fullpage';
import { SocialIcon } from 'react-social-icons'; 
import { Link, Element} from 'react-scroll';
import './HeaderSection.css';

class HeaderSection extends Component{
  constructor(){
      super()
      this.state ={
        backgroundColor:'rgba( 125, 60, 152 , .3)'
      }
    this.changeBackground = this.changeBackground.bind(this);
  }
  changeBackground(){
    this.setState({
      backgroundColor: this.state.backgroundColor ==='rgba( 125, 60, 152 , .3)' ? 'rgba( 125, 60, 152 , .5)':'rgba( 125, 60, 152 , .3)'
    })
  }

  render(){
    return(
      <Fullpage>
        <Element name="HeaderSection"></Element>      
          <div className="div-center header-section" style={{backgroundColor:this.state.backgroundColor}} onMouseOver={this.changeBackground}
              onMouseOut={this.changeBackground}>
            <h1> {data.title}</h1>
            <h2>{data.Subtitle}</h2>
            <div className="socialIcons">
                 {
                   Object.keys(data.links).map((url) =>{
                    return(<SocialIcon url={data.links[url]}/>)
                  })
                 }
            </div>  
          </div>
          <div className="flash-container">
            <div className="flash">
              <Link activeClass="active" to="AboutSection" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
               <img src={data.ArrowIcon.ArrowDown} alt="down" style={{cursor:'pointer'}}/>
              </Link>
            </div>  
          </div>  
      </Fullpage>
        )
    }
}
export default HeaderSection;
