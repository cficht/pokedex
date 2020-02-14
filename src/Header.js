import React, { Component } from 'react';
import './App.css';

export default class Header extends Component {
    render() {
        return(
            <div id="header-div">
                <img src={this.props.logo} alt=""></img>
            </div>
        );
    }
}