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

export default client2;
