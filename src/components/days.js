import React, { Component } from 'react';
import { Accordion, Panel } from 'react-bootstrap';
import ShowList from './showlist';
import AddModal from './addmodal';

export default class Days extends Component {
  constructor(props) {
    super(props);

    if (JSON.parse(localStorage.getItem('_user_shows')) === null) {
      this.state = {
        mon: [],
        tue: [],
        wed: [],
        thur: [],
        fri: [],
        sat: [],
        sun: [],
      };
    } else {
      this.state = JSON.parse(localStorage.getItem('_user_shows'));
    }
  }

  addShow = (day, title, time, meridiem) => {
    let on = this.state[day];
    on.push({
      title,
      time,
      meridiem,
    });
    this.setState({ [day]: on }, this.setStorage);
  };

  handleDelete = (day, title) => {
    let on = this.state[day];
    let index = on.findIndex(x => x.title === title);
    on.splice(index, 1);
    this.setState({ [on]: on }, this.setStorage);
  };

  setStorage = () => {
    localStorage.setItem('_user_shows', JSON.stringify(this.state));
  };

  render() {
    let { mon, tue, wed, thur, fri, sat, sun } = this.state;
    return (
      <div className="Days">
        <AddModal addShow={this.addShow} />
        <div className="card">
          <div className="card-title">Days</div>
        </div>
      </div>
    );
  }
}
