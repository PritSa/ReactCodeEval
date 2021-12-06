//Tutorial 32: Error Handling Phase method
import React from 'react'

function Hero({heroName}) {
    if(heroName === 'jokar'){
        throw new Error('Not a hero!')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Hero

//Create a functional component
//this component will take property a heroname and render the same in JSX

//now create a if statement and pass a condition if heroName === jokar 
//it will throws error

//Next in our APP.js we have passed two properties to Hero component
//i.e heroName= batman and heroName= superman
//now save the file and look at the browser we will get two values i.e batman and superman

//now lets add third property in APP.js heroname = jokar
//Now our react application throws an error and entrile application crashes
//this is not good what we want is if particular component throws an error only  that 
//component should fall back to UI and remaining  components should be uneffected

//Lets see how to achive that with an error boundry

//lets create new file ErrorBoundry.js
 

//here we need to understand the error handling hence lets create an error in the file

