import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

// import About from "./About/About";
// import Contact from "./Contact/Contact";
// import Products from "./Product/Products";
// import Home from "./Home/Home";
// import history from './history';
import Login from './Login';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/
                    " exact component={LoginPage} />
                    <Route path="/CurrentLayout" component={CurrentLayout} />
                    <Route path="/EnlargeSingleView" component={EnlargeSingleView} />
                    <Route path="/LayoutDesignChange" component={LayoutDesignChange} />
                </Switch>
            </Router>
        )
    }
}