import React, { Component } from 'react'

 class ErrorBoundry extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              hasError: false
         }
     }
     
     static getDerivedStateFromError(error){
         return {
             hasError: true
         }
     }

     componentDidCatch(error,info){
      console.log(error);
      console.log(info);
     }
    render() {
        if (this.state.hasError){
        return <h1>Something Went Wrong</h1>
        }
        return this.props.children
        
    }
}

export default ErrorBoundry

//For this class component to add error boundry we need to define either 
//the get derivedStateFromError or componentDidCatch Lifecycle method

//Lets start with first one
//static getDerivedStateFromError(error) and it receive the parameter  error
//in the body we are simply return the new state object what we will do is set the property hasError: true
//of course we dont have a state now so lets add it use snippet rconst 
//in in constructor initiallize the property hasError: false

//so what we are effectively doing is if at all there is an error when rendering any of the components we 
//are setting the state hasError: true 
//this property can now be used to create a FallBack UI so in the render method 
//if(this.state.hasError){return <h1>somethind wents wrong </h1>}
//if no error return this.props.children
//this.props.children refers to the component which we are actually rendering 

//our error boundry is now complete

//final step is to wrap the component with this error boundry so in APP component
//all the Hero component with error boundrty

//if we save the file and take look at browser still we are getting error
//this might be confusiong but let me tell you this is intended behaviour
//React team have mentioned that error boundries are primarily useful for
//production but in developement they want to make error as highlly
//visible as possible so we will always see this error during development

//What we can do on top right click on the close button and we can see Something went wrong

//Error boundries will catch the error and display a fallBack UI which in our case is the
//text something wents wrong

//Now where to add errorbountry. we have added all hero component in error boundery
//but its not a good idea to hide the other  two hero when third hero is throwing an error
//so in APP component what we will do is wrap each hero component with thr error boundry

//now save the file and go back to browser we still get errorbut this time we can see
//batman and superman followed by text something went wrong

//////Now Lets move to second Method componentDidCatch



//Error boundry catch the error during rendering in lifecycle methods and
//in the constructor of the whole tree below them
//however they do not catch the error inside event handlers
//if we have an onClick handler and want to catch error you need to use 
//regular try catch method and not error boundries



