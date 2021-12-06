//Tutorial 37: render props (part 2)

import React, { Component } from 'react'

class Counter2 extends Component {
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
        return (
            <div>
                {this.props.render(this.state.count, this.incrementCount)}
            </div>
        )
    }
}

export default Counter2

//Create class component, leave teh JSX empty for now
//This counter2 component will be our container component wher we implenet common functionality
//That is  state along with incrementCount method so 
//From clickCounter2.js I will pull out that code and paste in Counter2.js
//Now remove the same cpiece of code from CLickCounter2.js and HoverCOunter2.js

//JSX is empty cecuse the render prop will gon=ing to control what will be rendered by this counter component
//For our example we will render clickcounter2 and HoverCounter2 and passdown the
//count state and incrementCount method 
//so in JSX in div tag we are going to pass two argument
//{this.props.render(this.state.count, this.incrementCount)}

//counter2 component is basically telling hey take the count state and incrementCount method
// and render whatever you want to I will handle everything regarding the counterlogic
//you just worried about what to render
//so back in APP coponent commentout Clickcounter2 and HoverCounter2 and include the counert2 componet


//Now in app component <Counter2/>
//next we are going to add the rendered prop whose value is a function
//function receive the count and incrementCount methos and will return
//ClickCounter2 component passing the same as prop i.e  <ClickCounter2 count={count}>
//other prop incrementCount = {incrementCount}
//i.e <Counter2 render={(count,incrementCount) => <ClickCounter2 count={count}> incrementCount = {incrementCount}} >
//also repeat teh same for HoverCounter also
//i.e <Counter2 render={(count, incrementCount) => <HoverCounter2 count={count}> incrementCount = {incrementCount}} >

//Now in ClickCounter we are going to destructure the count and incrementCount to this.props
//onCLick handler lets remove the this keyword
//do same for the HoverCounter

//Save all the file and take look at browser we will get the expected output
//But this time we have shared the functionality implemented using the render props pattern

