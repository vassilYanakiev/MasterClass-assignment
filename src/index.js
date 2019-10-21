import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {ApolloProvider } from 'react-apollo';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloClient} from 'apollo-client';
import {gql} from 'apollo-boost';
import {setContext} from 'apollo-link-context';

import  './assets/SfDistantGalaxyOutline-xoeO.ttf'


const httpLink=createHttpLink({
    uri:'http://softuni-swapp-212366186.eu-west-1.elb.amazonaws.com/graphql'

});

const cache= new InMemoryCache();


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = 'eyJhbGciOiJIUzI123iIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOTZmYTFlYTQxYTA4MGY4YjIxMjMwMiIsImVtYWlsIjoiZGVtb0BzdDYuaW8iLCJyb2xlIjoiQURNSU4iL1KHHASDHXQiOjE1NzAxNzYwMjksImV4cCI6MTU3MDE3NzgyOX0.1vYZfspRxVA9wV_FbHL5N0YoVM8ZVQz9y09LfAgjwSc';
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer eyJhbGciOiJIUzI123iIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOTZmYTFlYTQxYTA4MGY4YjIxMjMwMiIsImVtYWlsIjoiZGVtb0BzdDYuaW8iLCJyb2xlIjoiQURNSU4iL1KHHASDHXQiOjE1NzAxNzYwMjksImV4cCI6MTU3MDE3NzgyOX0.1vYZfspRxVA9wV_FbHL5N0YoVM8ZVQz9y09LfAgjwSc`,
    }
  }
});

const client= new ApolloClient({
  link: authLink.concat(httpLink),
  cache

})

console.log(client.link);
client
.query({
  query: gql`
    {

      allPeople(first:1){
        edges{      
          node
          cursor
        }
        pageInfo{
          hasNextPage
        }
        
      }
    

  }`

}).then(res=>console.log(res));


ReactDOM.render(
    
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </ApolloProvider>  
    ,
    document.getElementById('root')
  );