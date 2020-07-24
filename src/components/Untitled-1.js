import React from "react";
import "./css/Signup.css";
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback, Row,} from "reactstrap"
import { Link } from "react-router-dom"
import { Control, LocalForm, Errors } from "react-redux-form";

class Signup extends React.Component {
  constructor(props) {
    super(props);
  
  this. state = {
    firstName: "",
    lastName: "",
    telephone: "",
    email: "",
    company: "",
    position: "",
    linkedIn: "",
    aboutMe: "",
    user: [],
  };
}

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      telephone: this.state.telephone,
      email: this.state.email,
      company: this.state.company,
      position: this.state.position,
      linkedIn: this.state.linkedIn,
      aboutMe: this.state.aboutMe,
    };

    this.setState({
      firstName: "",
      lastName: "",
      telephone: "",
      email: "",
      company: "",
      position: "",
      linkedIn: "",
      aboutMe: "",
      user: [...this.state.user, newUser],
    });
  };



  render() {
    return (
    <div className="container" >
      <div className="row row-content">
      <h1>Sign-Up</h1>
      <h5>Please fill out the following fields to be entered into our recruitment portfolio.</h5>
      <LocalForm onsubmit={this.handleSubmit}>
        <Row className="form-group">
          <Control.text
            name="firstName"
            placeholder="First name"
            className="form-control"
            value={this.state.firstName}
            onChange={(e) => this.setState({ firstName: e.target.value })}
          />
        </Row>
        <Row className="form-group">
          <input
            name="lastName"
            placeholder="Last name"
            className="form-control"
            value={this.state.lastName}
            onChange={(e) => this.setState({ lastName: e.target.value })}
          />
        </Row>
        <Row className="form-group">
          <Control.text
            name="telephone"
            placeholder="Telephone"
            className="form-control"
            type = "tel"
            value={this.state.telephone}
            onChange={(e) => this.setState({ telephone: e.target.value })}
          />
        </Row>
        <Row className="form-group">
          <input
            name="email"
            placeholder="Email"
            className="form-control"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </Row>
        <Row className="form-group">
          <Control.select
            placeholder="Company"
            className="form-control"
            value={this.state.firstName}
            onChange={(e) => this.setState({ company: e.target.value })}
          >
            <option value="">Company Name</option>
            <option value="companyA">Company A</option>
            <option value="companyB">Company B</option>
            <option value="companyC">Company C</option>
            <option value="companyD">Company D</option>
            <option value="companyE">Company E</option>
            <option value="companyOther">Other</option>
          </Control.select>
        </Row>
        <Row className="form-group">
          <Control.text
            placeholder="Email"
            className="form-control"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </Row>
        <Row className="form-group">
          <Control.text
            name="position"
            placeholder="Previous Position"
            className="form-control"
            value={this.state.position}
            onChange={(e) => this.setState({ position: e.target.value })}
          />
        </Row>
        <Row className="form-group">
          <Control.text
            name="linkedIn"
            placeholder="LinkedIn URL"
            className="form-control"
            type = "url"
            value={this.state.linkedIn}
            onChange={(e) => this.setState({ linkedIn: e.target.value })}
          />
        </Row>
        <Row className="form-group">
          <textarea
            name="aboutMe"
            placeholder="About Me"
            className="form-control"
            value={this.state.aboutMe}
            onChange={(e) => this.setState({ aboutMe: e.target.value })}
          />
        </Row>
      </LocalForm>
      </div>
    </div>
    );
  }
}

export default Signup;