import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Prompt,
  Switch
} from 'react-router-dom';

import './Header.css';

const Home = (props) => (
  <div>
  <h1> This is the home page</h1>
</div>
) ;

const About = (props) => (
  <div>
  <h1> This is the about page</h1>
</div>
) ;
const Contact = (props) => (
  <h1> This is the contact page</h1>
) ;

const User = (props) => {
  console.log(props.name);
  return <h1> Welcome {props.name}</h1>;
}
const NotFound = () =>(
  <h3 style={{color:'brown'}}>The page wasn't found</h3>
)
const Login = () =><h1> Please login</h1>;

const Header = (props) => {
    return (
        <header>
            <div id="maintitle">
		        <Router>
			        <div>
			            <ul>
				            <li><NavLink exact activeStyle ={{color:'white'}} to="/">Home</NavLink></li>
				            <li><NavLink exact activeStyle ={{color:'white'}} to="/about">About</NavLink></li>
				            <li><NavLink exact activeStyle ={{color:'white'}} to="/contact">Contact</NavLink></li>
				            <li><NavLink exact activeStyle ={{color:'white'}} to="/user/foo">User</NavLink></li>
			            </ul>

			            <Switch>
				            <Route exact path ="/" component ={Home}/>
				            <Route exact path ="/about" component ={About}/>
				            <Route exact path ="/contact" component ={Contact}/>
				            <Route exact path ="/user/:userId" render ={(props) => {
				              return this.state.login ? (<User name ={props.match.params.userId}/>) :(<Redirect to = '/login' />)
				            }}/>
				            <Route exact path = "/login" component ={Login} />
				            <Route component = {NotFound} />
			            </Switch>
			        </div>
			    </Router>


                <h1>Let's talk</h1>
                <p>Think you have what it takes? Show us.</p>
            </div>
        </header>
    );
}

export default Header;