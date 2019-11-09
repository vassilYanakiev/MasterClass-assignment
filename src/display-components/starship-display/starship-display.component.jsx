import React from 'react';

import {ThemeContext} from '../../App.js';

import './starship-display.styles.light.scss'
import './starship-display.styles.dark.scss'

class MenuItemStarship extends React.Component{ 
   
  
    render(){
      
      const {id,name,model,image,starshipClass,cost,maxAtmosphericSpeed,maxMLPerHour,hyperdriveRating,crew}={...this.props.otherProps}; 
      
      return(
        <ThemeContext.Consumer>
        {({ themedark }) => (  

      
        <div className={           
                themedark?'starship-display-single-dark':'starship-display-single-light'                 
            } >        
        <h1 >{(name).toUpperCase()}</h1>  

          <div
            className='background-image'
            style={{  backgroundImage: `url(${image})`  }}
          />          
          <h1>Model: {model}</h1>
        
          <div className='content'>
                  <p className='subtitle'>Class: {starshipClass}</p>                              
                  <p className='subtitle'>Cost: {cost}</p> 
                  <p className='subtitle'>Crew: {crew}</p> 
                  <p className='subtitle'>Max Atm Speed: {maxAtmosphericSpeed}</p> 
                  <p className='subtitle'>Hyper Drive Rating: {hyperdriveRating}</p> 

                  
          </div>
        </div> 
        ) }

     
      </ThemeContext.Consumer>
      );
      
          
  }
}
export default MenuItemStarship;