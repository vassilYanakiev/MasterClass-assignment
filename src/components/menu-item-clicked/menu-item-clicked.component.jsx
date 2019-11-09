import React from 'react'
import { withRouter } from 'react-router-dom';

import CharacterItemComponent from '../../display-components/character-display/character-fetch.component.jsx';
import EpisodeItemComponent from '../../display-components/episode-display/episode-fetch.component.jsx';
import StarshipItemComponent from '../../display-components/starship-display/starship-fetch.component.jsx';


const MenuItemClicked=({match})=>{

console.log({match});

switch (true) {

    case match.params.id.includes("films"):
            return(<div> 
                <EpisodeItemComponent myfilter={true} clickedId={match.params.id}/>                 
            </div>)
    
    case match.params.id.includes("people"):
            return(<div> 
                <CharacterItemComponent myfilter={true} clickedId={match.params.id}/>                     
            </div>)

    case match.path.includes("starships"):
            return(<div> 
                <StarshipItemComponent myfilter={true} clickedId={match.params.id}/>                 
            </div>)        

          
        
  
}


}

export default withRouter(MenuItemClicked);