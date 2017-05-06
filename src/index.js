import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'mobx-react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Layout from "./pages/Layout";

// Stores
import charactersStore from "./stores/CharactersStore";

const app = document.getElementById('app');
ReactDOM.render(
    <Provider charactersStore={charactersStore}>
        <Router>
            <Route path="/" component={Layout} />
        </Router>
    </Provider>
    , app);