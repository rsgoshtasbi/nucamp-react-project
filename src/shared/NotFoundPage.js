import React from "react";
import { Link } from "react-router-dom";
import PageNotFound from "./assets/images/PageNotFound.jpg";
import "./shared.css";

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="App">
        <img src={PageNotFound} className="App" alt="Not Found" />
        <p style={{ textAlign: "center" }}>
          <Link to="/">Go to Home </Link>
        </p>
      </div>
    );
  }
}
export default NotFoundPage;
