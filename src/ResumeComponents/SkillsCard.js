
import React, {Component} from 'react';
 class SkillsCard extends Component{
    render(){
        const {sectionsProp} = this.props;

        return(
            <section>
            <div className="image-wrapper">
            <img src={sectionsProp.content.image} alt="skills"/>                
            </div>  {sectionsProp.content.title} 
            </section>
        )
    }
}
export default SkillsCard;
