import React, { Component } from 'react';
import './Loader.css';

export default class Loader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={['loader-styles'].join(' ')}>Loading...</div>
    }
}