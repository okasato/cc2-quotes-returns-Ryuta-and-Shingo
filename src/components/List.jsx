import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class List extends Component {
  constructor(props){
    super(props)
  }

  render(){
    if (!this.props.loading){
      return(
        <div className='list'>
          List is loading...
        </div>
      )
    } else {
      return (
        <div className="list">
          <ul>
            {this.props.quotesList.map((data, index) => {
              return (
                <li key={index}>
                  {'No. ' + data.id + ' quote: ' + data.quote + ' author: ' + data.author}
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
  }
}
