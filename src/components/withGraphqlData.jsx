import React from 'react';
import {gql} from 'apollo-boost';
import client1 from '../client/client.js';

    
const dataCharacters=[
    {
      title: 'CHARACTER1',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Star_Wars_Aftermath_Cover.jpg',
      id: 1,
      linkUrl: 'CHARACTER1',
      episode: 'EPISODE1'
    },
    {
      title: 'CHARACTER2',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Star_Wars_Aftermath_Empire%27s_End_cover_%282017%29.jpg',
      id: 2,
      linkUrl: 'CHARACTER2',
      episode: 'EPISODE1'
    },
    {
      title: 'CHARACTER3',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Star_Wars_Aftermath_Life_Debt_cover_%282016%29.jpg',
      id: 3,
      linkUrl: 'CHARACTER3',
      episode: 'EPISODE2'
    },
    {
      title: 'CHARACTER4',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b2/Star_Wars_-_Shield_of_Lies.jpg',
      id: 4,
      linkUrl: 'CHARACTER4',
      episode: 'EPISODE2'
      
    },
    {
      title: 'CHARACTER5',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a9/StarWars_Allegiance.jpg',
      id: 5,
      linkUrl: 'CHARACTER5',
      episode: 'EPISODE3'
    },
    {
      title: 'CHARACTER6',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d8/Secret_of_the_Jedi.jpg',
      id: 6,
      linkUrl: 'CHARACTER6',
      episode: 'EPISODE3'
    }
  ];


  const dataEpisodes=[
    {
      title: 'EPISODE1',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Star_Wars_Aftermath_Cover.jpg',
      id: 1,
      linkUrl: 'EPISODE1',
      synopsis:'There is unrest in the Galactic Senate. Several thousand solar systems have declared their....'
    },
    {
      title: 'EPISODE2',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Star_Wars_Aftermath_Empire%27s_End_cover_%282017%29.jpg',
      id: 2,
      linkUrl: 'EPISODE2',
      synopsis:'There is unrest in the Galactic Senate. Several thousand solar systems have declared their....'
    },
    {
      title: 'EPISODE3',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Star_Wars_Aftermath_Life_Debt_cover_%282016%29.jpg',
      id: 3,
      linkUrl: 'EPISODE3',
      synopsis:'There is unrest in the Galactic Senate. Several thousand solar systems have declared their....'
    },
    {
      title: 'EPISODE4',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b2/Star_Wars_-_Shield_of_Lies.jpg',
      id: 4,
      linkUrl: 'EPISODE4',
      synopsis:'There is unrest in the Galactic Senate. Several thousand solar systems have declared their....'
    },
    {
      title: 'EPISODE5',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a9/StarWars_Allegiance.jpg',
      id: 5,
      linkUrl: 'EPISODE5',
      synopsis:'There is unrest in the Galactic Senate. Several thousand solar systems have declared their....'
    },
    {
      title: 'EPISODE6',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d8/Secret_of_the_Jedi.jpg',
      id: 6,
      linkUrl: 'EPISODE6',
      synopsis:'There is unrest in the Galactic Senate. Several thousand solar systems have declared their....'
    }
    
  ];

 function withGraphql(WrappedComponent,getList){
 
    return class extends React.Component {
        constructor(props) {
          super(props)
          this.state = { sections: [] }
        }
    
        componentDidMount() {
               
          const mysections=[];
              this.setState(getList==='characters'? {sections:dataCharacters}:{sections:dataEpisodes});
              
              client1
              .query({
                query: gql`
                  {
              
                   
                      allEpisodes(first:7){
                        edges{
                            node{
                              id
                              title
                              episodeId
                              openingCrawl
                              image                              
                            }
                        }
                      }
                    
                  
              
                }`
              
              }).then(res=>
                
                {for(let i=0;i<res.data.allEpisodes.edges.length;i++){

                  mysections.push(res.data.allEpisodes.edges[i].node)
                  this.setState({sections:mysections})
                }},
                //console.log(res.data.allEpisodes.edges)
              
                
                );
        }
        
       
        
        render() {
          return <WrappedComponent sections={this.state.sections} {...this.props} />
        }
      }
    }





export default withGraphql;