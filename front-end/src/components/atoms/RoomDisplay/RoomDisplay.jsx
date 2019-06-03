import React, { Component } from 'react';
import './RoomDisplay.css';

export default class RoomDisplay extends Component {
    constructor(props) {
        super(props);

        this.bindAll();
    }

    bindAll(){
        this.getDropdown = this.getDropdown.bind(this);
        this.updateChecked = this.updateChecked.bind(this);
    }

    componentDidMount() {
        this.id = this.props.id;
    }

    getDropdown(label, sublabel) {
        return (
            <div>
                <label htmlFor="{label.toLowercase()}">
                    {label} <br/>
                    ({sublabel})<br/>
                </label>
                <select name="room" disabled={this.props.checked}>
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

    updateChecked() {
        this.props.checkBoxClicked();
    }

    getHeader(props) {
        return (
            <div className={'header-container-styles'}>
                { !(props.isFirst) ? <input type="checkbox" checked={this.props.checked} onClick={this.updateChecked} />: null }
                {this.props.title || 'Room' }
            </div>
        );
    }

    render() {
        return (
            <div className={'room-display-styles'}>
                {this.getHeader(this.props)}

                <div className={['dropdown-container-styles', this.props.checked ? 'disabled' : ''].join(' ')}>
                    {this.getDropdown('Adults', '18+')}

                    {this.getDropdown('Children', '0-17')}
                </div>
            </div>

        );
    }
}