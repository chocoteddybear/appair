import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// HTTP request

const path = "http://35.225.146.132:3000/api/chat/list";

componentDidMount() {
    const options = {
      method: "GET",
      body: JSON.stringify(item),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": "b32f9a44-151b-46ed-8cba-1eaeb58360df",
        "cache-control": "no-cache",
      }),
      mode: 'no-cors'
    }

    return fetch(path, options)
      .then(response => response.json())
      .then(list => {
        this.setState({
          list
        });
      });
      .catch(error => console.error(`Error: ${error}`));
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
  }

  render() {
    console.log(this.state.list);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
