import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class TVShow extends Component {
  handleDelete = (day,title) => {
    this.props.onDelete(day, title)
  }

  render() {
    const { show, day } = this.props;
    return (
      <div className='TVShow'>
        <h3><b>{show.title}</b></h3>
        <p>Time: {show.time} {show.meridiem}</p>
        <Button bsStyle="danger" onClick={() => this.handleDelete(day, show.title)}>Delete</Button>
        <hr/>
      </div>
    );
  }
}
