import React from 'react';

import {ThemeContext} from '../../App.js';

import './episode-display.styles.light.scss'
import './episode-display.styles.dark.scss'

class MenuItemEpisode extends React.Component{ 
   
  
    render(){
      
      const {id,title,episodeId,openingCrawl,image,director,releaseDate}={...this.props.otherProps}; 
      
      return(
        <ThemeContext.Consumer>
        {({ themedark }) => (  

      
        <div className={           
                themedark?'episode-display-single-dark':'episode-display-single-light'                 
            } >        
        <h1 >{(title).toUpperCase()}</h1>  

          <div
            className='background-image'
            style={{  backgroundImage: `url(${image})`  }}
          />          

        
          <div className='content'>

                  <p className='subtitle'>Episode: {episodeId}</p> 
                  <p className='subtitle'>Title: {title}</p> 
                  <p className='subtitle'> {openingCrawl}</p> 
                  <p className='subtitle'>Director: {director}</p> 
                  <p className='subtitle'>Release date: {releaseDate}</p> 
          </div>
        </div> 
        ) }

     
      </ThemeContext.Consumer>
      );
      
          
  }
}
export default MenuItemEpisode;