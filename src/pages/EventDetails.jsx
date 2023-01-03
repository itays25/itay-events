import './pages.css';
import { useState, } from 'react';
import { useLocation } from 'react-router-dom';
import { useContext, createContext } from 'react';
import { EventContext } from '../App';
import { NavLink } from 'react-router-dom';



function EventDetails() {
  const { Events } = useContext(EventContext)
  const { setEvents, eventList, setEventList } = useContext(EventContext)

  const loc = useLocation();
  const [render, setRender] = useState(false);
  const [change, setChange] = useState()
  function edit(key) {
    eventList[loc.state.i][key] = change;
    setEvents(Events)
    setRender(!render)
  }

  return (
    <div>
      <div className='navbar'>
      <img className='logo' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/92fe9a37853461.574e884067985.jpg" alt="" />
        <NavLink to='/'><h1>Home</h1></NavLink>
        <NavLink to='/Events'><h1>Events</h1></NavLink>
        <NavLink to='/NewEvent'><h1>Add an Event</h1></NavLink>
      </div>
      <div className='details'>
      
      <h1>{eventList[loc.state.i].Contact} Event's</h1>
      {loc.state &&
       <div className='detail'>
        <h2>Event: {eventList[loc.state.i].Event}</h2>
        <button onClick={() => edit("Event")}>change event</button>
        <h3>Details: {eventList[loc.state.i].Description}</h3>
        <button onClick={() => edit("Description")}>change details</button>
        <h3>Contact Number: {eventList[loc.state.i].PhoneNumber}</h3>
        <button onClick={() => edit("PhoneNumber")}>change number</button>
        <h3>Contact: {eventList[loc.state.i].Contact}</h3>
        <button onClick={() => edit("Contact")}>change contact</button>
        <h3>Starting Date: {eventList[loc.state.i].StartDate}</h3>
        <button onClick={() => edit("StartDate")}>change starting date</button>
        <h3>Ending Date: {eventList[loc.state.i].EndDate}</h3>
        <button onClick={() => edit("EndDate")}>change ending date</button> <br />
        <input placeholder='update event' type="text" onChange={e=>setChange(e.target.value)}/>
      </div>}
      </div>
    </div>
  );
}

export default EventDetails;