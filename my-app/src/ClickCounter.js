//Tutorial 33: Higher Order Component
/*
import React, { Component } from 'react'

class ClickCounter extends Component {
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
                <button onClick = {this.incrementCount}> {this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}

export default ClickCounter
*/

//Create a class component Clickcounter
//for JSX lets add button with text cliked x times
//add this component to App component
//Now add a constructor and create a state property initialize to 0
//Next add clickHandler on a button i.e onClick ={this.incrementCount}
//now lets define a clickHandler incrementCount = () => {}
//within body we will call setState to increment the count value by one
// since we need the previous state to increment the value argument to setState will not be a 
//simple object instead it takes in a function which gets
//previous state as a parameter and returns the new state so
//this.setState(prevState => { return {count: prevState.count +1}})
//finally in the render method we will extract the count from the state and include it in the JSX
//const{count} = this.state
//and instead of rendering X I am going to render count i.e {count}
//if we save the file and take a look at browser, so we have successfuly created click counter

//if we show this to the client he will become happy but now the client comes up with new
//requirement hey i want another piece of UI which works very similar to the clickcounter
// instead of button clicks though I want heading which indicates the number of times
//you hover over it
//basically a clickcounter with click functionality replaced by hover functinality

//Lets implement that
//lets create new file HoverCounter.js

//--------------------------------------------------------------------------------------------------------

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

class ClickCounter extends Component {
    
    render() {
        
        const { count, incrementCount} = this.props
        return (
            <div>
                <button onClick = {incrementCount}> Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)

//in clickcounter we are going to destructure count and incrementcount from this.props
// and get rid of the state i.e const {count, incrementCounter} = this.props
//hence in onClickHandler jsut write {incrementCount}
//get rid of the {this.props.name} being render

//Now lets repet the same for HoverCounter as well