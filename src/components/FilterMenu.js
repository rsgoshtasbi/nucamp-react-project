import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import FilterMenuSkills from "./FilterMenuSkills";
import FilterMenuCompanies from "./FilterMenuCompanies";
import "./css/FilterMenu.css";

export default class FilterMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlCheckbox: false,
      cssCheckbox: false,
      bootstrapCheckbox: false,
      reactCheckbox: false,
      facebookCheckbox: false,
      appleCheckbox: false,
      amazonCheckbox: false,
      airbnbCheckbox: false,
      uberCheckbox: false,
    };
  }

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
  };

  render() {
    console.log(this.props);
    return (
      <div className="filterMenu">
        <h2 className="filterMenuTitle" align="center">
          Filter Menu
        </h2>
        <h4 align="center">Companies</h4>
        <FilterMenuCompanies
          name="facebookCheckbox"
          label="Facebook"
          checked={this.state.facebookCheckbox}
          handleChange={this.handleChange}
        />
        <FilterMenuCompanies
          name="appleCheckbox"
          label="Apple"
          checked={this.state.appleCheckbox}
          handleChange={this.handleChange}
        />
        <FilterMenuCompanies
          name="amazonCheckbox"
          label="Amazon"
          checked={this.state.amazonCheckbox}
          handleChange={this.handleChange}
        />
        <FilterMenuCompanies
          name="airbnbCheckbox"
          label="AirBnB"
          checked={this.state.airbnbCheckbox}
          handleChange={this.handleChange}
        />
        <FilterMenuCompanies
          name="uberCheckbox"
          label="Uber"
          checked={this.state.uberCheckbox}
          handleChange={this.handleChange}
        />
        <h4 align="center">Skills</h4>
        <FilterMenuSkills
          name="htmlCheckbox"
          label="HTML"
          checked={this.state.htmlCheckbox}
          handleChange={this.handleChange}
        />
        <FilterMenuSkills
          name="cssCheckbox"
          label="CSS"
          checked={this.state.cssCheckbox}
          handleChange={this.handleChange}
        />
        <FilterMenuSkills
          name="bootstrapCheckbox"
          label="Bootstrap"
          checked={this.state.bootstrapCheckbox}
          handleChange={this.handleChange}
        />
        <FilterMenuSkills
          name="reactCheckbox"
          label="React"
          checked={this.state.reactCheckbox}
          handleChange={this.handleChange}
        />
        <Button
          className="btn btn-block mb-2"
          type="submit"
          variant="contained"
          color="secondary"
          startIcon={<SearchIcon />}
        >
          Filter
        </Button>
      </div>
    );
  }
}
