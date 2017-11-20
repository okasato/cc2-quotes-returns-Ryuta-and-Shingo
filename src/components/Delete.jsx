import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Delete extends Component {
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    event.preventDefault();
    
    const data = {
        index: this.refs.index.value,
    };

    fetch('http://localhost:1337/api', {
      method: 'DELETE',
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
      <div className="delete">
        <form onSubmit={this.handleDelete} >
          <label>
            Index:
            <input type="number" name='index' ref='index' />
          </label>
          <input type="submit" value="delete" />
        </form>
      </div>
    );
  }

}