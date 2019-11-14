import React from 'react';

import {ThemeContext} from '../../App.js';

import './episode-display.styles.light.scss'
import './episode-display.styles.dark.scss'

class MenuItemEpisode extends React.Component{ 
   
  
    render(){
      
      const {title,episodeId,openingCrawl,image,director,releaseDate}={...this.props.otherProps}; 
      
      const EPISODE_ROMAN=["I","II","III","IV","V","VI","VII"];
      return(
        <ThemeContext.Consumer>
        {({ themedark }) => (  

      
        <div className={           
                themedark?'episode-display-single-dark':'episode-display-single-light'                 
            } >        
            
            
          <div style={{"border-style": "outset", "display":"flex","height":"100%","width":"100%", "flex-wrap":"wrap","background-color":themedark?"gray":"white"}}> 
              <div
                className='background-image'
                style={{  backgroundImage: `url(${image})`,"width":"40vw"  }}
              /> 
              <div style={{"display":"flex","flex-direction":"column", "flex-wrap":"wrap"}}>   
                    <h1 style={{"width":"50vw"}}>Star Wars: Episode {EPISODE_ROMAN[episodeId-1]}</h1>         
                    <h2 style={{"width":"50vw"}}>{(title).toUpperCase()}</h2> 
              </div >        
          </div >   
          <div > 
            <div className='content'>

                 
                    <p className='subtitle'> {openingCrawl}</p> 
                    <p className='subtitle'> <span className='span-title'>Director: </span> <span className='span-text'>{director}</span></p> 
                    <p className='subtitle'><span className='span-title'>Release date: </span> <span className='span-text'>{releaseDate}</span> </p> 
            </div>
          </div>  
        </div> 
        ) }

     
      </ThemeContext.Consumer>
      );
      
          
  }
}
export default MenuItemEpisode;