import React from "react";
import { Formik, useField } from "formik";
import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$

const CustomTextInput = ({ label, ...props}) => {
    const[field, meta] = useField(props);

    return(
        <React.Fragment>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ): null}
        </React.Fragment>
    )
}


const CustomCheckbox = ( {children, ...props}) => {
    const[field, meta] = useField(props, 'checkbox');

    return(
        <React.Fragment>
            <label className="checkbox">{label}
            <input type="checkbox" {...field} {...props} />
            {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ): null}
        </React.Fragment>
    )
}


const CustomSelect = ({ label, ...props}) => {
    const[field, meta] = useField(props);

    return(
        <React.Fragment>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ): null}
        </React.Fragment>
    )
}


const SignUp = () => {
    return(
<Styles>
  <Formik>
    initial values ={" "}
    {{
      firstName: "",
      lastName: "",
      telephone: "",
      email: "",
      company: "",
      position: "",
      linkedIn: "",
      aboutMe: "",
      acceptedTerms: false,
    }}
    validationSchema ={" "}
    {Yup.object({
      firstName: Yup.string()
        .min(3, "must be at least 3 characters")
        .max(15, "must be 15 characters or less.")
        .required("Required"),
      lastName: Yup.string()
        .required("Required"),
      telephone: Yup.number()
       .matches(phoneRegExp, 'Phone number is not valid'),
      email: Yup.string()
       .email('Invalid email address')
       .required('Required'),
      company: Yup.string()
      .required("Select Company"),
      linkedIn: Yup.string()
      .url('Must enter URL in http://www.example.com format')
      .required("Required"),
      aboutMe: Yup.string()
      .max(300, "must be 300 characters or less.")
      .required("Tell us about yourself!"),
      acceptedTerms: Yup.boolean()
      .required('Required')
      .oneOf([true], "You must accept the terms and conditions")
    })}
    onSubmit={(values, {setSubmitting, resetForm}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
        }, 3000)
    }}
        {props => (
            <Form>
                <h1>Sign-Up</h1>
                <CustomTextInput label="firstName" name="firstName" type="text" placeholder="First Name" />
                <CustomTextInput label="lastName" name="lastName" type="text" placeholder="Last Name" />
                <CustomTextInput label="telephone" name="telephone" type="text" placeholder="Telephone" />
            </Form>
        )}
  </Formik>
</Styles>
    );
}







const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Signup extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    telephone: "",
    email: "",
    company: "",
    position: "",
    linkedIn: "",
    aboutMe: "",
    touched: {
      firstName: false,
      lastName: false,
      telephone: false,
      email: false,
      company: false,
      position: false,
      linkedIn: false,
      aboutMe: false,
    },
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (values) => {
    alert("Thank you for signing up!");

    this.setState({
      firstName: "",
      lastName: "",
      telephone: "",
      email: "",
      company: "",
      position: "",
      linkedIn: "",
      aboutMe: "",
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row row-content">
          <LocalForm onSubmit={this.handleSubmit}>
            <div>
              <h1>Sign-Up</h1>
              <h5>
                Please fill out the following fields to be entered into our
                recruitment portfolio.
              </h5>
            </div>
            <Row className="form-group">
              <Control.text
                name="firstName"
                placeholder="First name"
                model=".firstName"
                className="form-control"
                value={this.state.firstName}
                onChange={this.handleChange}
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
                }}
              />
            </Row>
            <Row className="form-group">
              <input
                name="lastName"
                placeholder="Last name"
                className="form-control"
                required="required"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </Row>
            <Row className="form-group">
              <input
                name="telephone"
                placeholder="Telephone"
                type="tel"
                className="form-control"
                value={this.state.telephone}
                onChange={(e) => this.setState({ telephone: e.target.value })}
              />
            </Row>
            <Row className="form-group">
              <input
                name="email"
                placeholder="Email"
                type="email"
                className="form-control"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Row>
            <Row className="form-group">
              <select
                name="company"
                placeholder="Company"
                className="form-control"
                value={this.state.company}
                onChange={this.handleChange}
              >
                <option value="">Company Name</option>
                <option value="companyA">Company A</option>
                <option value="companyB">Company B</option>
                <option value="companyC">Company C</option>
                <option value="companyD">Company D</option>
                <option value="companyE">Company E</option>
                <option value="companyOther">Other</option>
              </select>
            </Row>
            <Row className="form-group">
              <input
                name="position"
                placeholder="Previous Position"
                className="form-control"
                value={this.state.position}
                onChange={this.handleChange}
              />
            </Row>
            <Row className="form-group">
              <input
                name="linkedIn"
                placeholder="LinkedIn URL"
                className="form-control"
                value={this.state.linkedIn}
                onChange={this.handleChange}
              />
            </Row>
            <Row className="form-group">
              <textarea
                name="aboutMe"
                placeholder="About Me"
                className="form-control"
                value={this.state.aboutMe}
                onChange={this.handleChange}
              />
            </Row>
            <Row className="form-group">
                <Col md={{ size: 10}}>
                  <Button type="submit" color="primary">
                    Sign-Up
                  </Button>
                </Col>
              </Row>
          </LocalForm>
        </div>
      </div>
    );
  }
}

export default Signup;




handleAgreeModal = () => {
  this.setState({
    agree: !this.state.agree,
  });
};

render() {
  return (
    <React.Fragment>
      <Button outline onClick={this.handleAgreeModal}>
        <i className="fa fa-pencil fa-lg" /> Terms and Conditions
      </Button>
      <Modal
        isOpen={this.state.agree}
        toggle={this.handleAgreeModal}
      >
        <ModalHeader toggle={this.handleCommentModal}>
          Terms and Conditions
        </ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
            <div className="form-group">
              <Label htmlfor="text">Comment</Label>
              <Control.textarea
                rows="6"
                model=".text"
                id="text"
                name="text"
                className="form-control"
              />
            </div>
          </LocalForm>
          <Button type="submit" value="submit" color="primary">
            I have read the terms and conditions.
          </Button>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

