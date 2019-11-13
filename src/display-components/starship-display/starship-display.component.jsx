import React from 'react';

import {ThemeContext} from '../../App.js';

import './starship-display.styles.light.scss'
import './starship-display.styles.dark.scss'

class MenuItemStarship extends React.Component{ 
   
  
    render(){
      
      const {name,model,image,starshipClass,cost,maxAtmosphericSpeed,hyperdriveRating,maxMLPerHour,crew}={...this.props.otherProps}; 
      
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
                  {starshipClass?<p className='subtitle'>Class: {starshipClass}</p>:<p className='subtitle'>Class: na</p>}                              
                  {cost==null?<p className='subtitle'>Cost: {cost}</p>:<p className='subtitle'>Cost:{cost}</p>}
                  {crew?<p className='subtitle'>Crew: {crew}</p>:null} 
                  {maxAtmosphericSpeed?<p className='subtitle'>Max Atm Speed: {maxAtmosphericSpeed}</p>:null} 
                  {maxMLPerHour?<p className='subtitle'>Max ML Per Hour: {maxMLPerHour}</p>:null}
                  {hyperdriveRating?<p className='subtitle'>Hyper Drive Rating: {hyperdriveRating}</p>:null} 

                  

                  
          </div>
        </div> 
        ) }

     
      </ThemeContext.Consumer>
      );
      
          
  }
}
export default MenuItemStarship;