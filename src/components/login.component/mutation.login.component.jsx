import React from 'react';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { withRouter } from 'react-router-dom';
import LoginPage  from '../../pages/loginpage/login.component.jsx';
import client2 from '../../index.js';




const LOG_IN = gql`
mutation Login($email: String!,$password: String!){
  signIn(email: $email, password: $password) {
   	token
  }

  }
`;






const Login= function () {

 const client=useApolloClient();
  const [login, { loading, error }] = useMutation(LOG_IN,
    
     {
     options: { client: client2 },
     onCompleted: ({ signIn: token   }) => {
    
      localStorage.setItem("token", token.token );
      client.writeData({ data: { authenticated: true } });
      
    },
  });
 
 //if (loading) return <Loading />;
  if (error) return <p>An error occurred</p>;

  return <LoginPage login={login} />;
}

export default withRouter(Login)