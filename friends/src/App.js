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
        
      </div>
    );
  }
}

export default App;
