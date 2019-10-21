import React from 'react'
import DirectoryItem from '../directory-menu/directory-menu.component.jsx'
import CharactersItem from '../../components/characters-page/characters.component.jsx';

const MenuItemClicked=({match})=>{

console.log(match);
    return(
        (match.params.id.includes("EPISODE"))?
           <div> <DirectoryItem myfilter={true} clickedId={match.params.id}/>
                 <CharactersItem myfilter={true} clickedId={match.params.id}/>
           </div>
            :
            <div> 
                <CharactersItem myfilter={true} clickedId={match.params.id}/>
            </div>    
        
        
    );


}

export default MenuItemClicked;