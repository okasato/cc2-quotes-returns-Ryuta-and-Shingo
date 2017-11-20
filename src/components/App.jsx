import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './List.jsx';
import { getQuotesList } from '../utils/index.js';
import Create from './Create.jsx';
import Delete from './Delete.jsx';
import Update from './Update.jsx';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quotesList: null,
      currentView: 'List',
      selectedQuote: null,
      loading: false
    }
    this.getQuotes = this.getQuotes.bind(this);
  }

  componentDidMount(){
    this.getQuotes()
  }

  getQuotes(){
    return getQuotesList()
    .then(quotesList => {
        this.setState({
          quotesList,
          loading: true
        })
      })
  }

  render(){
    return (
      <div className="app">
        <Create getQuotes={this.getQuotes}/>
        <Update />
        <Delete />
        <List 
          quotesList = {this.state.quotesList}
          loading = {this.state.loading}
        />
      </div>
    )
  }
}
