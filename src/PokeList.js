import React, { Component } from 'react';
import './App.css';
import PokeItem from './PokeItem.js'
import shortid from 'shortid';

export default class PokeList extends Component {
    render() {
        const pokeNode = this.props.pokedex.map(pokemon => <PokeItem pokemon={pokemon} key={shortid.generate()}></PokeItem>)
        return (
            <div id="list-div">
                <div id="list-top">
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