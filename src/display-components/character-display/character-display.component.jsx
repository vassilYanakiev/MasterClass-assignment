import React from 'react';

import {ThemeContext} from '../../App.js';

import './character-display.styles.light.scss'
import './character-display.styles.dark.scss'

class MenuItemCharacter extends React.Component{ 
   
  
    render(){
      
      const {height,mass,image,name,species,homeworld}={...this.props.otherProps}; 
      
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

                  <p className='subtitle'>Height: {height}</p> 
                  <p className='subtitle'>Mass: {mass}</p> 
                  <p className='subtitle'>Species: {species.name}</p> 
                  <p className='subtitle'>Home World: {homeworld.name}</p> 
          </div>
        </div> 
        ) }

     
      </ThemeContext.Consumer>
      );
      
          
  }
}
export default MenuItemCharacter;