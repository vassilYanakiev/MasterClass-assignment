import React from 'react';
import { withRouter } from 'react-router-dom';
import {ThemeContext} from '../../App.js';
import './menu-item.styles.light.scss'
import './menu-item.styles.dark.scss'
import './menu-item.characters.styles.light.scss'
import './menu-item.characters.styles.dark.scss'

//export const ClickedIdContext = React.createContext(0);
class MenuItemForEpisodes extends React.Component{

 
  handleButtonClick=(from)=>{
    
     
      switch (true) {
       case from==="charFromEpisode":
           return(this.props.history.push(`/characters/${this.props.epid}`))
        case from==="starshipFromCharacters": 
          return(this.props.history.push(`/starships/${this.props.epid}`))
        default:        
          return(this.props.history.push(`${this.props.match.url}/${this.props.epid}`)) 
      }   
    
  }  
 
    render(){
      
      const {title,openingCrawl,image,history,match,id,parrentsName,from}={...this.props}; 

  
      return(
        <ThemeContext.Consumer>
        {({ themedark }) => (  

       <div className={from==='starshipFromCharacters'?"col-8 col-m8 menu":"col-6 col-m4 menu"}> 
        <div 
          className={

                themedark?'menu-item-dark':'menu-item-light'
          
          }
         
          onClick={() => this.handleButtonClick(from)                     
            
          }
        >        

          <div
          className='background-image'
          style={{  backgroundImage: `url(${image})`  }}
          />

              <div className='content'>

                <h1 >{ title.toUpperCase()}</h1> 
               
                <span className='subtitle'>{openingCrawl}</span> 
              </div>


        </div> 
      </div>  ) }

     
      </ThemeContext.Consumer>
      );
      
          
  }
}
export default withRouter(MenuItemForEpisodes);