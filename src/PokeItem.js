import React, { Component } from 'react';
import './App.css';
// import data from './data.js';

export default class PokeItem extends Component {
    render() {
        return(
            <li className="poke-item">
                <h2><span className="name-case">{this.props.pokemon.pokemon}</span></h2>
                <img src={this.props.pokemon.url_image} alt=""></img>
                <h5>Type: <span className="name-case">{this.props.pokemon.type_1}</span></h5>
                <h5>Attack: {this.props.pokemon.attack}</h5>
                <h5>Defense: {this.props.pokemon.defense}</h5>
            </li>
        );
    }
}