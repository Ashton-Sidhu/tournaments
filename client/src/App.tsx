import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventsHome from './components/events/events';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EventsHome />
      </header>
    </div>
  );
}

export default App;
