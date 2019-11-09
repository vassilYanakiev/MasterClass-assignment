import React from 'react'
import HomePage from './pages/homepage/homepage.component.jsx';
import LoginPage from './pages/loginpage/login.component.jsx';
import Header from './components/header/header.component.jsx';
import PrivateRoute from './pages/private-page-wrapper/private-page-wrapper.jsx'

import MenuItemClicked from './components/menu-item-clicked/menu-item-clicked.component.jsx';
import Login from './components/login.component/mutation.login.component.jsx';
import MyButton from './components/mybutton/mybutton.component.jsx';
import CharactersPageComponent from './pages/characters-page/characters.page.component.jsx';
import './App-dark.scss';
import './App-light.scss';

import { Switch, Route, Redirect } from 'react-router-dom';
import Starships from './components/starships/starships.component.jsx';
import { useApolloClient } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';

import { useQuery } from '@apollo/react-hooks';
import {AUTHENTICATED_QUERY} from './pages/private-page-wrapper/private-page-wrapper.jsx';



function AppRoute(){
   
    const { data } = useQuery(AUTHENTICATED_QUERY);
   
    return(
        
        <Switch>
        {!data.authenticated &&
            <Route exact path="/login">            
                                                
                    <Login/>       
                
            </Route>    
            
          },          
         {!data.authenticated &&
             <Redirect
             to={{
               pathname: "/login"
             }}
           /> 
            
          },   
          {data.authenticated &&
            <Route exact path="/login">            
                                                                                                           
              <Redirect to={{ pathname: "/episodes" }} />             
                
            </Route>    
            
          },
           {
          <PrivateRoute >

              <div>  
                <Header/>
              </div>    
          
            <Route  exact path='/characters' render={(props) => <CharactersPageComponent {...props} mybutton={<MyButton/>} />}/>  
            <Route  exact path='/characters/:id' render={(match ) => <MenuItemClicked {...match}   />}></Route>            
            <Route  exact path='/episodes' render={(props) => <HomePage {...props}   />}/>              
            <Route  exact path='/episodes/:id' render={(match ) => <MenuItemClicked {...match}  />}></Route> 
            <Route  exact path='/starships/starships:id' render={(match ) => <MenuItemClicked {...match}   />}></Route> 
           
           
            
          </PrivateRoute>}
          
                            
      </Switch>


    )



}

export default AppRoute;