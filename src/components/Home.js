import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Home.css";
import SearchResults from "./SearchResultsComponent";
import { MEMBERS } from "../shared/memberData";
import FilterMenu from "./FilterMenu";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: MEMBERS,
      htmlCheckbox: false,
      htmlYears: 1,
      cssCheckbox: false,
      cssYears: 1,
      bootstrapCheckbox: false,
      bootstrapYears: 1,
      reactCheckbox: false,
      reactYears: 1,
      facebookCheckbox: false,
      appleCheckbox: false,
      amazonCheckbox: false,
    };
  }

  handleFilterMenuChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleCheckboxChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
  };

  handleSkillChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  filterMembers = () => {
    if (
      !this.state.facebookCheckbox &&
      !this.state.amazonCheckbox &&
      !this.state.appleCheckbox
    ) {
      return this.state.members;
    } else {
      const temp = this.state.members.filter((member) => {
        return this.filterMemberCompany(member); // && !this.filterSkillsAndYear(member)
      });
      this.setState({ ...this.state, members: temp });
      return this.state.members;
    }
  };

  filterMemberCompany = (member) => {
    if (
      (this.state.facebookCheckbox && member.company === "Facebook") ||
      (this.state.amazonCheckbox && member.company === "Amazon") ||
      (this.state.appleCheckbox && member.company === "Apple")
    ) {
      return true;
    }

    return false;
  };

  filterSkillsAndYear = (member) => {
    if (
      (this.state.htmlCheckbox &&
        member.skills.hasOwnProperty("html") &&
        member.skills.html >= this.state.htmlYears) ||
      (this.state.cssCheckbox &&
        member.skills.hasOwnProperty("css") &&
        member.skills.css >= this.state.cssYears) ||
      (this.state.bootstrapCheckbox &&
        member.skills.hasOwnProperty("bootstrap") &&
        member.skills.bootstrap >= this.state.bootstrapYears) ||
      (this.state.reactCheckbox &&
        member.skills.hasOwnProperty("react") &&
        member.skills.react >= this.state.reactYears)
    ) {
      return true;
    }

    return false;
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <FilterMenu
              checkboxState={this.state}
              handleCheckboxChange={this.handleCheckboxChange}
              handleSkillChange={this.handleSkillChange}
            />
          </div>
          <div className="col-md">
            <SearchResults
              member={this.state.members}
              test={() => this.filterMembers(this.state.members)}
            />
            {/* <SearchResults
              member={this.filterMembers(this.state.members)}
              test={console.log(this.filterMembers(this.state.members))}
            /> */}
          </div>
        </div>
      </div>
    );
  }
}
