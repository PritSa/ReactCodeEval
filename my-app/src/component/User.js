//Tutorial 37: Render Props (Part-2)

import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
               {this.props.render(false)}
            </div>
        )
    }
}

export default User

//Create class component
//In JSX add teh Name Sayali next include the User component in APP component
// save all the files and look at the browser

//Now lets make changes to User Component
//1.instead of hard-coding the name sayali lets pass it as a prop
//so in APP component name=sayali and in User componet {this.props.name}
//save the file and take look at the browser still it works perfectly fine

//2.Instead of passing name=sayali as props i want to pass a function which will return
//string sayali
//hence in APP component <User name = {() => "Sayali"}> now in our user component
//we will still have {this.props.name} but the only difference is now
//that it contains a reference to a function to actually display the name sayali
//we need to call the function hence add parentheses {this.state.name()}
//if we save the file and take look at browser everything works fine

//3.For our next step i want to have parameters to the function in the name prop
//based on the parameter i want to change what is rendered by the user component
//so  i will pass isLoggedIn parameter and the function will now return the string sayali
//or Guest based on the value loggedIn for this we are going to use ternanry operator
//it is true return sayali if false return Guest
//i.e <User name = {(isLoggedIn) => isLoggedIn ?"Sayali" : 'Guest}>
//Now in user component the name prop will accept an argument which i willpass as true
//i.e {this.props.name(true)}

//4.Now next step in app component i will simply rename name prop to render and in user component
//i will change the name to render
//This is perfectly valid and will not conflict with the render lifecycle method in any way if 
//We save the file and take look at browser our UI still works as expected

//From this example What we want to keep in mind that
//In react it is possible to use a prop whose value is a function to control
//what is actually rendered by a component and why do we need to remember this well it is 
//pretty much what the render pattern based on 

//What is render Prop?(check notes)
//A term render props refere to a tenchnique for SHARING CODE between react components using a 
// PROPS WHOSE  Value is a function

//we just learned how to use a prop whose value is a function 
//lets see how we share functionality

//We have clickcouner2 and Hivercounter2 both the component contain a code that can be share between
//that is count state and incrementcount method
//let us see how to share the code by using the render props pattern 
//Lets create new file Counter2.js

