import React, { Component } from 'react';
import './RoomDisplayContainer.css';

export default class RoomDisplayContainer extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <div className={[ 'room-display-container-styles' ].join(' ')}>
                { this.props.children}
            </div>
        );
    }
}