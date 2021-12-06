//Tutorial 36: Render Props(Part1)
/*
import React, { Component } from 'react'

export class ClickCounter2 extends Component {
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
                <button onClick={this.incrementCount}>Clicked {count} time</button>
            </div>
        )
    }
}

export default ClickCounter2
*/

//Create a class component
//in JSX add button Clicked X time
//Next add a constructor and  create a state property called count and initialize it to zero
//Add a click handler to the button onClick={this.incrementCount}
//Now we can define the handler incrementCount=() =>{ this.setState(prevState) => return {count:prevState.count + 1}}
//finally in the rnder methodi will extract count from the state and include it in the JSX 
//i.e const {count} = this.state and Clicked {count} time
//Now lets add ClickCounter2 in APP component and save the file look at browser

//Now we have a new requirement for a HoverCounter so basically a click counter with click
//functionality  repalced by hover functinality lets implement that

//Lets create new file HoverCounter2.js

//We have clickcouner2 and Hivercounter2 both the component contain a code that can be share between
//that is count state and incrementcount method
//let us see how to share the code by using the render props pattern 
//Lets create new file Counter2.js

//This counter2 component will be our container component wher we implenet common functionality
//That is  state along with incrementCount method so 
//From clickCounter2.js I will pull out that code and paste in Counter2.js
//Now remove the same cpiece of code from CLickCounter2.js and HoverCOunter2.js


import React, { Component } from 'react'

   class ClickCounter2 extends Component {
    
        render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} time</button>
            </div>
        )
    }
}

export default ClickCounter2

//Now in ClickCounter we are going to destructure the count and incrementCount to this.props
//onCLick handler lets remove the this keyword
//do same for the HoverCounter