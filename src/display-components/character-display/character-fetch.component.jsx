import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';



import MenuItemCharacter from './character-display.component.jsx';
import MenuItem from '../../components/menu-item/menu-item.component.jsx';
import {ThemeContext} from '../../App.js';

const PERSON_QUERY=gql`
        query Person($id:ID!){
            person(id:$id){
            id
    				name
    				height
    				mass
    				image
   					homeworld{
                    name
                    }
   					species{
                      name
                    }
            starships{
                      edges{
                        node{
                          id
                          name
                          model
                          image
                          starshipClass
                          cost
                          maxAtmosphericSpeed
                          crew                          
                          }
                       }
                    }    								
                }
            }`;


const CharacterItemComponent=({myfilter,clickedId})=>{

    const { data, loading, error } = useQuery(PERSON_QUERY,
      
    {
      variables: {
        id: clickedId,
              
      }
    });
    if (loading) return null;
    if (error) return <p>Error on getting all people</p>;
 
  
    
   
    
    return(

      <ThemeContext.Consumer> 
      {({themedark})=>


    (<div  >        
            { 
                <MenuItemCharacter  key={data.person.id} otherProps={data.person}/>
            }   
            {              


              data.person.starships.edges                                
                  .map((edge) => (
                  <MenuItem key={edge.node.id} title={edge.node.name} from={"starshipFromCharacters"} epid={edge.node.id} image={edge.node.image} parrentsName={"CharactersItem"} />
                  ))   

            }                      
        


            
             

      </div>)

    }
    </ThemeContext.Consumer> 

    );
}


export default CharacterItemComponent