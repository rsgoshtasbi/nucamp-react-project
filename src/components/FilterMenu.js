import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import FilterMenuSkills from "./FilterMenuSkills";
import FilterMenuCompanies from "./FilterMenuCompanies";
import "./css/FilterMenu.css";

export default class FilterMenu extends Component {
  render() {
    return (
      <div className="filterMenu">
        <h2 className="filterMenuTitle" align="center">
          Filter Menu
        </h2>
        <h4 align="center">Companies</h4>
        <FilterMenuCompanies
          name="facebookCheckbox"
          label="Facebook"
          checked={this.props.checkboxState.facebookCheckbox}
          handleCheckboxChange={this.props.handleCheckboxChange}
        />
        <FilterMenuCompanies
          name="appleCheckbox"
          label="Apple"
          checked={this.props.checkboxState.appleCheckbox}
          handleCheckboxChange={this.props.handleCheckboxChange}
        />
        <FilterMenuCompanies
          name="amazonCheckbox"
          label="Amazon"
          checked={this.props.checkboxState.amazonCheckbox}
          handleCheckboxChange={this.props.handleCheckboxChange}
        />
        <h4 align="center">Skills</h4>
        <FilterMenuSkills
          checkboxName="htmlCheckbox"
          yearsName="htmlYears"
          label="HTML"
          checked={this.props.checkboxState.htmlCheckbox}
          handleCheckboxChange={this.props.handleCheckboxChange}
          handleSkillChange={this.props.handleSkillChange}
        />
        <FilterMenuSkills
          checkboxName="cssCheckbox"
          yearsName="cssYears"
          label="CSS"
          checked={this.props.checkboxState.cssCheckbox}
          handleCheckboxChange={this.props.handleCheckboxChange}
          handleSkillChange={this.props.handleSkillChange}
        />
        <FilterMenuSkills
          checkboxName="bootstrapCheckbox"
          yearsName="bootstrapYears"
          label="Bootstrap"
          checked={this.props.checkboxState.bootstrapCheckbox}
          handleCheckboxChange={this.props.handleCheckboxChange}
          handleSkillChange={this.props.handleSkillChange}
        />
        <FilterMenuSkills
          checkboxName="reactCheckbox"
          yearsName="reactYears"
          label="React"
          checked={this.props.checkboxState.reactCheckbox}
          handleCheckboxChange={this.props.handleCheckboxChange}
          handleSkillChange={this.props.handleSkillChange}
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
