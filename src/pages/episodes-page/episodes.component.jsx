import React from 'react';
import './episodes.styles.dark.scss'
import './episodes.styles.light.scss'

import MenuItemForEpisodes from '../../components/menu-item/menu-item.componentForEpisodes.jsx';
import {ThemeContext} from '../../App.js';
import withGraphql from '../../components/withGraphqlData.jsx'
class  EpisodesItem extends React.Component{
   

constructor(){

    super();
    this.state = {};

}

render(){
  const {sections}={...this.props};
 
  
    return(
      <ThemeContext.Consumer> 
      {({themedark})=>

        <div className={themedark?'episodes-dark':'episodes-light'}>
            
            { 
              sections
                
                .map(({ id,title,openingCrawl, ...otherSectionProps }) => (
                <MenuItemForEpisodes key={id} epid={id} title={title} openingCrawl={openingCrawl} parrentsName={this.constructor.name} {...otherSectionProps} />
            ))}                          
        
        
        </div>}
      </ThemeContext.Consumer> 
        

    )
        } 
}

export default withGraphql(EpisodesItem,"episodes");
