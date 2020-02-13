import React from 'react';
import './App.css';
import Header from './Header.js';
import PokeList from './PokeList.js';
import request from 'superagent';

export default class App extends React.Component {
    state = { pokeDex: [] }

    async componentDidMount() {
		const pokeOnline = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=150');
    this.setState({ pokeDex: pokeOnline.body.results})
    console.log(this.state.pokeDex);
}
    render() {
        return(
            <div id="app-div">
              APP
              <Header />
              <PokeList pokedex={this.state.pokeDex ? this.state.pokeDex : 'loading' }/>
            </div>
        );
    }
}
