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
                  {starshipClass?<p className='subtitle'><span className='span-title'>Class: </span> <span className='span-text'> {starshipClass}</span> </p>:<p className='subtitle'><span className='span-title'>Class: NA</span></p>}                              
                  {cost?<p className='subtitle'><span className='span-title'>Cost: </span> <span className='span-text'> {cost}</span> </p>:<p className='subtitle'><span className='span-title'>Cost: 0 </span></p>}
                  {crew?<p className='subtitle'><span className='span-title'>Crew: </span> <span className='span-text'> {crew}</span> </p>:null} 
                  {maxAtmosphericSpeed?<p className='subtitle'><span className='span-title'>Max Atm speed: </span> <span className='span-text'> {maxAtmosphericSpeed}</span> </p>:null} 
                  {maxMLPerHour?<p className='subtitle'><span className='span-title'>Max ML Per Hour: </span> <span className='span-text'> {maxMLPerHour}</span>  </p>:null}
                  {hyperdriveRating?<p className='subtitle'><span className='span-title'>Hyper Drive Rating: </span>  <span className='span-text'> {hyperdriveRating}</span>  </p>:null} 

                  

                  
          </div>
        </div> 
        ) }

     
      </ThemeContext.Consumer>
      );
      
          
  }
}
export default MenuItemStarship;