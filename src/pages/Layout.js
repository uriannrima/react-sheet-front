import * as React from 'react';
import { Route, Link } from "react-router-dom";

// Style
import LayoutStyle from "styles/Layout";

// Components
import Nav from "components/layout/Nav";
import Footer from "components/layout/Footer";

// Pages
import Characters from "./layout/character/Characters";
import Character from "./layout/character/Character";

export default class extends React.Component {
    render() {

        const navItems = [
            { query: "/", label: "Characters" }
        ];

        const footerStyle = {
            position: "fixed",
            left: "0",
            bottom: "0",
            width: "100%",
            height: "30px",
            backgroundColor: "#f5f5f5"
        };

        const containerStyle = {
            marginTop: "60px",
            marginBottom: "40px"
        };

        return (
            <div>
                <Nav items={navItems} location={location} />
                <div class="container" style={containerStyle}>
                    <div className="row">
                        <div className="col-lg-12">
                            <Route exact path="/" component={Characters}></Route>
                            <Route exact path="/character/:id" component={Character}></Route>
                        </div>
                    </div>
                </div>
                <Footer style={footerStyle} />
            </div>
        );
    }
}