import React, { useState, useEffect } from "react";

/* useState Hook allows us to track state in a function component,
   usually data or properties that need to be tracked (in the case of
   this function, the time and the time setter, which is new Date();.)
   It is initalized by taking an inital state (after the =) and 2 variables,
   the current state and the function to update the state (as mentioned above,
   the time and the time setter/updater).
   useEffect Hooks allows you to perform side effects in your components,
   such as fetching data, directly updating the DOM and timers. We use 
   useEffect here to use setTime to update time to the current time every
   1 second.
   */

function TheTime() { // Time function
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000);
    }, []);

    var [month, day, year, hour, minute, second, period] = [time.getMonth()+1, time.getDate(), time.getFullYear(), time.getHours(), time.getMinutes(), time.getSeconds(), "AM"];
    if (minute < 10)
    {
        minute = "0"+minute;
    }

    if (second < 10)
    {
        second = "0"+second;
    }

    if (hour >= 12)
    {
        period = "PM";
    }
    else if (hour <= 11)
    {
        period = "AM";
    }

    if (hour > 12)
    {
        hour = hour - 12;
    }

    return (
        <>
            <p>Today is {month}/{day}/{year} and the time is {hour}:{minute}:{second} {period}.</p>
        </>
    );
}
export default TheTime;
