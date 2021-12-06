//Turorial 14
//Binding Events Handlers
//The reason we bind the event handlers in react is purely because, the way
//'This' keyword works in JS it is not because howreact work

//'This' keyword is undefined in a Event Handler thats reason we need Event binding in react class component
//There are number of way to bind the event in react

//1. First option we have to use a bind keyword and bind the handler in the render method
/*
import React, { Component } from 'react'

class EventBind extends Component {
constructor(props) {
    super(props)

    this.state = {
         message: 'Hello'
    }
}
    ClickHandler(){
        this.setState({
            message: 'Goodbye'
        })
        console.log(this); //here This is Undefine
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {this.ClickHandler.bind(this)}>Click</button>
        
            </div>
        )
    }
}

 export default EventBind
*/

//2.Second approach is to use arrow functions in the render method 
//The arrow function approach is simply calling the event handler in the arrow function body
//so onclick and within curly braces we are going to have an arrow function

/*
import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
             message: "Hello, There"
        }
    }
    
    clickHandler(){
        this.setState({
            message: "Goodbye! see you then."
        })
    }

    render() {
        return (
            <div>
            <h1>{this.state.message}</h1>
                <button onClick={() => this.clickHandler()}>Click</button>
            </div>
        )
    }
}

export default EventBind
*/

//First and second approach has the some performance implications in some scenarios

//3.Third approach
//This approach we are going to see in the most of the cases and it is also approach in
//the official react documentation 
//this approach deals with binding the event handler in the
//constructor as opposed to binding in render method so in the constructor we simply add a line 
//this.clickHandler= this.clickHandler.bind(this)
//and passing {this.clickHandler} in render method

/*
import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello '
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: "EventBind Successfuly"
        })
    }
    
    render() {
        return (
            <div>
            <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler}>ClickMeNow</button>

            </div>
        )
    }
}

export default EventBind
*/

//4.Final approach is use a arrow function as a class property basically change the way you 
//define your method in the class

import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "hiiiiii"
        }
    }
    
clickHandler=()=>{
    this.setState({
        message: "Helllllloooo"
    })
}

    render() {
        return (
            <div>
            <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind

//So approach number three is the best to use