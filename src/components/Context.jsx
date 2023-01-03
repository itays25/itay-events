import { useState } from "react";

export default function Context(){
    const [Events, setEvents] = useState({
        Event: "",
        Description: "",
        PhoneNumber: "",
        StartDate: "",
        EndDate: ""
    });

    const [eventList, setEventList] = useState([]);
    
    return{
        Events, setEvents, eventList, setEventList
    }
}