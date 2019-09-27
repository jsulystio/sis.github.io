import React from 'react';
import reactDOM from "react-dom";
import './App.css';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {}; 
  }

  render() {
    return (
      <div className = "root-container">

        <div className = "box-controller">
          <div className = "controller">
            Login
          </div>
          <div className = "controller">
            Register
          </div>
        </div>

        <div className = "box-container">

        </div>
      </div>
    );
  }
}

class RegisterBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  submitRegister(e) {
    
  }

  render() {
    
    return (
      <div className = "inner-container">
        <div className = "header">
          Register
        </div>
        <div className = "box">

          <div className = "input-group">
            <label htmlFor = "username">Username</label>
            <input type = "text" name = "username" className = "register-input" placeholder = "Username"/> 
          </div>

          <div className = "input-group">
            <label htmlFor = "password">Password</label>
            <input type = "text" name = "password" className = "register-input" placeholder = "Password"/> 
          </div>

          <button type = "button" className = "register-btn" onClick = {this.submitRegister.bind(this)}>Register</button>

        </div>
      </div>
    );
  };
}

export default App;

reactDOM.render (
  <App/>, document.getElementById("root"));
