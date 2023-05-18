import React, { useEffect, useState, memo } from "react";

var mode = "dark";

/*
if (window.matchMedia('(prefers-color-scheme: dark)').matches)
{
    mode = "dark"; // sets it to dark mode 
}
else if (window.matchMedia('(prefers-color-scheme: light)').matches)
{
    mode = "light"; // sets it to light mode
} 
*/

if (mode == "light")
{
    document.body.classList.toggle("lightmode");
    document.body.classList.add("notransition");
    setTimeout(function () {
        document.body.classList.remove("notransition");
    }, 500);
}

var LightSwitch = function() // this is a function that's called whenever the lightswitch button is clicked, instead of having a listener when the body is ready
{
    document.body.classList.toggle("lightmode");
}

export default LightSwitch;