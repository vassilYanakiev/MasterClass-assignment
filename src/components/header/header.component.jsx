import React from 'react';
import { Link } from 'react-router-dom';
import {ThemeContext} from '../../App.js';
import { ReactComponent as LogoutSvg } from '../../assets/logout.svg';
import { ReactComponent as LogoutSvg2 } from '../../assets/logout2.svg';
import { useApolloClient } from '@apollo/react-hooks';
import client2 from '../../client/client.js';
import './header.styles.light.scss';
import './header.styles.dark.scss';
import { withRouter } from 'react-router-dom';
const Header= function () {


//const context=useContext(LoggedInContext);
const client2 = useApolloClient();
return(
<ThemeContext.Consumer>
    {({ themedark,changeTheme }) => (
      <div className="sticky" >
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
                <button className="buttonh3" onClick={()=>(
                   client2.writeData({ data: { authenticated: false } }),
                   window.localStorage.setItem("token","")
                   )
                 //</div></div> context.changeLogin()
                  
                  }>
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


export default withRouter(Header)