import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Search from './pages/Search';
import Saved from './pages/Saved'
import Navbar from "./components/Navbar";


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
