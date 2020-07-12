import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import NotFoundPage from "./shared/NotFoundPage";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Signup from "./components/Signup";

const routing = (
  <Router>
    <Navbar />
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/signup" component={Signup} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
    <Footer />
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
