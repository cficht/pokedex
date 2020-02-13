import React from 'react';
import './App.css';
import Header from './Header.js';
import PokeList from './PokeList.js';

export default class App extends React.Component {
    render() {
        return(
            <div id="app-div">
              APP
              <Header />
              <PokeList />
            </div>
        );
    }
}
