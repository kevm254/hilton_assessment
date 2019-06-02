import React from 'react';
import Navbar from './components/sections/navbar/navbar';
import MainView from './components/sections/mainview/mainview';
import RoomDisplay from './components/atoms/RoomDisplay/RoomDisplay';
import './App.css';

function App() {
  return (
      <div>
        <Navbar />
        <MainView />
        <RoomDisplay />
      </div>
  );
}

export default App;
