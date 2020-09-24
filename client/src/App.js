import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "../src/reducers";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Pages
import Home from "./components/Home";
import Categories from "./components/Category/Categories";
import Category from "./components/Category/Category";
import CreateGroup from "./components/Group/CreateGroup";
import Groups from "./components/Group/Groups";
import Signup from "./components/Auth/Signup";
import Signin from "./components/Auth/Signin";
import Signout from "./components/Auth/Signout";
import Feature from "./components/Feature";

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
          <Route exact path="/signin" component={Signin} />
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
