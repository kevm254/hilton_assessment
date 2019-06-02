import React, { Component } from 'react';
import './Picture.css'

export default class Picture extends Component {
    constructor(props) {
        super(props);

        this.bindAll();
    }

    bindAll() {
        this.getHeight = this.getHeight.bind(this);
        this.getWidth = this.getWidth.bind(this);
        this.fetchImage = this.fetchImage.bind(this);
    }

    getHeight(props) {
        return (props && props.height) ? props.height : '200px';
    }

    getWidth(props) {
        return (props && props.width) ? props.width : '200px';
    }

    fetchImage(props) {
        return { backgroundImage: `url(${this.props.imgSrc || ''})` };
    }

    render() {

        return (
            <div className="picturestyles" style={this.fetchImage(this.props)} />
        );
    }
}