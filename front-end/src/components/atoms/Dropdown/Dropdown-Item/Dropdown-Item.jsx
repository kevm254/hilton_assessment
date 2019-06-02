import React, { Component } from 'react';
import DropdownContent from './Dropdown-Content/Dropdown-Content';
import './Dropdown-Item.css';

export default class DropdownItem extends Component {
    constructor(props) {
        super(props);
        this.state= {
            dropdownIsOpen: false
        }
    }

    fetchDropdownItemText() {
        return this.props.text || 'Dropdown Item'
    }

    toggleDropdownContentVisibility() {
        alert('clicked!');
        this.setState({ dropdownIsOpen : !this.state.dropdownIsOpen });
    }

    render() {
        return (
            <div>
                <div className={[ 'dropdown-item-styles' ].join(' ')}>
                    <div>{this.fetchDropdownItemText()}</div>
                    <div className={[ 'caret-styles' ].join(' ')}>></div>
                </div>
                { this.state.dropdownIsOpen && <DropdownContent /> }
            </div>
        );
    }
}