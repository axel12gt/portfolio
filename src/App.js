import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <div className="container">
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/links" component={Links} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
