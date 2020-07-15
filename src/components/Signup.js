import React from "react";
import "./css/Signup.css";

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

  };

  render() {
    return (
      <form>
        <>
          <input
            placeholder="First name"
            value={this.state.firstName}
            onChange={(e) => this.setState({ firstName: e.target.value })}
          />
        </>
        <div>
          <input
            placeholder="Last name"
            value={this.state.lastName}
            onChange={(e) => this.setState({ lastName: e.target.value })}
          />
        </div>
        <div>
          <input
            placeholder="Telephone"
            type = "tel"
            value={this.state.telephone}
            onChange={(e) => this.setState({ telephone: e.target.value })}
          />
        </div>
        <div>
          <input
            placeholder="Email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <div>
          <select
            placeholder="Company"
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
          </select>
        </div>
        <div>
          <input
            placeholder="Email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <div>
          <input
            placeholder="Previous Position"
            value={this.state.position}
            onChange={(e) => this.setState({ position: e.target.value })}
          />
        </div>
        <div>
          <input
            placeholder="LinkedIn URL"
            type = "url"
            value={this.state.linkedIn}
            onChange={(e) => this.setState({ linkedIn: e.target.value })}
          />
        </div>
        <div>
          <textarea
            placeholder="About Me"
            value={this.state.aboutMe}
            onChange={(e) => this.setState({ aboutMe: e.target.value })}
          />
        </div>
      </form>
    );
  }
}

export default Signup;
