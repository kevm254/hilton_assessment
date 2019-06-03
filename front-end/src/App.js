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
                { id: 1, title: 'Room 1', checked: false, isFirst: true },
                { id: 2, title: 'Room 2', checked: false, isFirst: false },
                { id: 3, title: 'Room 3', checked: false, isFirst: false },
                { id: 4, title: 'Room 4', checked: false, isFirst: false },
            ]
        };

        this.bindAll();
    }

    bindAll() {
        this.onCheckBoxClick = this.onCheckBoxClick.bind(this);
    }

    componentDidMount() {}

    onCheckBoxClick(id) {
        return () => {
            const roomsList = [...this.state.availableRooms];

            let currentRoomIdx = roomsList.findIndex((room) => {
                return room.id === id;
            });

            for(let i = currentRoomIdx; i >= 0; i--) {
                roomsList[i].checked = !roomsList[i].checked;
            }

            this.setState({ availableRooms: roomsList });

        }
    }

    render() {
        return (
            <div>
                <Navbar/>
                <MainView/>
                <RoomDisplayContainer>
                    { this.state.availableRooms.map((room) => {
                        return <RoomDisplay
                            id={room.id}
                            title={room.title}
                            checked={room.checked}
                            isFirst={room.isFirst}
                            checkBoxClicked={this.onCheckBoxClick(room.id)}

                        />
                    })}
                </RoomDisplayContainer>
            </div>
        );
    }
}
