//Conditional rendering
//Lets see 3rd approach

//3.Ternanry Conditional operators

//the benefit of this approach is that it can be used inside JSX

import React, { Component } from 'react'

class UserGreeting2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin: true
        }
    }
    
    render() {
        return this.state.isLoggedin?(
        <div>welcome sayali</div>
        ):(
        <div>welcome Guest</div>
        )
            
            
        
    }
}

export default UserGreeting2

//Create class component, add constructer, create one state property, 
//called isloggedin and initialize it to false....i.e isLoggedin: false

//now within render () methos add retrun statement and within parentheses use conditional operator
//this.state.isLoggedin?<div>welcome sayali</div>:<div>welcome Guest</div>

//Now how does this work, the first operator this.state.isLoggedin? is evaluated to 
//either true or false if it is true second operator is retruned 
//if it is false third operator is returned 

//so this is the ternanry conditional approach and you might want to follow most of the time
//as it is simple and readable

