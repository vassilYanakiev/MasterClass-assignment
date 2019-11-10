import React from 'react'
import { withRouter } from 'react-router-dom';

import CharacterItemComponent from '../../display-components/character-display/character-fetch.component.jsx';
import EpisodeItemComponent from '../../display-components/episode-display/episode-fetch.component.jsx';
import StarshipItemComponent from '../../display-components/starship-display/starship-fetch.component.jsx';


const MenuItemClicked=({match})=>{

console.log({match});

switch (true) {

    case match.params.id.includes("films"):
            return(
                <EpisodeItemComponent myfilter={true} clickedId={match.params.id}/>                 
            )
    
    case match.params.id.includes("people"):
            return( 
                <CharacterItemComponent myfilter={true} clickedId={match.params.id}/>                     
            )

    case match.path.includes("starships"):
            return( 
                <StarshipItemComponent myfilter={true} clickedId={match.params.id}/>                 
            )        

          
        
  
}


}

export default withRouter(MenuItemClicked);