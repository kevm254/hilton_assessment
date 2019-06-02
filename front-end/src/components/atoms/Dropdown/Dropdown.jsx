import React, { Component } from 'react';
import './Dropdown.css';

export default class Dropdown extends Component {
    render() {
        return (
            <div className={['dropdown-styles'].join(' ')}>
                {this.props.children}
            </div>
        )
    }
}