import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Home.css";
import { Component } from "react";
import FilterMenu from "./FilterMenu";
import PeopleAccordian from "./PeopleAccordian";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleFilterMenuChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <FilterMenu {...this.props} />
          </div>
          <div className="col-lg">
            <PeopleAccordian {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
