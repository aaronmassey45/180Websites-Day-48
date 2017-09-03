import React, { Component } from 'react';
import { Accordion, Panel } from 'react-bootstrap';
import ShowList from './showlist';
import AddModal from './addmodal'

export default class Days extends Component {
  constructor(props) {
    super(props);

    if (JSON.parse(localStorage.getItem("_user_shows")) === null) {
      this.state = {
        mon: [],
        tue: [],
        wed: [],
        thur: [],
        fri: [],
        sat: [],
        sun: []
      }
    } else {
      this.state = JSON.parse(localStorage.getItem("_user_shows"));
    }
  }

  addShow = (day, title, time, meridiem) => {
    let on = this.state[day];
    on.push({
      title,
      time,
      meridiem
    });
    this.setState({ [day]: on }, this.setStorage)
  }

  handleDelete = (day, title) => {
    let on = this.state[day];
    let index = on.findIndex(x => x.title === title);
    on.splice(index, 1);
    this.setState({ [on]: on }, this.setStorage)
  }

  setStorage = () => {
    localStorage.setItem("_user_shows", JSON.stringify(this.state));
  }

  render() {
    let { mon,tue,wed,thur,fri,sat,sun } = this.state;
    return (
      <div className='Days'>
        <AddModal addShow={this.addShow}/>
        <Accordion>
            <Panel header="Monday" eventKey="1">
              <ShowList list={mon} day="mon" onDelete={this.handleDelete} />
            </Panel>
            <Panel header="Tuesday" eventKey="2">
              <ShowList list={tue}  day="tue" onDelete={this.handleDelete} />
            </Panel>
            <Panel header="Wednesday" eventKey="3">
              <ShowList list={wed}  day="wed" onDelete={this.handleDelete} />
            </Panel>
            <Panel header="Thursday" eventKey="4">
              <ShowList list={thur}  day="thur" onDelete={this.handleDelete} />
            </Panel>
            <Panel header="Friday" eventKey="5">
              <ShowList list={fri}  day="fri" onDelete={this.handleDelete} />
            </Panel>
            <Panel header="Saturday" eventKey="6">
              <ShowList list={sat}  day="sat" onDelete={this.handleDelete} />
            </Panel>
            <Panel header="Sunday" eventKey="7">
              <ShowList list={sun}  day="sun" onDelete={this.handleDelete} />
            </Panel>
          </Accordion>
      </div>
    );
  }
}
