import React, {Component} from 'react';
import './Fullpage.css';

 class Fullpage extends Component{
    render(){
        const {children} = this.props;

        return(
            <div className="Fullpage">
                {children}
            </div>
        )
    }
}
export default Fullpage;