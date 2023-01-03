import './pages.css';
import { Children, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { EventContext } from '../App';
import { useContext, createContext, React } from 'react';





function EventForm() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, } = useForm();
    // const [Events, setEvents] = useState({
    //     Event: "",
    //     Description: "",
    //     PhoneNumber: "",
    //     StartDate: "",
    //     EndDate: ""
    // });
    const { Events, setEvents, eventList, setEventList } = useContext(EventContext)


    function onSubmit(data) {
        setEvents(data);
        setEventList([...eventList, data])
        navigate("/Events")
    }

    return (
        <div>
            <div className='navbar'>
            <img className='logo' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/92fe9a37853461.574e884067985.jpg" alt="" />
                <NavLink to='/'><h1>Home</h1></NavLink>
                <NavLink to='/Events'><h1>Events</h1></NavLink>
                <NavLink to='/NewEvent'><h1>Add an Event</h1></NavLink>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  placeholder='Event Name' {...register("Event", { required: true, maxLength: 40 })}
                />
                {errors.Event && <p>Event name is required</p>}
                <input placeholder='Event Description' {...register("Description", { required: true, maxLength: 500 })}
                />
                {errors.Description && <p>Event Details are required</p>}
                <input type="number" placeholder='Phone Number' {...register("PhoneNumber", { required: true, maxLength: 10 })}
                />
                <input  placeholder='contact person' {...register("Contact", { required: true, maxLength: 40 })}
                />
                {errors.Contact && <p>contact person is required</p>}
                {errors.PhoneNumber && <p>Phone number is required</p>}
                <p>Please enter a starting date and ending date</p>
                <input type="date" {...register("StartDate", { required: true, maxLength: 30 })}
                />
                {errors.StartDate && <p>Starting date is required</p>}
                <input type="date" {...register("EndDate", { required: true, maxLength: 30 })}
                />
                {errors.EndDate && <p>Ending date is required</p>}

                    <input type="submit" />
                {/* <NavLink to='/EventDetails' state={{ i: index }} >
                    <input type="submit" />
                </NavLink> */}
            </form>

        </div>
    );
}
export default EventForm