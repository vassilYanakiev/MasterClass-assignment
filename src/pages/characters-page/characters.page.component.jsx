import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';


import '../../pages/characters-page/characters.page.styles.dark.scss';
import '../../pages/characters-page/characters.page.styles.light.scss';
import MenuItem from '../../components/menu-item/menu-item.component.jsx';
import {ThemeContext} from '../../App.js';
import LoaderComponent from '../../components/loader.component.jsx';
import ErrorOnGraphqlFetch from '../../components/graphql-data-error.component.jsx'
import client1 from '../../client/client.js'
import ALL_CHAR_QUERY from '../../client/queries-gql.js'

/*export const ALL_CHAR_QUERY=gql`
query AllPeopleQuery($first:Int!,$after:String)  { 
  allPeople(first:$first,after:$after){
    edges{
      node{
        id
        name
        image                              
      }
    }  
    pageInfo{
      hasNextPage
      endCursor
    }  
    totalCount
     
  }
  
}`;*/


const CharactersPageComponent=({myfilter,clickedId})=>{

    const { data, loading, error, fetchMore } = useQuery(ALL_CHAR_QUERY,
      
    {
      
      variables: {
        first: 12,
        after:"",
       
      }
    });
    if (loading) return(
  
      <div style={{"display" : "flex",'justifyContent': 'center','margin-top':'40vh'}}> 
          <LoaderComponent />
      </div> 
    
   );
    if (error) return (
      <ErrorOnGraphqlFetch/>
    )
    const {
      allPeople: { edges },
    } = data;
   const hasMore= data.allPeople.pageInfo.hasNextPage;
    
    const loadMoreChars = () => {
      
      fetchMore({
        variables: {
          first:12,
          after: data.allPeople.pageInfo.endCursor,
        },
        updateQuery: (prev, { fetchMoreResult: { allPeople } }) => {
          if (!allPeople.edges.length) {
            return prev;
          }
  
          return {
            allPeople: {
              ...allPeople,
              edges: [...prev.allPeople.edges, ...allPeople.edges],
            },
          };
        }
      })
      
    }
    
    return(

      <ThemeContext.Consumer> 
      {({themedark})=>


    ( <div  style={{'width':'100%',"height":edges?(`${edges.length/3*450*650/window.innerWidth}px`):"0px"}}>
    
        <div className={themedark?'characters-page-dark':'characters-page-light'}>
            { 
              edges    
                .filter((edge) => (myfilter?edge.node.id ===clickedId:true))
                .map(edge => (
                <MenuItem  key={edge.node.id} epid={edge.node.id} title={edge.node.name} image={edge.node.image}/>
            ))
            
            
            
            } 
            
            {
              !myfilter && hasMore &&
              (
                <button id='buttonLoadCharacters' className={themedark?'mybutton-dark':'mybutton-light'} onClick={loadMoreChars}>Load More</button>
              )
            
            }   
            

             </div>
            </div>  
            )

    }
    </ThemeContext.Consumer> 

    );
}


export default CharactersPageComponent