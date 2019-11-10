import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';
import { Link as RouterLink } from 'react-router-dom';

import '../../pages/characters-page/characters.page.styles.dark.scss';
import '../../pages/characters-page/characters.page.styles.light.scss';
import MenuItem from '../../components/menu-item/menu-item.component.jsx';
import {ThemeContext} from '../../App.js';

const ALL_CHAR_QUERY=gql`
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
  
}`;


const CharactersPageComponent=({myfilter,clickedId})=>{

    const { data, loading, error, fetchMore } = useQuery(ALL_CHAR_QUERY,
      
    {
      variables: {
        first: 12,
        after:"",
       
      }
    });
    if (loading) return null;
    if (error) return <p>Error on getting all people</p>;
    const {
      allPeople: { edges, pageInfo, totalCount },
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
    console.log(clickedId)
    return(

      <ThemeContext.Consumer> 
      {({themedark})=>


    ( <div  style={{'width':'100%',"height":edges?(`${edges.length/3*450*650/window.innerWidth+50}px`):"0px"}}>
    
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
                <button className={themedark?'mybutton-dark':'mybutton-light'} onClick={loadMoreChars}>Load More</button>
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