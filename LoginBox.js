import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LoginBox.css';

class LoginBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      usernameValid: false,
      passwordValid: false,
      formValid: false
    };
  }

  handleUsernameChange = event => {
    this.setState({ username: event.target.value }, () => { 
        this.validateUsername();
      });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value }, () => { 
        this.validatePassword();
      });
  }

  validateUsername = () => {
    const { username } = this.state;
    this.setState({
      usernameError:
        username.length > 3 ? null : 'Username must be longer than 3 characters'
    });
  }
  
  validatePassword = () => {
    const { password } = this.state;
    this.setState({
      passwordError:
        password.length > 3 ? null : 'Password must be longer than 3 characters'
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    alert(`Your state values: \n
          username: ${username} \n
          password: ${password}`)
  }

  render() {

    return (
      <div className = "container">

        <center>  

        <div className = "header">
          Login 
        </div>
      
        <div className = "form-container">
          
          <Form onSubmit = {this.handleSubmit}>
            
            <div className = "form-group">
              <Form.Control name = "username" 
                    value = {this.state.username}
                    onChange = {this.handleUsernameChange} 
                    onBlur = {this.validateUsername}
                    placeholder = "Username"/> 
              <div className = "error-feedback" style={{color: "red"}}>{this.state.usernameError}</div>
            </div>

              <div className = "form-group">
                <Form.Control type = "password" 
                  name = "password"
                  value = {this.state.password}
                  onChange = {this.handlePasswordChange}
                  onBlur = {this.validatePassword} 
                  placeholder = "Password"/> 
                <div className = "error-feedback" style={{color: "red"}}>{this.state.passwordError}</div>
              </div>
            <br />

            <Button type = "submit" className = "login-btn">Login</Button>
          </Form>
        </div>
        </center>

    </div>
    );
  };
}

export default LoginBox;
