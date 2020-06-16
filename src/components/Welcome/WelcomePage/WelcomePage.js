import React, {Component} from 'react';
import './WelcomePage.css';

class WelcomePage extends Component {

    logOutHandler = () => {
        window.location.href = '/';
    }
    render() {
        console.log(this.props);
        return (
            <div className="WelcomePage">
                <h1>WELCOME PAGE</h1>
                <img src="https://media.giphy.com/media/OkJat1YNdoD3W/giphy.gif" /><br/>
                <button type="button" onClick={() => this.logOutHandler()} className="btn" id="logout">Log out</button>
            </div>
        )
    }
}

export default WelcomePage