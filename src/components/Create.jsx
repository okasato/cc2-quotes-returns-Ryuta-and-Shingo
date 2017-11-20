import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Create extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    
    const data = {
        quote: this.refs.quote.value,
        author: this.refs.author.value
      };

    fetch('http://localhost:1337/api', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      })
    })
      .then(res => {
        console.log(res, "=== inside FE promise return");
      }).then(body => {
        console.log(body);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render(){
    return (
      <div className="create">
        <form onSubmit={this.handleSubmit} >
          <label>
            Qoute:
            <input type="text" name='quote' ref='quote' />
          </label>
          <label>
            Author:
            <input type="text" name='author' ref='author' />
          </label>
          <input type="submit" value="create"/>
        </form>
      </div>
    );
  }

}