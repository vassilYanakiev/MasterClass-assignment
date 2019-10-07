import React from 'react';

import HomePage from './pages/homepage/homepage.component.jsx';
import Login from './pages/loginpage/login.component.jsx';
import Header from './components/header/header.component.jsx';

import styles from './App.scss';
import StickyHeader from 'react-sticky-header';
import { Switch, Route } from 'react-router-dom';

const theme = {
  light:{
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};
//var myObjectStore={dark:true};
/*const getmyObjectStore=(myObjectStore)=>{ 
  myObjectStore=JSON.parse(localStorage.getItem('myItem'));
  console.log(myObjectStore.dark);
  

};
getmyObjectStore(myObjectStore);*/
//console.log(myObjectStore);
export const ThemeContext = React.createContext({ theme: theme.dark });



class App extends React.Component {
  
constructor(){
  super();
  let myStoredObject=JSON.parse(localStorage.getItem('myItem'));
  this.state=myStoredObject?{dark:myStoredObject.dark}:{dark:true};
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

  get theme() {
    return this.state.dark ? theme.dark : theme.light;
  }

  
render() {
  
  return (   
    <ThemeContext.Provider
        value={{ theme: this.theme, changeTheme: this.handleChangeTheme }}
        >
    <div>     
      <Header/>   
      <div>{this.state.dark?"TRUE":"FALSE"}</div>
      
      
      <Login/>
      <div style={this.theme}> 


       
      
      
      <Switch>
          <Route exact path='/' render={(props) => <HomePage {...props} theme={this.state} />}/>  
                  
      </Switch>
      </div> 
    </div>
    </ThemeContext.Provider>
  );
}



}
export default App;
