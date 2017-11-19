import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './List.jsx';
import { getQuotesList } from '../utils/index.js';
import Create from './Create.jsx'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quotesList: null,
      currentView: 'List',
      selectedQuote: null,
      loading: false
    }
  }

  componentDidMount(){
    this.getQuotes()
      .then(quotesList => {
        this.setState({
          quotesList,
          loading: true
        })
      })
  }

  getQuotes(){
    console.log("I am in getQuotes")
    return getQuotesList();    
  }


  render(){
    return (
      <div className="app">
        <Create />
        <List 
          quotesList = {this.state.quotesList}
          loading = {this.state.loading}
        />
      </div>
    )
  }
}
