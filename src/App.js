import React from 'react';
import './App.css';
import Player from './Player.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <h1>Player List</h1>
            <Player/>
        </div>
    );
}

export default App;