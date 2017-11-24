import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Messages from './Messages';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Messages />
      </div>
    );
  }
}

export default App;
