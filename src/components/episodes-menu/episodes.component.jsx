import React from 'react';
import './episodes.styles.dark.scss'
import './episodes.styles.light.scss'

import MenuItem from '../menu-item/menu-item.component.jsx';
import {ThemeContext} from '../../App.js';
import withGraphql from '../../components/withGraphqlData.jsx'
class  EpisodesItem extends React.Component{
   

constructor(){

    super();
    this.state = {};

}

render(){
  const {myfilter,clickedId,sections}={...this.props};
  console.log(sections);
  
    return(
      <ThemeContext.Consumer> 
      {({themedark})=>

        <div className={themedark?'episodes-dark':'episodes-light'}>
            
            { 
              sections
                
                .map(({ id,title, ...otherSectionProps }) => (
                <MenuItem key={id} epid={id} title={title} parrentsName={this.constructor.name} {...otherSectionProps} />
            ))}                          
        
        
        </div>}
      </ThemeContext.Consumer> 
        

    )
        } 
}

export default withGraphql(EpisodesItem,"episodes");
