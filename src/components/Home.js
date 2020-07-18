import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Home.css";
import SearchResults from "./SearchResultsComponent";
import { MEMBERS } from "../shared/memberData";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: MEMBERS,
    };
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1>this will be the menu column</h1>
          </div>
          <div className="col-md">
            <SearchResults member={this.state.members} />
          </div>
        </div>
      </div>
    );
  }
}
