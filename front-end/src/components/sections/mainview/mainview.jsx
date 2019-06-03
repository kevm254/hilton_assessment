import React, { Component } from 'react';
import Picture from '../../atoms/Picture/Picture';
import Dropdown from '../../atoms/Dropdown/Dropdown';
import DropdownItem from '../../atoms/Dropdown/Dropdown-Item/Dropdown-Item';
import Spacer from '../../atoms/Spacer/Spacer';
import AddressDisplay from '../../atoms/AddressDisplay/AddressDisplay';
import axios from 'axios';
import './mainview.css';

export default class MainView extends Component {
    // Constructor & Life-Cycle Methods ///////////
    constructor(props) {
        super(props);

        this.state = {
            address: null
        };

        this.serverUrl = 'http://localhost:4200';

        this.getAddressData();
    }
    // END Constructor & Life-Cycle Methods ////////


    // Fetch Data Calls ////////////////////////////
    getAddressData() {
        axios.get(`${this.serverUrl}/address`)
            .then((data) => {
                this.setState({
                    address: data.data
                })
            });
    }
    // END Fetch Data Calls //////////////////////


    // Display Elements //////////////////////////
    getPicture() {
        return (
            <Picture imgSrc={`${this.serverUrl}/images/hotelexterior.jpg`} />
        );
    }

    getDropdown() {
        return (
            <Dropdown>
                <DropdownItem text="Passed in text"/>
                <DropdownItem />
                <DropdownItem />
            </Dropdown>
        );
    }

    getAddress() {
        return (
            <AddressDisplay
                address={this.state.address}
            />
        );
    }

    getSpacer(top = '0', bottom = '0', left = '0', right='0') {
        return (
            <Spacer top={top} bottom={bottom} left={left} right={right} />
        )
    }
    // END Display Elements /////////////////////


    // Render ///////////////////////////////////
    render() {
        return (
            <main className="mainviewstyles">

                {this.getPicture()}

                {this.getSpacer('20px', '0', '0', '0')}

                {this.getAddress()}

                {this.getSpacer('20px', '0', '0', '0')}

                {this.getDropdown()}

                {this.getSpacer('10px', '0', '0', '0')}

            </main>
        )
    }
    // END Render //////////////////////////////
}