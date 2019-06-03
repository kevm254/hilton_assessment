import React, { Component } from 'react';
import Navbar from './components/sections/navbar/navbar';
import MainView from './components/sections/mainview/mainview';
import RoomDisplay from './components/atoms/RoomDisplay/RoomDisplay';
import RoomDisplayContainer from './components/atoms/RoomDisplay/RoomDisplayContainer';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            availableRooms: [
                { id: 1, title: 'Room 1', disabled: false, isFirst: true },
                { id: 2, title: 'Room 2', disabled: false, isFirst: false },
                { id: 3, title: 'Room 3', disabled: false, isFirst: false },
                { id: 4, title: 'Room 4', disabled: false, isFirst: false },
            ]
        };
    }

    componentDidMount() {
        }



    render() {
        return (
            <div>
                <Navbar/>
                <MainView/>
                <RoomDisplayContainer>
                    { this.state.availableRooms.map((room) => {
                        return <RoomDisplay
                            title={room.title}
                            disabled={room.disabled}
                            isFirst={room.isFirst}
                        />
                    })}

                </RoomDisplayContainer>
            </div>
        );
    }
}
