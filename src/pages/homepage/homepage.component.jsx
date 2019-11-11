import React from 'react';

import MenuItem from '../../components/menu-item/menu-item.component.jsx';
import EpiodesItem from '../../components/episodes-menu/episodes.component.jsx';

import './homepage.styles.scss';

const HomePage=()=>{



return(   
    
    <div className='homepage'>
        <EpiodesItem myfilter={false}>
                         
        </EpiodesItem>

        
    </div>  
    
)
}


export default HomePage;