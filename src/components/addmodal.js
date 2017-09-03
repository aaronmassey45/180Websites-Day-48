import React, {Component} from 'react';
import { Modal, Button, Form, FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';

export default class AddModal extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      title: '',
      time: '',
      meridiem: 'PM',
      day: 'mon'
    }
  }

  close = () => {
    this.setState({showModal: false});
  }

  open = () => {
    this.setState({showModal: true});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { day, title, time, meridiem } = this.state;

    if (!/^([0-9]|0[0-9]|1[0-2]):[0-5][0-9]$/.test(time)) {
      alert("Enter correct time format");
    } else {
      this.props.addShow(day, title, time, meridiem);
      this.setState({
        showModal: false,
        title: "",
        time: ""
      });
    }

  }

  titleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  timeChange = (e) => {
    this.setState({ time: e.target.value })
  }

  meridiemChange = (e) => {
    this.setState({ meridiem: e.target.value })
  }

  dayChange = (e) => {
    this.setState({ day: e.target.value })
  }

  render() {
    let { showModal, title, time, meridiem, day } = this.state;
    return (
      <div className="AddModal">
        <Button bsStyle="success" onClick={this.open}>Add a Show</Button>
        <Modal show={showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal onSubmit={this.handleSubmit}>
              <FormGroup controlId="formHorizontalShow">
                <Col componentClass={ControlLabel} sm={2}>
                  Show
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    placeholder="Show Title"
                    onChange={this.titleChange}
                    value={title}
                    required
                  />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalTime">
                <Col componentClass={ControlLabel} sm={2}>
                  Time
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    placeholder="hh:mm or h:mm"
                    onChange={this.timeChange}
                    value={time}
                    required
                  />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col sm={6}>
                  <Col componentClass={ControlLabel} sm={6}>
                    AM/PM
                  </Col>
                  <Col sm={6}>
                    <select className="form-control" value={meridiem} onChange={this.meridiemChange}>
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </Col>
                </Col>
                <Col sm={6}>
                  <Col componentClass={ControlLabel} sm={4}>
                    Day
                  </Col>
                  <Col sm={8}>
                    <select className="form-control" value={day} onChange={this.dayChange}>
                      <option value="mon">Monday</option>
                      <option value="tue">Tuesday</option>
                      <option value="wed">Wednesday</option>
                      <option value="thur">Thursday</option>
                      <option value="fri">Friday</option>
                      <option value="sat">Saturday</option>
                      <option value="sun">Sunday</option>
                    </select>
                  </Col>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">
                    Add show
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
