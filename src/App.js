import React from 'react';


import './App-dark.scss';
import './App-light.scss';
import AppRoute from './App.route.components.jsx'



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
        
     
      
          
              <AppRoute/>
        
       
      
      </ThemeContext.Provider> 
    </div>
    
  );
}



}
export default App;
