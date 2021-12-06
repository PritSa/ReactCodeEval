//Lets apply inline styling

import React from 'react'

function Inline() {

    const heading = {
        fontSize: '72px',
   color: 'blue'
    }
    return (
        <div>
      <h1 className="error">Error</h1>
     <h1 style={heading}>Inline </h1>
        </div>
    )
}

export default Inline

//In React Inline Styles are not specified as string instead they are specifies with an Object 
//Whose key is the camel cased version of the style name and the value is usually string
//e.g  const heading = {
    //fontSize: '72px',
    //color: 'blue'}
        

//So create an Object and apply it to Style attribute

//Now lets talk about  CSS modules
//CSS module feature is available with react-scripts version 2 or higher
//file naming convention for CSS modules with create react app 
//the file name must be suffixed with .module.css

//one advantage of using CSS module is that the classes are locally scoped by default
//e.g copy the error heading into the Inline componet and uncomment the Inline component
//it still show the result

//so CSS can apply to every child component as well in our code it applies to app component 
//and inline component which is the child component
//this might leads CSS conflicts
// CSS modules on other hand cause you reference the
//className using the styles variable it cannot be used in the children componet
//if we copy the success heading into the Inline componet and uncomment the Inline component
//then we can see the application doesnt compile, it doesnt know what style is
