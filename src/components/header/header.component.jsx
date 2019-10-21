import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {ThemeContext,LoggedInContext} from '../../App.js';
import { ReactComponent as LogoutSvg } from '../../assets/logout.svg';
import { ReactComponent as LogoutSvg2 } from '../../assets/logout2.svg';

import './header.styles.light.scss';
import './header.styles.dark.scss';

export default function Header () {


const context=useContext(LoggedInContext);
return(
<ThemeContext.Consumer>
    {({ themedark,changeTheme }) => (
      <div className="sticky">
      <div className={themedark?'headerDark':'headerLight'}>
          
          <button className="logo-container" onClick={changeTheme}>
            SWAPP
          </button>             
       
              <div className="options">
                <button className="buttonh2">
                  <Link className='option' to='/episodes'>
                    Episodes
                  </Link>
                </button>
                <button className="buttonh2">
                <Link className='option' to='/characters'>
                    Characters
                  </Link>
                </button >
                <button className="buttonh3" onClick={()=> context.changeLogin()}>
                { themedark?
                  (<LogoutSvg />):
                  (<LogoutSvg2/>)
                }
                </button>

            </div>      
          </div>        
           
          </div>
      
      
      
    )}
  </ThemeContext.Consumer>
)
}