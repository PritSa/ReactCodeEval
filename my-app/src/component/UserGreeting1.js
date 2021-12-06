//Conditional Rendering
//lets check second approach

//2.Element variables

import React, { Component } from 'react'

class UserGreeting1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin: false
        }
    }
    
    render() {
        let message
        if(this.state.isLoggedin) {
            message = <div>Welcome sayali</div>
        } else{
            message = <div>Welcome Guest</div>
        }
        return (
            <div>{message}</div>
        )
    }
}

export default UserGreeting1

//Create a class component, add a constructor , pass a message isLoggedin: false in this.state statement
//now declare a variable inside the render method let message 
//next we store the appropriate element in this variable based on the condition
//so if(this.state.isLoggedin) , message = <div>Welcome Sayali</div>
//else, message=<div>Welcome Guests</div>
//and finally we return this message variable in the JSX so return  div tag and inside it
//variable message i.e <div>{message}<div/>
//if we save file and take look at browser we can see it have same output

//so message is the variable which stores the element to be render hence this is the
//element variable approach

//now this approach looks much better the third approach is even more simpler and this
//aprroach uses the ternanry conditional operator 
//the benefit of this approach is that it can be used inside JSX

