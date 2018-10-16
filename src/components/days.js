import React, { Component } from 'react';
import ShowList from './showlist';
import AddModal from './addmodal';

export default class Days extends Component {
  render() {
    const { mon, tue, wed, thu, fri, sat, sun } = this.props.days;
    return (
      <div className="row">
        <div className="col-md-4 col-xs-12">
          <div className="card">
            <ul className="list-group">
              <li className="list-group-item">Sunday - {sun.length} shows</li>
              <li className="list-group-item">Monday - {mon.length} shows</li>
              <li className="list-group-item">Tuesday - {tue.length} shows</li>
              <li className="list-group-item">
                Wednesday - {wed.length} shows
              </li>
              <li className="list-group-item">Thursday - {thu.length} shows</li>
              <li className="list-group-item">Friday - {fri.length} shows</li>
              <li className="list-group-item">Saturday - {sat.length} shows</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
