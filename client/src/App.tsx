import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventsHome from './components/events/events';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header
        onEventsClick={() => console.log('Events clicked')}
        onAboutClick={() => console.log('About clicked')}
      />
      <EventsHome />
    </div>
  );
}

export default App;
