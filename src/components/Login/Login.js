import React, {Component} from 'react';
import WelcomePage from '../Welcome/WelcomePage/WelcomePage';
import {NavLink, Route, Redirect} from 'react-router-dom';
import './Login.css';

class Login extends Component {

    state = {
        userName: null,
        password: null,
        status: false
    }

    userNameHandler = event => {
        this.setState({
            userName: event.target.value
        })
    }

    passwordHandler = event => {
        this.setState({
            password: event.target.value
        })
    }

    loginHandler = () => {
        const userName = localStorage.getItem('userName');
        const password = localStorage.getItem('password');
        console.log(typeof password);
        if(userName.localeCompare(this.state.userName) == 0 && password == this.state.password && this.state.userName != null && this.state.password != null) {
           this.setState({
               status: true
           })
           alert("Login successfull!");
        }
        else if((userName.localeCompare(this.state.userName) != 0 || password != this.state.password) && this.state.userName != null && this.state.password != null) {
            alert("Wrong UserName/Password");
        }
        else if(this.state.userName == null || this.state.password == null) {
            alert("Missing items");
        }

    }

    render() {
       console.log(this.state.status1);
        if(this.state.status) {
            return <WelcomePage />
        }
        return (
            <div className="Login">
                <h3 className="lgn">Login</h3>
                <h5 className="lgn">UserName: <input type="text" className="form-control" onChange={(event) => this.userNameHandler(event)} /></h5>
                <h5 className="lgn">Password: <input type="password" className="form-control" onChange={(event) => this.passwordHandler(event)} /></h5>
                <button type="button"  className="btn" onClick={() => this.loginHandler()}>Login</button>
            </div>
        ) 
    }
}

export default Login