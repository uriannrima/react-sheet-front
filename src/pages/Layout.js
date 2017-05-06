import * as React from 'react';
import { Route, Link } from "react-router-dom";

// Components
import Nav from "components/layout/Nav";
import Footer from "components/layout/Footer";

// Pages
import Home from "./layout/Home";

export default class extends React.Component {
    render() {

        const navItems = [
            { query: "/", label: "Home" }
        ];

        const containerStyle = {
            marginTop: "60px"
        };

        const footerStyle = {
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: "50px",
            backgroundColor: "#f5f5f5"
        };
        return (
            <div>
                <Nav items={navItems} location={location} />
                <div class="container" style={containerStyle}>
                    <div className="row">
                        <div className="col-lg-12">
                            <Route exact path="/" component={Home}></Route>
                        </div>
                    </div>
                </div>
                <Footer style={footerStyle} />
            </div>
        );
    }
}