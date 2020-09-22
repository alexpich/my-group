import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Pages
import Home from "./pages/home";
import Categories from "./pages/categories";
import Category from "./pages/category";
import CreateGroup from "./pages/create-group";
import Groups from "./pages/groups";
import Signup from "./pages/signup";

// Components
import Navigation from "./components/Navigation";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch location={props.location}>
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/create-group" component={CreateGroup} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/categories/:id" component={Category} />
          <Route path="/groups/:id" component={Groups} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
