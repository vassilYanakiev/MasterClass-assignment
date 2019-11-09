import React from 'react';

import HomePage from './pages/homepage/homepage.component.jsx';
import LoginPage from './pages/loginpage/login.component.jsx';
import Header from './components/header/header.component.jsx';
import PrivateRoute from './pages/private-page-wrapper/private-page-wrapper.jsx'

import MenuItemClicked from './components/menu-item-clicked/menu-item-clicked.component.jsx';
import Login from './components/login.component/mutation.login.component.jsx';
import MyButton from './components/mybutton/mybutton.component.jsx';
import './App-dark.scss';
import './App-light.scss';
import AppRoute from './App.route.components.jsx'
import { Switch, Route, Redirect } from 'react-router-dom';
import Starships from './components/starships/starships.component.jsx';

import gql from 'graphql-tag.macro';

import { useQuery } from '@apollo/react-hooks';


const theme = {
  light:{
    foreground: '#000000',
    background: ' #E8EAED',
    fontcolor:' #4E5B6E'
    
  },
  dark: {
    foreground: '#ffffff',
    background: ' #000',
  },
};

export const ThemeContext = React.createContext({ theme: theme.dark });
export const LoggedInContext = React.createContext(false);





class App extends React.Component {
  
constructor(){
  super();
  let myStoredObject=JSON.parse(localStorage.getItem('myItem'));
  this.state={
    myStoredObject:myStoredObject?{dark:myStoredObject.dark}:{dark:true},
    isLoggedIn:true
  }  
    

}  

  //

handleChangeTheme = () => {
    this.setState(({ dark }) => ({ dark: !dark }),()=>
      {
        let myObjectStore=this.state.dark?{dark:true}:{dark:false};       
        localStorage.setItem('myItem',JSON.stringify(myObjectStore));
      }
    );
  };

handleLoginState=()=>{
  
  this.setState(({isLoggedIn})=>({
    isLoggedIn:!isLoggedIn}),()=>console.log(this.state.isLoggedIn));
  
};

  get theme() {
    return this.state.dark ? theme.dark : theme.light;
  }

  
render() {

  return (   
    
    <div className={this.state.dark?'AppDark':'AppLight'}>     
     <ThemeContext.Provider
            value={{ themedark: this.state.dark, changeTheme: this.handleChangeTheme }}>     
        
     
      <div style={{"height" : "100%"}} >   
          
              <AppRoute/>
        
       
      </div> 
      </ThemeContext.Provider> 
    </div>
    
  );
}



}
export default App;
