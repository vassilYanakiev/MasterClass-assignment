import React from 'react';
import {ThemeContext} from '../App.js';


const ErrorOnGraphqlFetch=()=>{

return(

    <ThemeContext.Consumer> 
    {({themedark})=>

            <div style={{"padding-top":"75px"}}>
                Failed to load data - expired token!
                Login again!

            </div>

}
</ThemeContext.Consumer> 
)

}


export default ErrorOnGraphqlFetch