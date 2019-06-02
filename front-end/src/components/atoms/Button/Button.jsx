import React, { Component } from 'react';
import GeneralUtils from '../../../utils/general-utils';
import './Button.css';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.bindAll();
    }

    bindAll() {
        this.getButtonText = this.getButtonText.bind(this);
    }

    getButtonText(props) {
        return (props.text && GeneralUtils.isString(props.text)) ?
            props.text : 'default btn';
    }

    getButtonBgColor(props) {
        return (props.bgColor && GeneralUtils.isString(props.bgColor)) ?
            props.bgColor : 'bg-gray ';
    }

    getButtonTextColor(props) {
        return props.textColor ? props.textColor : 'txt-white' ;
    }

    getButtonStyles(props) {
        return [this.getButtonText(this.props), this.getButtonBgColor(this.props), this.getButtonTextColor(this.props)];
    }

    render() {
        return (
            <button className={['buttonstyles', ...this.getButtonStyles(this.props)].join(' ')}>{this.getButtonText(this.props)}</button>
        )
    }
}