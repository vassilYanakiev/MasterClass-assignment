import React from 'react';

import {ThemeContext} from '../../App.js';

import './character-display.styles.light.scss';
import './character-display.styles.dark.scss';

class MenuItemCharacter extends React.Component{ 
   
  
    render(){
      
      const {height,mass,image,name,species,homeworld}={...this.props.otherProps}; 
      console.log(height,mass,image,name,species,homeworld);
      return(
        <ThemeContext.Consumer>
        {({ themedark }) => (  

      
        <div className={           
                themedark?'character-display-single-dark':'character-display-single-light'                 
            } >        
        <h1 >{(name).toUpperCase()}</h1>  

          <div
            className='background-image'
            style={{  backgroundImage: `url(${image})`  }}
          />          

        
          <div className='content'>

                  {height?<p>Height: {height}</p> : <p>Height: NA</p>}
                  {mass? <p className='subtitle'>Mass: {mass}</p> :<p className='subtitle'>Mass: NA</p>} 
                  {species? <p className='subtitle'>Species: {species.name}</p> : <p className='subtitle'>Species: NA</p>} 
                  {homeworld? <p className='subtitle'>Home World: {homeworld.name}</p> : <p className='subtitle'>Home World: NA</p>}
          </div>
        </div> 
        ) }

     
      </ThemeContext.Consumer>
      );
      
          
  }
}
export default MenuItemCharacter;