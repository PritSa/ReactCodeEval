//Conditional Rendering
//Let see the final approach

import React, { Component } from 'react'

class UserGreeting3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin: true
        }
    }
    
    render() {
        
        return (
            this.state.isLoggedin && <div> welcome sayali </div>
        )
    }
}

export default UserGreeting3

//The final approach is short-circuit operator approach and this apprpach
//is just a specific case of this ternary operator approach that we have learned just
//when we want to render either something  or nothing then make use of short-circut operator
//for eg right now we return either welcome sayali or welcome Guest based on the loggedin value
//Now lets say if the user is logged in i want to display welcome sayali and if user is not logged in
//i want to render NOTHING on to the screen so based on islogged in it render either sayali or nothimg

//So, to do that we simply return this.state.isLoggedin && <div>Welcome Sayali<div>
//so what happens here in the expression
//first evaluates the left hand side of the operator this.state.isLoggedin
//if it is true it also evaluates the right hand side of the operaters which in our case
//is the JSX that will be render in the browser however if at all the left hand side evaluates to false
// the RIGHT HAND SIDE WILL NEVER BE EVALUATED AS IT DOESNT EFFECT the final value of whole expression
