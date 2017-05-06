import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'mobx-react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./pages/Layout";

const app = document.getElementById('app');
ReactDOM.render(
    <Provider>
        <Router>
            <Route path="/" component={Layout} />
        </Router>
    </Provider>
    , app);