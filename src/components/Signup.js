import React, { Component } from "react";
import {
 Button,
  Label,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const isUrl = (val) => /^(ftp|http|https):\/\/[^ "]+$/.test(+val);

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNum: "",
      email: "",
      company: "",
      position: "",
      linkedIn: "",
      aboutMe: "",
      agree: false,
      touched: {
        firstName: false,
        lastName: false,
        phoneNum: false,
        email: false,
        company: "",
        position: "",
        linkedIn: "",
        aboutMe: "",
        agree: false,
      },
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit(values) {
    alert("Thank you for signing up!");
    this.setState({value: ''});
    
  }

  validate(firstName, lastName, phoneNum, email) {
    const errors = {
      firstName: "",
      lastName: "",
      phoneNum: "",
      email: "",
    };

    if (this.state.touched.firstName) {
      if (firstName.length < 2) {
        errors.firstName = "First name must be at least 2 characters.";
      } else if (firstName.length > 15) {
        errors.firstName = "First name must be 15 or less characters.";
      }
    }

    if (this.state.touched.lastName) {
      if (lastName.length < 2) {
        errors.lastName = "Last name must be at least 2 characters.";
      } else if (lastName.length > 15) {
        errors.lastName = "Last name must be 15 or less characters.";
      }
    }

    const reg = /^\d+$/;
    if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
      errors.phoneNum = "The phone number should contain only numbers.";
    }

    if (this.state.touched.email && !email.includes("@")) {
      errors.email = "Email should contain a @";
    }

    return errors;
  }

  render() {
    const errors = this.validate(
      this.state.firstName,
      this.state.lastName,
      this.state.phoneNum,
      this.state.email
    );

    return (
      <div className="container">
        {/* feedback form */}
        <div className="row row-content">
          <div className="col-12">
            <h1>Sign-Up</h1>
            <h5>
              Please fill out the following fields to be entered into our
              recruitment portfolio.
            </h5>
            <hr />
          </div>
          <div className="col-md-10">
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Col md={10}>
                  <Control.text
                    model=".firstName"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".firstName"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={10}>
                  <Control.text
                    model=".lastName"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".lastName"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={10}>
                  <Control.text
                    model=".phoneNum"
                    id="phoneNum"
                    name="phoneNum"
                    placeholder="Phone number"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(8),
                      maxLength: maxLength(11),
                      isNumber,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".phoneNum"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 8 numbers",
                      maxLength: "Must be 11 numbers or less",
                      isNumber: "Must be a number",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={10}>
                  <Control.text
                    model=".email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    validators={{
                      required,
                      validEmail,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      validEmail: "Invalid email address",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 4, offset: 2 }}></Col>
                <Col md={10}>
                  <Control.select
                    placeholder="Company"
                    model=".contactType"
                    name="contactType"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  >
                    <option value="">Company Name</option>
                    <option value="companyA">Company A</option>
                    <option value="companyB">Company B</option>
                    <option value="companyC">Company C</option>
                    <option value="companyD">Company D</option>
                    <option value="companyE">Company E</option>
                    <option value="companyOther">Other</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={10}>
                  <Control.text
                    model=".position"
                    id="position"
                    name="position"
                    placeholder="Position"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".position"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={10}>
                  <Control.text
                    model=".linkedIn"
                    id="linkedIn"
                    name="linkedIn"
                    placeholder="LinkedIn URL"
                    className="form-control"
                    validators={{
                      required
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".linkedIn"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      isUrl: "Must be a URL",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={10}>
                  <Control.textarea
                    model=".aboutMe"
                    id="aboutMe"
                    name="aboutMe"
                    rows="12"
                    placeholder="About Me"
                    className="form-control"
                    validators={{
                      required,
                      maxLength: maxLength(300),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".aboutMe"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      maxLength: "Must be 300 characters or less.",
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlfor="photo" className="col-md-2 col-form-label">
                  Upload Photo
                </Label>
                <div className="col-md-10 input-group mb-3 px-2">
                  <input
                    id="upload"
                    type="file"
                    onchange="readURL(this);"
                    class="form-control border-0"
                  />
                </div>
              </Row>
              <div className="form-check">
                <Label check>
                  <Control.checkbox
                    model=".agree"
                    name="agree"
                    className="form-check-input"
                    required="required"
                  />
                  <strong>Terms and Conditions</strong>
                </Label>
              </div>

              <Row className="form-group">
                <Col md={10}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
