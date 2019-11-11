import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {ApolloProvider } from 'react-apollo';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloClient} from 'apollo-client';
import {setContext} from 'apollo-link-context';

import  './assets/SfDistantGalaxyOutline-xoeO.ttf'
import { typeDefs } from '../src/client/local.js';

const httpLink=createHttpLink({
    uri:'https://swapp.st6.io/graphql'

});

const cache= new InMemoryCache();


const authLink1 = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    },
  };
});

const authLink2 = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? token : ""
    },
  };
});

export const client1= new ApolloClient({
  link: authLink1.concat(httpLink),
  cache,
  typeDefs:typeDefs

})

 const client2= new ApolloClient({
  link: authLink2.concat(httpLink),
  cache,
  typeDefs:typeDefs

})

cache.writeData({
  data: {
    authenticated: !!localStorage.getItem('token'),
  },
});





ReactDOM.render(

    <ApolloProvider client={client1}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider> 
    
    ,
    document.getElementById('root')
  );

  export default {client2}
