import React, { Component } from 'react';
import './Dropdown-Content.css';

export default class DropdownContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={['dropdown-content-styles']}>Dropdown Content</div>
        )
    }
}