import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getQuotesList } from '../utils/index.js';
import axios from 'axios';

export default class List extends Component {

  componentDidMount(){
    this.getQuotes(); 
  }

  getQuotes(){
    // return getQuotesList()
    //   .then(array => {
    //     console.log(array);
    //   });
    console.log("I am in getQuotes")
    axios.get('http://localhost:1337/api/')
      .then(response => {
        console.log(response, '@@@@@@@@@@@@');
      })
    
  }
  render(){
    return (
      <div className="list">List is loading...</div>
    )
  }
}
