import React, { Component } from 'react';
import './App.css';
import PokeItem from './PokeItem.js'
import data from './data.js';

export default class PokeList extends Component {
    render() {
        const pokeNode = this.props.pokedex.map(pokemon => <PokeItem pokemon={pokemon}></PokeItem>)
        return(
            <div id="list-div">
                <div id="list-top">
                POKELIST HEADER
                </div>
                <div id="list-bottom">
                    <ul>
                        {pokeNode}
                    </ul>
                </div>
            </div>
        );
    }
}