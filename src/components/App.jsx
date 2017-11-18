import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './List.jsx';

export default class App extends Component {

  render(){
    return (
      <div className="app">
        <List />
      </div>
    )
  }
}
