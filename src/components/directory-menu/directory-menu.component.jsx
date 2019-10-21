import React from 'react';
import './directory-menu.styles.dark.scss'
import './directory-menu.styles.light.scss'

import MenuItem from '../menu-item/menu-item.component.jsx';
import {ThemeContext} from '../../App.js';
class  DirectoryItem extends React.Component{
   

constructor(){

    super();


    this.state = {
        
        sections: [
          {
            title: 'EPISODE1',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Star_Wars_Aftermath_Cover.jpg',
            id: 1,
            linkUrl: 'EPISODE1',
            synopsis:'There is unrest in the Galactic Senate. Several thousand solar systems have declared their....'
          },
          {
            title: 'EPISODE2',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Star_Wars_Aftermath_Empire%27s_End_cover_%282017%29.jpg',
            id: 2,
            linkUrl: 'EPISODE2',
            synopsis:'There is unrest in the Galactic Senate. Several thousand solar systems have declared their....'
          },
          {
            title: 'EPISODE3',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Star_Wars_Aftermath_Life_Debt_cover_%282016%29.jpg',
            id: 3,
            linkUrl: 'EPISODE3',
            synopsis:'There is unrest in the Galactic Senate. Several thousand solar systems have declared their....'
          },
          {
            title: 'EPISODE4',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b2/Star_Wars_-_Shield_of_Lies.jpg',
            id: 4,
            linkUrl: 'EPISODE4',
            synopsis:'There is unrest in the Galactic Senate. Several thousand solar systems have declared their....'
          },
          {
            title: 'EPISODE5',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a9/StarWars_Allegiance.jpg',
            id: 5,
            linkUrl: 'EPISODE5',
            synopsis:'There is unrest in the Galactic Senate. Several thousand solar systems have declared their....'
          },
          {
            title: 'EPISODE6',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d8/Secret_of_the_Jedi.jpg',
            id: 6,
            linkUrl: 'EPISODE6',
            synopsis:'There is unrest in the Galactic Senate. Several thousand solar systems have declared their....'
          },{
            title: 'EPISODE4',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b2/Star_Wars_-_Shield_of_Lies.jpg',
            id: 4,
            linkUrl: 'EPISODE4',
            synopsis:'There is unrest in the Galactic Senate. Several thousand solar systems have declared their....'
          }
          
        ]
      };

}

render(){
  const {myfilter,clickedId}={...this.props};
 // console.log(clickedId);
  
    return(
      <ThemeContext.Consumer> 
      {({themedark})=>

        <div className={themedark?'directory-menu-dark':'directory-menu-light'}>
            
            { 
              this.state.sections
                .filter((item) => (myfilter?item.title ===clickedId:true))
                .map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} myfilter={myfilter} {...otherSectionProps} />
            ))}                          
        
        
        </div>}
      </ThemeContext.Consumer> 
        

    )
        } 
}

export default DirectoryItem;
