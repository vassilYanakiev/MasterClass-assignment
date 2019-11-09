import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';


 class Starships extends Component{

    handleButtonClick=()=>{
    
        return(
       
            <Redirect to={{
                pathname: "/starships/starship1"
                
            }}/>
      
        
        );
      }  
render(){
    return(

     <div onClick={() => this.handleButtonClick()}>
        <button>Starships</button>
        

    </div>        
    );
    }


}

export default withRouter(Starships);