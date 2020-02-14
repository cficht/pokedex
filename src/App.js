import React from 'react';
import './App.css';
import Header from './Header.js';
import PokeList from './PokeList.js';
import request from 'superagent';

export default class App extends React.Component {
  state = 
  { pokeDex: [],
    totalPokemon: 801,
    perPage: 20,
    totalPage: 41
  }

  async searchLoad() {
    const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
    const searchQuery = window.location.hash.slice(1);
    const searchToLoad = `${URL}?${searchQuery}`;
    
    const newPokemon = await request.get(searchToLoad);
    this.setState({ pokeDex: newPokemon.body.results});
    this.setState({ totalPokemon: newPokemon.body.count});
    const newTotalPage = Math.ceil(this.state.totalPokemon/this.state.perPage);
    this.setState({ totalPage: newTotalPage });
  }

  async componentDidMount() {
    const pokeOnline = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
    this.setState({ pokeDex: pokeOnline.body.results });
    this.setState({ totalPokemon: pokeOnline.body.count});

    window.addEventListener('hashchange', () => {
      this.searchLoad();
    })
  }

  render() {
    return (
      <div id="app-div">
        <Header logo={"pokedexlogo.png"} />
        <PokeList pokedex={this.state.pokeDex} totalPokemon={this.state.totalPokemon} totalPage={this.state.totalPage}/>
      </div>
    );
  }
}