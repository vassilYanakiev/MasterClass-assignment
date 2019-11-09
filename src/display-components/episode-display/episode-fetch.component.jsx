import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';

import './episode-display.styles.dark.scss';
import './episode-display.styles.light.scss';
import './episode-fetch.component.styles.light.scss';
import './episode-fetch.component.styles.dark.scss';
import '../../pages/characters-page/characters.page.styles.light.scss';
import MenuItemEpisode from './episode-display.component.jsx';
import MenuItem from '../../components/menu-item/menu-item.component.jsx';
import {ThemeContext} from '../../App.js';

const EPISODE_QUERY=gql`
        query Episode($id:ID!,$first:Int!,$after:String){
          episode(id:$id){
            id
            title
            episodeId
            openingCrawl
            image
            director
            releaseDate
            people(first:$first,after:$after){
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
            
          }
        }`;


const EpisodeItemComponent=({myfilter,clickedId})=>{

    const { data, loading, error,fetchMore } = useQuery(EPISODE_QUERY,
      
    {
      variables: {
        id: clickedId,
        first:5,
        after:"",
              
      }
    });
    if (loading) return null;
    if (error) return <p>Error on getting all people</p>;
    const {
      episode: { people, pageInfo, totalCount },
    } = data;
    

    
    
    const edges= data.episode.people.edges;
    const hasMore= data.episode.people.pageInfo.hasNextPage;
    const numCharacters= data.episode.people.totalCount;
  
    
    const load5MoreCharacters = () => {
      
       

      fetchMore({
        variables: {
          
          first:5,
          after: data.episode.people.pageInfo.endCursor,
        },
        updateQuery:  (prev, { fetchMoreResult: { episode } }) => {
          if (!episode.people.edges.length) return prev;
          return {
            episode: {
              ...episode,
              edges: [...prev.episode.people.edges, ...episode.people.edges],
            },
          };
        }
      })
      
    }
 
    return(

      <ThemeContext.Consumer> 
      {({themedark})=>


    (<div className={themedark?"episodes-dark":"episodes-light"} >        
            { 
                <MenuItemEpisode  key={data.episode.id}  otherProps={data.episode}/>
            }   
            {              


              edges                              
                  .map((edge) => (
                  <MenuItem key={edge.node.id} title={edge.node.name} from={"charFromEpisode"} epid={edge.node.id} image={edge.node.image} parrentsName={"CharactersItem"} />
                  ))   

            }
            {
               hasMore &&
              (
                <button className={themedark?'mybutton-dark':'mybutton-light'} onClick={load5MoreCharacters}>Load More</button>
              )
            
            }   
                                  
        


            
             

      </div>)

    }
    </ThemeContext.Consumer> 

    );
}


export default EpisodeItemComponent