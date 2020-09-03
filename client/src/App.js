import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Pages
import Home from "./pages/home";
import Categories from "./pages/categories";

// Components
import Navigation from "./components/Navigation";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch location={props.location}>
          <Route exact path="/categories" component={Categories} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
