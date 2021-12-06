//Tutorial 36: Render Props(part 1)
/*
import React, { Component } from 'react'

export class HoverCouter2 extends Component {
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
                <h1 onMouseOver={this.incrementCount}>Hovered {count} time</h1>
            </div>
        )
    }
}

export default HoverCouter2
*/

//create a class component
//for JSX add heading hover X time ,  on heading we will add handler onMouseOver={this.incrementCount}
//now we need a counter functionality which we will copy from ClickCounter2
//copy the constructor and incrementCOunt method and paste it in HoverCounter
//in teh render method destructure count from the this.state and then
//dispaly as a part of heading
//Back in APP componet add HoverCOunter2 and save the file and take the look at the browser

//We hover on the clicked X time and count changes in Hovered X time

//Now we have another requirement the clinet wants an input element that counts
//number of the key presses for e.g on key up in an input element they want us to increment
//counter value and displsy it
//we can of course implement it just like the click counter or hovercounter but you are going
//to realize that we are duplicating the code and not really reusing the functionality
//so there is a need to share the common functionality between component
//once sunch pattern capable of achiving that is HOC which we learned last lecture

//Another aproach well-suted for sharing functionality between react components and that is
//Render Prop pattern
//How to implement it and use it we will see in next lecture

//Lets create a new filr User.js

//We have clickcouner2 and Hivercounter2 both the component contain a code that can be share between
//that is count state and incrementcount method
//let us see how to share the code by using the render props pattern 
//Lets create new file Counter2.js

//This counter2 component will be our container component wher we implenet common functionality
//That is  state along with incrementCount method so 
//From clickCounter2.js I will pull out that code and paste in Counter2.js
//Now remove the same cpiece of code from CLickCounter2.js and HoverCOunter2.js



import React, { Component } from 'react'

export class HoverCouter2 extends Component {
   
    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <h1 onMouseOver={incrementCount}>Hovered {count} time</h1>
            </div>
        )
    }
}

export default HoverCouter2

//Now in ClickCounter we are going to destructure the count and incrementCount to this.props
//onCLick handler lets remove the this keyword
//do same for the HoverCounter