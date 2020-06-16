import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import Login from '../Login/Login';
import './Register.css';

class Register extends Component {

    state = {
        userName: null,
        password: null,
        confirmPassword: null,
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

    confirmPasswordHandler = event => {
        this.setState({
            confirmPassword: event.target.value
        })
    }

    registrationHandler = () => {
        if(this.state.password != null && this.state.confirmPassword != null && this.state.password == this.state.confirmPassword && this.state.userName != null) {
            localStorage.setItem('userName', this.state.userName );
            localStorage.setItem('password', this.state.password);

            this.setState({
                status: true
            })
    
            alert("Registration successfull!");

        }
        else if(this.state.password != null && this.state.confirmPassword != null && this.state.password != this.state.confirmPassword && this.state.userName != null) {
            alert("Passwords don't match. Try again.");
        }
        else if(this.state.password == null || this.state.confirmPassword == null || this.state.userName == null) {
            alert("Missing items!!");
        }
       
    }

    loginHandler = () => {
        this.setState({
            status: true
        })
    }
    render() {
        let regLink = null;
        console.log(this.state.status);
        /* if(this.state.password == this.state.confirmPassword) {
            alert("yes");
        } */
        if(this.state.password == this.state.confirmPassword && this.state.password != null && this.state.confirmPassword != null && this.state.userName != null) {
            regLink = <button type="button" className="btn" onClick={() => this.registrationHandler()}>Register</button>;
        }
        else {
            regLink = <button type="button"  className="btn" onClick={() => this.registrationHandler()}>Register</button>;
        }
        
        if(this.state.status) {
            return <Login />
        }
        return (
            <div className="Register">
                <h3 className="reg">Registration</h3>
                <h5 className="reg">UserName: <input type="text" className="form-control" onChange={(event) => this.userNameHandler(event)} /></h5>
                <h5 className="reg">Password: <input type="password" className="form-control" onChange={(event) => this.passwordHandler(event)} /></h5>
                <h5 className="reg">Confirm Password: <input type="password"  className="form-control" onChange={(event) => this.confirmPasswordHandler(event)} /></h5>
                {regLink}
                <h5 className="reg">If already registered, please <NavLink to="/login"><span style={{color: 'red'}} onClick={() => this.loginHandler()}>Login</span></NavLink></h5>
            </div>
        )
        
    }
}

export default Register