import React, { Component } from 'react';
import Navbar from './components/sections/navbar/navbar';
import MainView from './components/sections/mainview/mainview';
import RoomDisplay from './components/atoms/RoomDisplay/RoomDisplay';
import RoomDisplayContainer from './components/atoms/RoomDisplay/RoomDisplayContainer';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar/>
                <MainView/>
            </div>
        );
    }
}
