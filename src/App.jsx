import './App.css';
import Homepage from './pages/Homepage';
import EventDetails from './pages/EventDetails';
import EventForm from './pages/EventForm';
import EventList from './pages/EventList';
import {Route, Routes} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { useState, } from 'react'; 
import { useContext, createContext } from 'react';
import Context from './components/Context';

export const EventContext = createContext()
function App() {
  const values = Context()
  return (
    <EventContext.Provider value={values}>
    <div className="App">
     <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/NewEvent' element={<EventForm/>}></Route>
      <Route path='/Events' element={<EventList/>}></Route>
      <Route path='/EventDetails' element={<EventDetails/>}></Route>
     </Routes>
    </div>
    </EventContext.Provider>
  );
}

export default App;
