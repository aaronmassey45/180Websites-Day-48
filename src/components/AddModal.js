import React, { Component, Fragment } from 'react';

export default class AddModal extends Component {
  state = {
    title: '',
    hour: '12',
    min: '00',
    meridiem: 'PM',
    day: 'sun',
    titleError: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { day, title, hour, min, meridiem } = this.state;

    if (!title) {
      this.setState(prevState => ({
        ...prevState,
        titleError: 'Please provide a title!',
      }));
      return;
    }

    this.props.addShow({ day, title, hour, min, meridiem });
    document.querySelector('#close').click();
    return;
  };

  clearForm = () => {
    this.setState({
      title: '',
      hour: '12',
      min: '00',
      meridiem: 'PM',
      day: 'sun',
      titleError: '',
    });
  };

  handleChange = e => {
    const error = e.target.id === 'title' ? { titleError: '' } : {};
    this.setState({ [e.target.id]: e.target.value, ...error });
  };

  renderTimeOptions = type => {
    const max = type === 'hour' ? 12 : 59;
    const options = [];

    for (let i = 0; i <= max; i++) {
      const time = type === 'min' && i < 10 ? `0${i}` : i;
      const option = (
        <option key={`${time}-${type}`} value={time}>
          {time}
        </option>
      );
      options.push(option);
    }

    return options;
  };

  render() {
    const { title, hour, min, meridiem, day, titleError } = this.state;
    return (
      <Fragment>
        <button
          type="button"
          className="btn btn-primary my-4"
          data-toggle="modal"
          data-target="#addShow"
        >
          Add A New Show!
        </button>

        <div
          className="modal fade"
          id="addShow"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="modalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalLabel">
                  Add a show
                </h5>
                <button
                  id="close"
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.clearForm}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="title">Show Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter show title..."
                    onChange={this.handleChange}
                    value={title}
                  />
                  <small className="text-danger">{titleError}</small>
                </div>
                <div className="form-group">
                  <div className="row">
                    <label className="col-12">Air Time</label>
                    <div className="col-3">
                      <select
                        id="hour"
                        className="form-control"
                        onChange={this.handleChange}
                        value={hour}
                      >
                        {this.renderTimeOptions('hour')}
                      </select>
                    </div>
                    <div className="col-1">:</div>
                    <div className="col-3">
                      <select
                        id="min"
                        className="form-control"
                        onChange={this.handleChange}
                        value={min}
                      >
                        {this.renderTimeOptions('min')}
                      </select>
                    </div>
                    <div className="col-5">
                      <select
                        id="meridiem"
                        className="form-control"
                        onChange={this.handleChange}
                        value={meridiem}
                      >
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="day">Air Day</label>
                  <select
                    className="form-control"
                    id="day"
                    value={day}
                    onChange={this.handleChange}
                  >
                    <option value="sun">Sunday</option>
                    <option value="mon">Monday</option>
                    <option value="tue">Tuesday</option>
                    <option value="wed">Wednesday</option>
                    <option value="thu">Thursday</option>
                    <option value="fri">Friday</option>
                    <option value="sat">Saturday</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={this.clearForm}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={this.handleSubmit}
                >
                  Add to Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
