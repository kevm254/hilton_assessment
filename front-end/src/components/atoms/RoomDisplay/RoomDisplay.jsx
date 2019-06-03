import React, { Component } from 'react';
import './RoomDisplay.css';

export default class RoomDisplay extends Component {
    constructor(props) {
        super(props);

    }

    getDropdown(label, sublabel) {
        return (
            <div>
                <label htmlFor="{label.toLowercase()}">
                    {label} <br/>
                    ({sublabel})<br/>
                </label>
                <select name="room" disabled={this.props.disabled}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        );
    }

    getHeader(props) {
        return (
            <div className={'header-container-styles'}>
                { !(props.isFirst) ? <input type="checkbox" />: null }
                {this.props.title || 'Room' }
            </div>
        );
    }

    render() {
        return (
            <div className={'room-display-styles'}>
                {this.getHeader(this.props)}

                <div className={'dropdown-container-styles'}>
                    {this.getDropdown('Adults', '18+')}

                    {this.getDropdown('Children', '0-17')}
                </div>
            </div>

        );
    }
}