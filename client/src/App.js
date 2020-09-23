import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "../src/reducers";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Pages
import Home from "./pages/home";
import Categories from "./pages/categories";
import Category from "./pages/category";
import CreateGroup from "./pages/create-group";
import Groups from "./pages/groups";
import Signup from "./pages/signup";
import Signout from "./pages/signout";
import Feature from "./pages/feature";

// Components
import Navigation from "./components/Navigation";

const store = createStore(
  reducers,
  { auth: { authenticated: localStorage.getItem("token") } },
  applyMiddleware(reduxThunk)
);

function App(props) {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Switch location={props.location}>
          <Route exact path="/feature" component={Feature} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/create-group" component={CreateGroup} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signout" component={Signout} />
          <Route path="/categories/:id" component={Category} />
          <Route path="/groups/:id" component={Groups} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
