import React from 'react';

import {ThemeContext} from '../../App.js';

import './episode-display.styles.light.scss'
import './episode-display.styles.dark.scss'

class MenuItemEpisode extends React.Component{ 
   
  
    render(){
      
      const {id,title,episodeId,openingCrawl,image,director,releaseDate}={...this.props.otherProps}; 
      
      const EPISODE_ROMAN=["I","II","III","IV","V","VI","VII"];
      return(
        <ThemeContext.Consumer>
        {({ themedark }) => (  

      
        <div className={           
                themedark?'episode-display-single-dark':'episode-display-single-light'                 
            } >        
            
            
          <div style={{"display":"flex","height":"100%", "flex-wrap":"wrap"}}> 
              <div
                className='background-image'
                style={{  backgroundImage: `url(${image})`,"width":"40vw"  }}
              /> 
              <div style={{"display":"flex","flex-direction":"column", "flex-wrap":"wrap"}}>   
                    <h1 style={{"width":"50vw","align-self":" center"}}>Star Wars: Episode {EPISODE_ROMAN[episodeId-1]}</h1>         
                    <h2 style={{"width":"50vw","align-self":" center"}}>{(title).toUpperCase()}</h2> 
              </div >        
          </div >   
          <div > 
            <div className='content'>

                 
                    <p className='subtitle'> {openingCrawl}</p> 
                    <p className='subtitle'>Director: {director}</p> 
                    <p className='subtitle'>Release date: {releaseDate}</p> 
            </div>
          </div>  
        </div> 
        ) }

     
      </ThemeContext.Consumer>
      );
      
          
  }
}
export default MenuItemEpisode;