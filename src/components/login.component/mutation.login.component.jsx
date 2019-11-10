import React from 'react';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Loader from 'react-loader-spinner'
import LoaderComponent from '../../components/loader.component.jsx';
import {withRouter} from 'react-router-dom';
import LoginPage  from '../../pages/loginpage/login.component.jsx';
import client2 from '../../index.js';

var loginFailure=false;


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
 
 if (loading) return(
  
    <div style={{"display" : "flex",'justifyContent': 'center','margin-top':'300px'}}> 
        <LoaderComponent />
    </div> 
  
 )
 

  if (error) {loginFailure=true}
  else {loginFailure=false};

  return <LoginPage login={login} loginFailure={loginFailure} />;
}

export default withRouter(Login)