import React from 'react';

import MenuItem from '../../components/menu-item/menu-item.component.jsx';
import EpiodesItem from '../../components/episodes-menu/episodes.component.jsx';

import './homepage.styles.scss';
//import { mapContextToProps } from 'react-context-toolbox';
const HomePage=()=>{

    
//const mytheme=theme.dark;
//console.log(mytheme);

return(   
    
    <div className='homepage'>
        <EpiodesItem myfilter={false}>
                         
        </EpiodesItem>

        
    </div>  
    
)
}


export default HomePage;