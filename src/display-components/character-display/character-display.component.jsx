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

                  {height?<p><span className='span-title'>Height: </span> <span className='span-text'>{height}</span></p> : <p><span className='span-title'>Height: </span>: NA</p>}
                  {mass? <p className='subtitle'><span className='span-title'>Mass: </span> <span className='span-text'>{mass}</span></p> :<p className='subtitle'><span className='span-title'>Mass: NA </span></p>} 
                  {species? <p className='subtitle'><span className='span-title'>Species: </span> <span className='span-text'>{species.name}</span></p> : <p className='subtitle'><span className='span-title'>Species: NA </span></p>} 
                  {homeworld? <p className='subtitle'><span className='span-title'>Home World: </span> <span className='span-text'>{homeworld.name}</span></p> : <p className='subtitle'><span className='span-title'>Home World:NA </span></p>}
          </div>
        </div> 
        ) }

     
      </ThemeContext.Consumer>
      );
      
          
  }
}
export default MenuItemCharacter;