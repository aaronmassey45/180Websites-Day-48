import React, { Component, Fragment } from 'react';
import uuidv4 from 'uuid/v4';

import Days from './components/Days';
import AddModal from './components/AddModal';
import ShowList from './components/ShowList';

export default class App extends Component {
  constructor(props) {
    super(props);

    const data = JSON.parse(localStorage.getItem('_user_shows'));

    this.state = {
      sun: data ? data.sun : [],
      mon: data ? data.mon : [],
      tue: data ? data.tue : [],
      wed: data ? data.wed : [],
      thu: data ? data.thu : [],
      fri: data ? data.fri : [],
      sat: data ? data.sat : [],
      selectedDay: { day: null, shows: [] },
    };
  }

  addShow = ({ day, hour, min, meridiem, title }) => {
    const shows = this.state[day];

    shows.push({
      title,
      hour,
      min,
      meridiem,
      id: uuidv4(),
    });

    this.setState({ [day]: shows }, this.setStorage);
  };

  handleDelete = (day, id) => {
    const filtered = this.state[day].filter(show => show.id !== id);
    this.setState(
      prevState => ({
        ...prevState,
        [day]: filtered,
        selectedDay: { ...prevState.selectedDay, shows: filtered },
      }),
      this.setStorage
    );
  };

  setStorage = () => {
    const { selectedDay, ...rest } = this.state;
    localStorage.setItem('_user_shows', JSON.stringify(rest));
  };

  selectDay = (dayString, dayObj) => {
    this.setState(prevState => ({
      ...prevState,
      selectedDay: { day: dayString, shows: prevState[dayObj] },
    }));
  };

  removeAll = () =>
    this.setState(
      {
        sun: [],
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        sat: [],
        selectedDay: { day: null, shows: [] },
      },
      this.setStorage
    );

  render() {
    const { sun, mon, tue, wed, thu, fri, sat, selectedDay } = this.state;
    return (
      <Fragment>
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1 mx-auto">TV Show Reminder</span>
        </nav>
        <div className="container">
          <h2 className="my-2">
            Add your favorite TV shows to keep track of when new episodes air!
          </h2>
          <AddModal addShow={this.addShow} />
          <button className="btn btn-danger" onClick={this.removeAll}>
            <b>Remove All Shows</b>
          </button>
          <div className="row">
            <Days
              days={{ sun, mon, tue, wed, thu, fri, sat }}
              selectDay={this.selectDay}
            />
            <ShowList
              day={selectedDay.day}
              shows={selectedDay.shows}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
