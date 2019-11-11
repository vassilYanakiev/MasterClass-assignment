import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';
import {ThemeContext} from '../../App.js';
import ReactApexChart from 'react-apexcharts';
import LoaderComponent from '../../components/loader.component.jsx';





const STARSHIP_CLASS_QUERY=gql`
          query AllStarship($first:Int!,$StarshipFilter:StarshipFilter){
            allStarships(first:$first,filter:$StarshipFilter ){
              edges{
                node{
                  name
                  model
                  starshipClass
                  cost
                  maxMLPerHour
                  maxAtmosphericSpeed
                  hyperdriveRating
                  crew
                  
                }
              }
              pageInfo {
                hasNextPage
              }  
              totalCount
              
          }
}`;


const StarshipCompare=({shipClass,otherProps})=>{
 

    const { data, loading, error } = useQuery(STARSHIP_CLASS_QUERY,
      
    {
      variables: {
        'first':50,
        'StarshipFilter':{"starshipClass": shipClass}                   
      }
    });
    if (loading) return(
  
      <div style={{"display" : "flex",'justifyContent': 'center','margin-top':'40vh'}}> 
          <LoaderComponent />
      </div> 
    
   )
    if (error) return <p>Error on getting starship</p>;
   
    const edges=data.allStarships.edges;
   
 const ownCost=otherProps.cost?otherProps.cost:0;
 const ownCrew=otherProps.crew?otherProps.crew:0;  
 const ownmaxMLPerHour=otherProps.maxMLPerHour?otherProps.maxMLPerHour:0;
 const ownmaxAtmosphericSpeed=otherProps.maxAtmosphericSpeed?otherProps.maxAtmosphericSpeed:0;
 const ownhyperdriveRating=otherProps.hyperdriveRating?otherProps.hyperdriveRating:0;

 //const maxCost=Array.from(edges, node => node.cost);
 const maxCost = Math.max(...edges.map((item) => (item.node.cost)),0);
 const minCost = Math.min(...edges.map((item) => (item.node.cost)),0);
 const rateCost=Math.round((ownCost-minCost)/(maxCost-minCost)*100);

 const maxCrew = Math.max(...edges.map((item) => (item.node.crew)),0);
 const minCrew = Math.min(...edges.map((item) => (item.node.crew)),0);
 const rateCrew=Math.round((ownCrew-minCrew)/(maxCrew-minCrew)*100);
 
 const maxmaxMLPerHour = Math.max(...edges.map((item) => (item.node.maxMLPerHour)),0);
 const minmaxMLPerHour = Math.min(...edges.map((item) => (item.node.maxMLPerHour)),0);
 const rateMLPerHour=(maxmaxMLPerHour-minmaxMLPerHour)?Math.round((ownmaxMLPerHour-minmaxMLPerHour)/(maxmaxMLPerHour-minmaxMLPerHour)*100):0;

 const maxmaxAtmosphericSpeed = Math.max(...edges.map((item) => (item.node.maxAtmosphericSpeed)),0);
 const minmaxAtmosphericSpeed = Math.min(...edges.map((item) => (item.node.maxAtmosphericSpeed)),0);
 const rateAtmosphericSpeed=Math.round((ownmaxAtmosphericSpeed-minmaxAtmosphericSpeed)/(maxmaxAtmosphericSpeed-minmaxAtmosphericSpeed)*100);

 const maxhyperdriveRating = Math.max(...edges.map((item) => (item.node.hyperdriveRating)),0);
 const minhyperdriveRating = Math.min(...edges.map((item) => (item.node.hyperdriveRating)),0);
 const ratehyperdriveRatin=Math.round((ownhyperdriveRating-minhyperdriveRating)/(maxhyperdriveRating-minhyperdriveRating)*100);
 
const state = {
  options: {
    plotOptions: {
      radar: {
          size: 140
      }},
    labels: ['AtmosphericSpeed', 'MLPerHour', 'Crew', 'hyperdriveRating', 'Cost'],
    title: {
      //text: 'Compared to Starship Class Max'
    },
    
    yaxis: {
        min:0,
        max:100,
        labels: {
          show: false}
    }
  },
  series: [{
    name: 'Series 1',
    data: [rateAtmosphericSpeed,rateMLPerHour, rateCrew, ratehyperdriveRatin, rateCost],
  }]
};
   
    return(
       
      //const xValues = Math.max(...Array.from(edges, o => o.maxAtmosphericSpeed));

      <ThemeContext.Consumer> 
      {({themedark})=>


     (<div >        
            
            <div id="chart">
            <ReactApexChart   options={state.options} series={state.series} type="radar" height="350" />
          </div>

      </div>)

    }
    </ThemeContext.Consumer> 

    );
}


export default StarshipCompare