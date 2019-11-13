import React from 'react';

import gql from 'graphql-tag.macro';

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

export default ALL_CHAR_QUERY;