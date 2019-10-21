import React from 'react';
import { withRouter } from 'react-router-dom';
import {ThemeContext} from '../../App.js';
import './menu-item.styles.light.scss'
import './menu-item.styles.dark.scss'

export const ClickedIdContext = React.createContext(0);
class MenuItem extends React.Component{

 
  constructor(){
      super();
      
  }  
  
  handleButtonClick=(myfilter)=>{
    
    return(
    !myfilter?
    this.props.history.push(`${this.props.match.url}/${this.props.linkUrl}`):
    null       
    )
  }  
 
    render(){
      
      const {title,linkUrl,imageUrl,history,match,id,myfilter,synopsis,...otherProps}={...this.props}; 
      console.log(myfilter);
      return(
        <ThemeContext.Consumer>
        {({ themedark }) => (  

       <div className="col-6 col-m4 menu"> 
        <div 
          className={themedark?'menu-item-dark':'menu-item-light'}
         
          onClick={() => this.handleButtonClick(myfilter)                     
            
          }
        >
             


        <div
        className='background-image'
        style={{  backgroundImage: `url(${imageUrl})`  }}
        />

        <div className='content'>
          <h1 >{title.toUpperCase()}</h1>
          <span>{synopsis}</span>
        </div>

      </div>  </div>  ) }

     
      </ThemeContext.Consumer>
      );
      
          
  }
}
export default withRouter(MenuItem);