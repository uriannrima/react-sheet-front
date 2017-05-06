import React from "react";

export default class extends React.Component {
    render() {
        const footerStyle = this.props.style;
        return (
            <footer style={footerStyle}>
                <div class="container">
                    <p class="text-muted">Made by UriannRima.</p>
                </div>
            </footer>
        );
    }
}