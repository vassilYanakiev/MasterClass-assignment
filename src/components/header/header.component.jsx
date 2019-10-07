import React from 'react';
import { Link } from 'react-router-dom';
import {ThemeContext} from '../../App.js';


import './header.styles.scss';

const Header = () => (
<ThemeContext.Consumer>
    {({ changeTheme,theme }) => (
      <div style={theme}>
        
          <button onClick={changeTheme}>
            STYLE
          </button>
        
          
       
        <div className='header'>
      <div className='options'>
        <Link className='option' to='/moviepage'>
          HEADER
        </Link>
        </div>
    </div>
      
      </div>
    )}
  </ThemeContext.Consumer>


  
   
  
  



 
);



export default Header;
