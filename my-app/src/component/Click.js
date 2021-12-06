//Tutoria 13: Event Handling
//When user interacts with an apploication an event will fire
//mouseClick, onClick, mouseOver,keyPress etc


//How to handle event in React
//Lets see how to handle it in functional component first

//Handling events with React elements is very similar to handling events on DOM elements. 
//There are some syntax differences:
//React events are named using camelCase, rather than lowercase.
//With JSX you pass a function as the event handler, rather than a string.

import React from 'react'

const Click = () => {
    const clickHandler = () => {
        console.log("Button Clicked");
    }
    return (
        <div>
            <button onClick = {clickHandler}>Click</button>
        </div>
    )
}

export default Click
