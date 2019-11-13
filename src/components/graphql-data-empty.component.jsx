import React from 'react';
import {ThemeContext} from '../App.js';


const EmptyOnGraphqlFetch=()=>{

return(

    <ThemeContext.Consumer> 
    {({themedark})=>

            <div style={{"padding-top":"75px"}}>
               No info for this page!!!

            </div>

}
</ThemeContext.Consumer> 
)

}


export default EmptyOnGraphqlFetch