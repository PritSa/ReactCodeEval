import React from 'react'

 function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.greetHandler('child') }>Greet Parent</button>
        </div>
    )
}

export default ChildComponent

//Create file
//create a functional component
//in JSX add button which says Greet Parent now back in ParentComponent
//add child component

//In the ChildComponent onClick of button we simply call props.greetHandler
//it will become <button onClick={props.greetHandler}>
//make sure to add a props as parameter lets save the file and see if this works
//Now we can see the alert

//Now lets see how to pass a parameter when calling the parent method from the child component

//this is where an arrow function in the retrun statement is really useful arrow function syntax is
//the simplest way to pass paramaters from the child component to the parent component
//so, lets convert onClick handler in childcomponent into an arrow function

//so, onClick= {()=> props.greetHandler()}, this time props.greetHandler with parentheses
//now, we can pass in any numbers of parameter to a greetHandler to keep it simple
//lets pass one paramether which is string 'child' onClick={()=>props.greetHandler('child') }

//next lets incorporate this paramater in the greetParent method
//so lets go back in ParentComponet in greetParent method () we are going to receive a parameter
//childName............i.e   greetParent(childName)
//now in the alert statement ${this.state.ParentName} from ${childName}`)
//save the files go to browser and click on Greet Parent we should dee the alert 
//Hello parent from the child

//so we have successfully pass a parameter from the child to the parent.
//this is how we pass methods as props in react