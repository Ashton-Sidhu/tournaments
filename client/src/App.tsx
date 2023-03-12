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
      <h1>Upcoming Events</h1>
      <EventsHome eventType="upcoming" />
      <h1>Past Events</h1>
      <EventsHome eventType="past" />
    </div >
  );
}

export default App;
