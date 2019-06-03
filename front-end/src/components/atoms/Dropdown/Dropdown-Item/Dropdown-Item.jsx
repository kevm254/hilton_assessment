import React, { Component } from 'react';
import DropdownContent from './Dropdown-Content/Dropdown-Content';
import './Dropdown-Item.css';
import anime from 'animejs';


export default class DropdownItem extends Component {

    constructor(props) {
        super(props);
        this.state= {
            dropdownIsOpen: false
        };

        this.ddRef = React.createRef();

        this.bindAll();
    }

    bindAll() {
        this.toggleDropdownContentVisibility = this.toggleDropdownContentVisibility.bind(this);
    }

    componentDidMount() {
        console.log(this.ddRef.current);
        anime({
            targets: this.ddRef.current,
            opacity: [0, 1],
            duration: 4000,
            easing: 'linear'
        })
    }

    fetchDropdownItemText() {
        return this.props.text || 'Dropdown Item'
    }

    toggleDropdownContentVisibility() {
        this.setState({ dropdownIsOpen : !this.state.dropdownIsOpen });
    }

    render() {
        return (
            <div>
                <div className={[ 'dropdown-item-styles' ].join(' ')} onClick={this.toggleDropdownContentVisibility}>
                    <div>{this.fetchDropdownItemText()}</div>
                    <div className={[ 'caret-styles'].join(' ')} ref={this.ddRef}>></div>
                </div>
                { this.state.dropdownIsOpen && <DropdownContent /> }
            </div>
        );
    }
}