import React from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';

export default function PrivateRoute({ children, loggedin }) {
    return (
      <Route
        
        render={({ location }) =>
        loggedin ? (
            children
            
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }