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
import client1 from './client/client.js'



ReactDOM.render(

    <ApolloProvider client={client1}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider> 
    
    ,
    document.getElementById('root') 
  );


