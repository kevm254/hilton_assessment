import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import './AddressDisplay.css';

export default class AddressDisplay extends Component {
    constructor(props) {
        super(props);

        this.bindAll();
    }

    bindAll() {
        this.displayLoader = this.displayLoader.bind(this);
        this.displayAddress = this.displayAddress.bind(this);
        this.addressDataIsValid = this.addressDataIsValid.bind(this);
    }

    displayLoader() {
        return (
            <Loader />
        );
    }

    displayAddress() {
        return (
            <div className={[ 'address-display-styles' ].join(' ')}>
                <h2 className="text-white">{this.props.address.header || ''}</h2>
                <p className="text-light-blue">{this.props.address.line1 || 'line 1'}</p>
                <p className="text-light-blue">{this.props.address.line2 || 'line 2'}</p>
                <p className="text-white phone-num-styles">{this.props.address.phoneNum || '555-555-5555'}</p>
            </div>
        );
    }

    // ensures address data is valid before attempting to display address component
    addressDataIsValid() {
        return (this.props.address &&
            this.props.address.header &&
            this.props.address.line1 &&
            this.props.address.line2 &&
            this.props.address.phoneNum);
    }

    render() {
        return <div>{ (this.addressDataIsValid()) ? this.displayAddress() : this.displayLoader() }</div>
    }
}
