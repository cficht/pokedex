import React, { Component } from 'react';
import './App.css';
import data from './data.js';

export default class PokeItem extends Component {
    render() {
        return(
            <li className="poke-item">
                <h2>{this.props.pokemon.pokemon}</h2>
                <img src={this.props.pokemon.url_image} alt=""></img>
                <h5>{this.props.pokemon.type_1}</h5>
                <h5>{this.props.pokemon.type_2}</h5>
                <h5>{this.props.pokemon.attack}</h5>
                <h5>{this.props.pokemon.defense}</h5>
            </li>
        );
    }
}