import React from 'react';
import './App.css';
import Header from './Header.js';
import PokeList from './PokeList.js';
import request from 'superagent';

export default class App extends React.Component {
  state = { pokeDex: [] }

  async componentDidMount() {
    const pokeOnline = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
    this.setState({ pokeDex: pokeOnline.body.results })
  }

  render() {
    return (
      <div id="app-div">
        <Header />
        <PokeList pokedex={this.state.pokeDex} />
      </div>
    );
  }
}
