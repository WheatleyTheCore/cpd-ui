import React, { Component } from 'react';
import './App.css';
import Grid from './Components/Grid'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Grid />
        </header>
      </div>
    );
  }
}

export default App;
