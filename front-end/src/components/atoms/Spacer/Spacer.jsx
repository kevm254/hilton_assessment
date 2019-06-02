import React, { Component } from 'react';

export default class Spacer extends Component {
    constructor(props) {
        super(props);
    }

    getMargin() {
        return {
            marginTop: this.props.top ? this.props.top : '0',
            marginBottom: this.props.bottom ? this.props.bottom : '0',
            marginLeft: this.props.left ? this.props.left : '0',
            marginRight: this.props.right ? this.props.right : '0'
        };
    }

    render() {
        return (
            <div style={this.getMargin()}></div>
        );
    }
}