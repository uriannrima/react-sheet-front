import React from "react";

export default class extends React.Component {
    render() {
        const footerStyle = this.props.style;

        const phantom = {
            display: "block",
            padding: "20px",
            height: footerStyle.height,
            width: '100%',
        }
        return (
            <div>
                <footer style={footerStyle}>
                    <div class="container">
                        <p class="text-muted">Made by UriannRima.</p>
                    </div>
                </footer>
            </div>
        );
    }
}