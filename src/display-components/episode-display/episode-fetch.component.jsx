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
import LoaderComponent from '../../components/loader.component.jsx';
import {ThemeContext} from '../../App.js';
import ErrorOnGraphqlFetch from '../../components/graphql-data-error.component.jsx'
import EmptyOnGraphqlFetch from '../../components/graphql-data-empty.component.jsx'

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
    if (loading) return(
  
      <div style={{"display" : "flex",'justify-content': 'center','margin-top':'300px'}}> 
          <LoaderComponent />
      </div> 
    
   )
    if (error) return (
      <ErrorOnGraphqlFetch/>
    )
    //<p>Error on getting all people</p>;
    
    
    const {
      episode: { people, pageInfo, totalCount },
    } = data;
    

    
    
    const edges= data.episode.people.edges;
    const hasMore= data.episode.people.pageInfo.hasNextPage;
    const numCharacters= data.episode.people.totalCount;
  
    var numCharacters2Add=0;
    
    const load5MoreCharacters = () => {
      
       

      fetchMore({
        variables: {
          
          first:5,
          after: data.episode.people.pageInfo.endCursor,
        },
        updateQuery:  (previo, { fetchMoreResult: { episode } }) => {
          if (!episode.people.edges.length) return previo;
          return {
            episode: {
              ...episode,
              edges: [...previo.episode.people.edges, ...episode.people.edges],
            },
          };
        }
      })
      
    }
 
    return(

      <ThemeContext.Consumer> 
      {({themedark})=>

    (data.episode)!==null?
    (
      <div >
      <div className={themedark?".episode-fetch-dark":".episode-fetch-light"} >        
            { 
                <MenuItemEpisode  key={data.episode.id}  otherProps={data.episode}/>
            }   
            <div style={{'padding':'20px','width':'100%',"height":edges?(`${edges.length/3*450*680/window.innerWidth+150}px`):"0px",
          "background-color":themedark?"black":"gray"}}>
                {edges                              
                      .map((edge) => (
                     
                      <MenuItem key={edge.node.id} title={edge.node.name} from={"charFromEpisode"} epid={edge.node.id} image={edge.node.image} parrentsName={"CharactersItem"} />
                      ))   
                }
             </div>
             <div style={{"display" : "flex",'justifyContent': 'center',"background-color":themedark?"black":"gray"}}> 
                  {hasMore &&
                    (
                      <button className={themedark?'mybutton-dark':'mybutton-light'} onClick={load5MoreCharacters}>Load More</button>
                    )            
                  }   
              </div>                    
        


            
             

      </div>
      </div>)
      :
      
      <EmptyOnGraphqlFetch/>

    }
    </ThemeContext.Consumer> 

    );
}


export default EpisodeItemComponent