import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Create extends Component {
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
          <input type="submit" />
        </form>
      </div>
    );
  }

}