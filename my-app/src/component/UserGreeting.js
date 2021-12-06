//Tutorial 16
//Conditional Rendering

//When you are building react application you may often needed to show or hide some HTML
//based on certain conditon

//Luckily condition rendering in React works the same way conditions works in Javascript

//We have four different approaches and we will take detail look at each one of them
//1.if else
//2.Element variable
//Ternanry conditional operator
//short circuit operator

//Lets begin with if else approach

import React, { Component } from 'react'

 class UserGreeting extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             isLoggedin: false
              
         }
     }
     
    render() {
        if(this.state.isLoggedin){
            return <div> Welcome Sayali</div>
        }
        else{
            return <div>Welcome Guest </div>
        }
        // return (
        //     <div>
        //         <h1>Welcome Sayali</h1>  // Comment out this 
        //         <h1>Welcome Guest</h1>
        //     </div>
        // )
    }
}

export default UserGreeting

//Create class component
//add constructor in it, within constructer define state, i am going to create one state property, 
//called isloggedin and initialize it to false....i.e isLoggedin: false

//in the JSX lets add another message that says Welcome Guest 

//Now what we want is message to be conditionally rendered based on the isLoggedin state
//if i am Loggedin message Welcome sayali should displayes and if i am not Logged in 
//message Welcome Guest should display

//Lets see how to achive this with the if else 
//in the render () method add if else condition
//if(this.state.isLoggedin) we need to render Welcome Sayali
//so we are going to have return statement a div tag and then Welcome sayali
//Else , return in side div tag Welcome Guest
//Lets commentout return statement which we have write before 

//Now lets check the broweser it will shows Welcome Guest
//if we set isLoggedin: true it shows Welcome Sayali

//Now you might be thinking theres a lot of repetition and render method looks crowded 
//can we not simply use the if else condition on the message being displayed the
//answer is NO, if else condition DONT WORK INSIDE THE JSX that is beacuse
//JSX is just syntactic sugar for function calls and object construction adding if else statement 
//within JSX is not valid that is the reason we have if else statement outside the JSX and the entire 
//return statment cotaining the JSX is placed inside the if or else block

//so better approach is second apprpoach of using Element Variable
//In this approach we use JavaScript variables to store elements this will also help you
//conditionally render the entire  component or only part of the component as well.


