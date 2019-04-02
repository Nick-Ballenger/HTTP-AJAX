import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import axios from 'axios'

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      postSuccessMessage: "",
      postError: "",
      deleteSuccessMessage: "",
      deleteError: "",
      updateSuccessMessage: "",
      updateError: "",
    }
  }
  getFriends = () => {
    axios.get('http://localhost:5000/friends')
         .then(res => {
           this.setState({ friends: res.data })
         })
         .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
