import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Update extends Component {
  constructor(props){
    super(props)
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(event) {
    event.preventDefault();
    
    const data = {
      index: this.refs.index.value,
      quote: this.refs.quote.value,
      author: this.refs.author.value
    };

    fetch('http://localhost:1337/api', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      })
    })
      .then(body => {
        console.log(body);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render(){
    return (
      <div className="update">
        <form onSubmit={this.handleUpdate} >
        <label>
            Index:
            <input type="number" name='index' ref='index' />
          </label>
          <label>
            Qoute:
            <input type="text" name='quote' ref='quote' />
          </label>
          <label>
            Author:
            <input type="text" name='author' ref='author' />
          </label>
          <input type="submit" value="update"/>
        </form>
      </div>
    );
  }

}