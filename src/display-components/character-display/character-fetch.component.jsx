import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';
import LoaderComponent from '../../components/loader.component.jsx';
import './character-fetch.component.styles.dark.scss';
import './character-fetch.component.styles.light.scss';
import MenuItemCharacter from './character-display.component.jsx';
import MenuItem from '../../components/menu-item/menu-item.component.jsx';
import {ThemeContext} from '../../App.js';
import ErrorOnGraphqlFetch from '../../components/graphql-data-error.component.jsx'
import EmptyOnGraphqlFetch from '../../components/graphql-data-empty.component.jsx'

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
    if (loading) return(
  
      <div style={{"display" : "flex",'justifyContent': 'center','margin-top':'300px'}}> 
          <LoaderComponent />
      </div> 
    
   )
    //if (error) return <p>Error on getting all people</p>;
    if (error) return (
      <ErrorOnGraphqlFetch/>
    )
  
    
   
    
    return(

      <ThemeContext.Consumer> 
      {({themedark})=>

    (data.person)!==null?
    ( <div className={           
            themedark?'characters-dark':'characters-light'                  
        } >   
              <div style={{"width":"50%", "min-width":"500px"}}   >     
                   
                      <MenuItemCharacter  key={data.person.id} otherProps={data.person}/>
                  
              </div>
              <div style={{"width":"50%","height":"100%","display":"flex","flex-direction":"column", "flex-wrap":"wrap","background-color":themedark?"black":"gray"}}>
                 
              <div className="p-title"> Piloted Starhips</div> 
                  {                          
                    data.person.starships.edges                                
                        .map((edge) => (
                        <MenuItem style={{"min-width":"550px"}} key={edge.node.id} title={edge.node.name} from={"starshipFromCharacters"} epid={edge.node.id} image={edge.node.image} parrentsName={"CharactersItem"} />
                        ))   
                  }         
                    
                </div> 
            </div> 

      ):
      
        <EmptyOnGraphqlFetch/>
      

    }
    </ThemeContext.Consumer> 

    );
}


export default CharacterItemComponent