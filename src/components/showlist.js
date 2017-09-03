import React, { Component } from 'react';
import TVShow from './tvshow';

export default class ShowList extends Component {
  onDelete = (day, title) => {
    this.props.onDelete(day, title);
  }

  render() {
    const { list } = this.props;
    let shows = list.map((show, index) => {
      return <TVShow key={index} show={show} day={this.props.day} onDelete={this.onDelete} />
    });

    if ( this.props.list.length === 0 ) {
      return (
        <div>No Shows Set!</div>
      )
    }
    return (
      <div className='ShowList'>
        {shows}
      </div>
    );
  }
}
