import React from 'react';

import MenuItem from '../../components/menu-item/menu-item.component.jsx';
import DirectoryItem from '../../components/directory-menu/directory-menu.component.jsx';

import './homepage.styles.scss';
//import { mapContextToProps } from 'react-context-toolbox';
const HomePage=({theme})=>{

    
const mytheme=theme.dark;
//console.log(mytheme);

return(   
    
    <div className='homepage'>
        <DirectoryItem>
                         

        </DirectoryItem>
    </div>  
    
)
}


export default HomePage;