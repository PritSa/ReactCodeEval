//Tutorial 33: Higher Order Component
/*
import React, { Component } from 'react'

class HoverCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    incrementCount = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }
    render() {
        const {count} = this.state
        return (
            <div>
                <h1 onMouseOver = {this.incrementCount}>  {this.props.name} Hovered {count}  times</h1>
            </div>
        )
    }
}

export default HoverCounter
*/

//Create class component
//add h1 in JSX and on heading we will handle the onmouseOver event
//on handler lets add {this.incrementCount}
//now  we need a counter functionality and that was alredy implemented in the
//ClickCounter component so lets simply copy paste constructor and Handler
//now in the render method i will extract the count value and display it as part of the heading
//so const {count} = this.state
//and Hoverd {count} time in the heading
//finally back in APP component we include the Hover counter
//save the files and take a look at browser, so we have successfully completed the Hovered counter

//Now the client come back with another requirement they want an input element that
//counts the number of key presses for e.g on key up in an input
//elemet they want to increment the counter value and display it 
//we can offcourse implement it just like the click counter
//or the hover counter but we start to realize that we duplicating the code
//and really reusing the functionality in our clickcounter and hovercounter we have
//the counter functionallity which could have been reused but
//instead has been duplicated so if 10 different component needes teh counter functionality we 
//would be writing exact same code over and over again so the quetion now is 

//How to reuse  this code the immediate thought is to lift this state to the parent component
//and passdown to the handler as a prop so
//define the counter functionality in app component and provide the state and teh handler
//as props to clickcounter and hovercounter
//this would definitely work in our scenario where we have the 
//couter component as children of the same parent but

//Imagine a scenario where the counter component are scattered in teh react component tree
//lifting the satte would definitely not be the correct solution
//so there is a need to share common functionality  between component
//without repeating the code and that is where the concept of Higher Order Component comes
//into pictute(check handwritten notes)

//In clickCounter lets import updatedComponet from withCounter and while exporting
//i will call the updated function passing in the clickCounter componet
//Lets do the same for HoverComponet 

//so what we are doing here is instead of exporting the ClickCounter or the HoverCounter component
//we export the HOC the HOC in addition to be the clickCounter or HoverCounter now has
//a new prop called name so in both the component we can actually render this prop so
//in JSX {this.prop.name}
//so in clickcounter JSX and Hover JSX we will write {this.prop.name}

//Now if we save the file and look at browser we will able to see the 
//prop being rendered i.e Sayali in the Button and Sayali in the heading

//So our HOC injects a named prop to any component where required 
//for our counter example though that is not really we want
//we want the counter functionality to be shared among the components so 
//lets modify our HOC

//I will copypaste the constructor and incrementcount method from CLickCouter to HOC
//The current state and incrementcount method is the common functionality we want to share
//so NweComponet now maintains the state and a method to increment that state
//This is the common functionality we want to share

//Now remove the constructor and incrementcount method from both the ClickCounter and
//HoverCounter, this will avoid duplication of code
//now in the HOC  need to pass down the state and the incrementcount method as props

import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {

    render() {
       
        const {count, incrementCount} = this.props
        return (
            <div>
                <h1 onMouseOver = {incrementCount}>  Hovered {count}  times</h1>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter)

//in Hovercounter we are going to destructure count and incrementcount from this.props
// and get rid of the state i.e const {count, incrementCounter} = this.props
//hence in onMouseOver handler just write {incrementCount}
//get rid of the {this.props.name} being render
