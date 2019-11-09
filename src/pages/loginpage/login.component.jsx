import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import {LoggedInContext} from '../../App.js';
import {ThemeContext} from '../../App.js';

import './login.styles.dark.scss';
import './login.styles.light.scss';
import { withRouter, Redirect } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      wrong: false
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.login({ variables: { email: this.state.email, password: this.state.password } });
    
    
  }

  render() {
    return (
    <ThemeContext.Consumer> 
      {({themedark})=>
      
      <div className={themedark?'LoginDark':'LoginLight'}>       
        SWAPP
        {<LoggedInContext.Consumer>  
        {({changeLogin})=>

          <div >
            <form className="form" onSubmit={this.handleSubmit} >
              <FormGroup className='formgroup' controlId="email" >
                <FormLabel >Email </FormLabel>
                <br/> 
                  <FormControl
                    autoFocus
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
               
              </FormGroup>
              <FormGroup className='formgroup' controlId="password" >
                <FormLabel>Password</FormLabel>
                <br/> 
                <FormControl
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
              </FormGroup>
              <Button className='button'
                /*onClick={ ()=>
                  (this.state.email==='demo@st6.io' && this.state.password==='demo1234')?
            
                   ( this.props.history.push(`/episodes`),
                    changeLogin())
                          
                    :
                    this.setState({wrong:true, email:'',password:''}) 
                               
                
                }*/
                
                block         
                disabled={!this.validateForm()}
                type="submit"
              >
                Login
              </Button>
            </form>
          
            <div>
              {this.state.wrong && 
              <p>  Wrong mail or password! </p>  
              }        
            </div> 
          </div>
      }
        </LoggedInContext.Consumer> }
        </div> 
        } 
      </ThemeContext.Consumer> 


    );
  }
}

const LoginPage = withRouter(LoginForm);
export default LoginPage;
