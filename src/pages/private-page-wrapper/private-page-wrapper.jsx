import React from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';
import { useApolloClient } from '@apollo/react-hooks';




export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

export default function PrivateRoute({ children }) {





    return (
              children
            
          )
  }