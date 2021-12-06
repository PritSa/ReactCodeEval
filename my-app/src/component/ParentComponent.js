import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ParentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }
    greetParent (childName) {

      alert(`Hello ${this.state.ParentName} from ${childName}` )
    }
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent

//Tutorial 15
//Method as prop

//What if a child component wanted to communicate with parent component
//strangly we still use props but this time we pass in reference to a METHOD AS PROPS to the child component
//Lets create a file ParentComponent.js, create class component add constractor, within the constructor set a 
//state called parentName with the value parent 
//next define a method greetParent() which simply alerts hello followed by 
//the parentname which is set in the state{this.state.parentName}
// since we are using 'this' keyword in the method we need to bind this method 
//so in the constructor this.greetParent = this.greetParent.bind(this)
//lets leave the JSX empty for now and get back to it in a minute
//netx we will create another file called ChildComponent.js
//now add ChildComponent in the render method() and In the APP component add ParentComponent in render() method

//If we save all the file and take look at the browser you should be able to see Greet Parent button
//if we click on the button though nothing happens right now but

//what we want is when we click on the button in the ChildComponent we want to execute the method
//defined in ParentCoponent. Basically CHildComponent calls a ParentComponent method and as
//we mentioned earlier this is achived using props the only difference this time is we
//pass the method itself as a props to the ChildComponent 

//so in the ParentComponent JSX we add an attribute to the child component lets
//call the attribute greetHandler and to this we assign the greetParent method so 
//greetHandler={this.greetParent} 
//again make sure we dont add parentherese,
//we are passing the refrence to greetParent method as a prop called greetHandler
//we can now grab hold of this refrence in our ChildComponent

//In the ChildComponent onClick of button we simply call props.greetHandler
//it will become <button onClick={props.greetHandler}>
//make sure to add a props as parameter lets save the file and see if this works
//Now we can see the alert

//so we have successfully called a method in parent component from a button in a
//ChildComponent by passing the method as props to the ChildComponent

//this is something we are going to do in our projects so its imp

//Now lets see how to pass a parameter when calling the parent method from the child component
//this is where an arrow function in the return statement is really useful arrow function syntax is
//the simplest way to pass paramaters from the child component to the parent component
//so, lets convert onClick handler in childcomponent into an arrow function

//so, onClick= {()=> props.greetHandler()}, this time props.greetHandler with parentheses
//now, we can pass in any numbers of parameter to a greetHandler to keep it simple
//lets pass one paramether which is string 'child' onClick={()=>props.greetHandler('child') }

//next lets incorporate this paramater in the greetParent method
//so lets go back in ParentComponet in greetParent method () we are going to receive a parameter
//childName............i.e   greetParent(childName)
//now in the alert statement ${this.state.ParentName} from ${childName}`)
//save the files go to browser and click on Greet Parent we should see the alert 
//Hello parent from the child

//so we have successfully pass a parameter from the child to the parent.
//this is how we pass methods as props in react