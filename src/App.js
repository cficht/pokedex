import React from 'react';
import './App.css';
import Header from './Header.js';
import PokeList from './PokeList.js';
import request from 'superagent';

export default class App extends React.Component {
  state = { pokeDex: [] }

  async searchLoad() {

    const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
    const searchQuery = window.location.hash.slice(1);
    const searchToLoad = `${URL}?${searchQuery}`;
    
    const newPokemon = await request.get(searchToLoad);
    this.setState({ pokeDex: newPokemon.body.results})
  }

  async componentDidMount() {
    const pokeOnline = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
    this.setState({ pokeDex: pokeOnline.body.results })
    
    window.addEventListener('hashchange', () => {
      this.searchLoad()
    })
  }

  render() {

    return (
      <div id="app-div">
        <Header logo={"pokedexlogo.png"} />
        <PokeList pokedex={this.state.pokeDex} />
      </div>
    );
  }
}
