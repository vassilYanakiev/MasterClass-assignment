import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';


import MenuItemStarship from './starship-display.component.jsx';
import StarshipCompare from './starship-compare-fetch.component.jsx'
import {ThemeContext} from '../../App.js';
import LoaderComponent from '../../components/loader.component.jsx';
import './starship-display.styles.dark.scss';
import './starship-display.styles.light.scss';
import '../../pages/characters-page/characters.page.styles.light.scss';

const STARSHIP_QUERY=gql`
    query Starship($id:ID!){
            starship(id:$id){    
                id
                name
                model
                image
                starshipClass
                cost
                maxAtmosphericSpeed
                maxMLPerHour
                hyperdriveRating
                crew    
             }
    }`;


const StarshipItemComponent=({myfilter,clickedId})=>{
 console.log(clickedId);
    const { data, loading, error } = useQuery(STARSHIP_QUERY,
      
    {
      variables: {
        id: 'starships'+clickedId,
              
      }
    });
    if (loading) return(
  
      <div style={{"display" : "flex",'justifyContent': 'center','margin-top':'300px'}}> 
          <LoaderComponent />
      </div> 
    
   )
    if (error) return <p>Error on getting starship</p>;
   

    console.log(data.starship);
    
   
    
    return(

      <ThemeContext.Consumer> 
      {({themedark})=>



    (<div style={{"height":"100%","display":"flex","flex-wrap":"wrap","justify-content":"center"}} >        
            { 
                <MenuItemStarship  key={data.starship.id} id={data.starship.id} otherProps={data.starship}/>
                
            }   
            {<div  style={{"padding-top":"30vh","width":"50vw"}}>
                <StarshipCompare  shipClass={data.starship.starshipClass} otherProps={data.starship}  />
             </div>
            }
            
             

      </div>)

    }
    </ThemeContext.Consumer> 

    );
}


export default StarshipItemComponent