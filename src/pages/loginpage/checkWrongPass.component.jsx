import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {AUTHENTICATED_QUERY} from '../../pages/private-page-wrapper/private-page-wrapper.jsx';

function WrongPass(){
   
    const { data } = useQuery(AUTHENTICATED_QUERY);
   
    return(

        !data.authenticated &&
            <p>  Wrong mail or password! </p>  
        


        );



    }
    
    export default WrongPass;