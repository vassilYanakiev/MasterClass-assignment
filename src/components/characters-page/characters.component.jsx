import React from 'react';
import './characters.styles.light.scss';
import './characters.styles.dark.scss';
import {ThemeContext} from '../../App.js';
import MenuItem from '../../components/menu-item/menu-item.component.jsx';

class  CharactersItem extends React.Component{
   

constructor(){

    super();


    this.state = {
        sections: [
          {
            title: 'CHARACTER1',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Star_Wars_Aftermath_Cover.jpg',
            id: 1,
            linkUrl: 'CHARACTER1',
            episode: 'EPISODE1'
          },
          {
            title: 'CHARACTER2',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Star_Wars_Aftermath_Empire%27s_End_cover_%282017%29.jpg',
            id: 2,
            linkUrl: 'CHARACTER2',
            episode: 'EPISODE1'
          },
          {
            title: 'CHARACTER3',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Star_Wars_Aftermath_Life_Debt_cover_%282016%29.jpg',
            id: 3,
            linkUrl: 'CHARACTER3',
            episode: 'EPISODE2'
          },
          {
            title: 'CHARACTER4',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b2/Star_Wars_-_Shield_of_Lies.jpg',
            id: 4,
            linkUrl: 'CHARACTER4',
            episode: 'EPISODE2'
            
          },
          {
            title: 'CHARACTER5',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a9/StarWars_Allegiance.jpg',
            id: 5,
            linkUrl: 'CHARACTER5',
            episode: 'EPISODE3'
          },
          {
            title: 'CHARACTER6',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d8/Secret_of_the_Jedi.jpg',
            id: 6,
            linkUrl: 'CHARACTER6',
            episode: 'EPISODE3'
          }
        ]
      };

}

render(){
  const {myfilter,clickedId}={...this.props};
    return(
      <ThemeContext.Consumer> 
      {({themedark})=>
       <div className={themedark?'characters-menu-dark':'characters-menu-light'}>
            
            {this.state.sections
              .filter((item) => (myfilter?item.title ===clickedId||item.episode ===clickedId:true))
              .map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} myfilter={myfilter} {...otherSectionProps} />
            ))}

        </div>}
      </ThemeContext.Consumer> 
    )
        } 
}

export default CharactersItem;
