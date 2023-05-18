import React, { useState, useEffect } from "react";

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
