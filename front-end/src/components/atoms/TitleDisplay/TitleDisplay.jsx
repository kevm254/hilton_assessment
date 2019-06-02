import React, { Component } from 'react';

import './TitleDisplay.css';

export default class TitleDisplay extends Component {
    constructor(props) {
        super(props);

        this.bindAll();
    }

    bindAll() {
        this.getTextColor = this.getTextColor.bind(this);
    }

    getTextColor(props) {
        return props.textColor ? props.textColor : 'text-white' ;
    }

    render() {
        return (
            <div className={['title-display-styles', this.getTextColor(this.props)].join(' ')}>
                <div>{this.props.text || ''}</div>
            </div>
        )
    }
}