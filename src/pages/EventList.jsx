import './pages.css';
import { useContext, createContext } from 'react';
import { EventContext } from '../App';
import { Route, Routes } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

function EventList() {
  const { Events, eventList, setEventList } = useContext(EventContext)
  const removeEvent = (index) =>{
    const newEvents = eventList.filter((_, i)=> i !==index);
    setEventList(newEvents)
  }
  return (
    <div className="eventlist">
      <div className='navbar'>
        <img className='logo' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/92fe9a37853461.574e884067985.jpg" alt="" />
        <NavLink to='/'><h1>Home</h1></NavLink>
        <NavLink to='/Events'><h1>Events</h1></NavLink>
        <NavLink to='/NewEvent'><h1>Add an Event</h1></NavLink>
      </div>
      {/* {console.log(eventList)} */}

      {eventList.map((item, index) => <ul  key={index}>
        <li className='slide-in-fwd-left'>
          <NavLink to='/EventDetails' state={{ i: index }}><h1>Event: {item.Event}</h1></NavLink>
          <h2 className='slide-in'>Details: {item.Description}</h2>
          <h2 className='slide-in'>Contact Number: {item.PhoneNumber}</h2>
          <h2 className='slide-in'>Contact: {item.Contact}</h2>
          <h2 className='slide-in'>Starting Date: {item.StartDate}</h2>
          <h2 className='slide-in'>Ending Date: {item.EndDate}</h2>
          <button onClick={()=> removeEvent(index)}>Delete Event</button></li>
      </ul>)}

    </div>
  );
}

export default EventList;