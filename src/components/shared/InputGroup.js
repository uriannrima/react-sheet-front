import * as React from "react";

export default class extends React.Component {
    render() {
        return (
            <div class="input-group input-group-sm">
                <span class="input-group-addon">{this.props.label}</span>
                <input value={this.props.value || ""}
                    placeholder={this.props.placeholder || ""}
                    type={this.props.type || "text"}
                    class="form-control"
                    onChange={(e) => { this.props.onChange && this.props.onChange(e) }} />
            </div>
        );
    }
}