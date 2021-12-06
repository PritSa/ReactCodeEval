
//Tutoria 13:
//How to handle event in class component

//Handling events with React elements is very similar to handling events on DOM elements. 
//There are some syntax differences:
//React events are named using camelCase, rather than lowercase.
//With JSX you pass a function as the event handler, rather than a string.

import React, { Component } from 'react'

 class ClassClick extends Component {
     ClickMeHandler(){
         console.log("click me now");
     }
    render() {
        return (
            <div>
                <button onClick = {this.ClickMeHandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick

//Binding Events Handlers
//The reason we bind the event handlers in react is purely because, the way
//'This' keyword works in JS it is not because howreact work