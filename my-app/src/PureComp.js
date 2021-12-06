//Pure Component
//This time we are usnig react snippet RPCE to create a rect pure component

//instead of importing component from react we are now importing pure comoonent and extending the same

import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log('Pure COmponent Rendered');
        return (
            <div>
              <h1>Pure component {this.props.name}</h1>  

            </div>
        )
    }
}

export default PureComp

//Noe lets add h1 tag in our JSX and Purecomponent within h1 tag
//if we save the file and look at browser we get same thing as we get by using normal class component
//nothinf new or of different happen

//Then we will get quetion What is the difference between the component class and pure component
//and also when should use one over the other

//Lets see the simple demo that involves both the classes for this demo
//we need the regular component a pure component and a containing parent component
//that is capable of changing its state

//We already crated pure component so now lets create regular component
//create new file RegComp.js
//also create file ParentComp.js this will also be a class component

//now we also need to be able to change the state of the comppnent so lets add a 
//Constructor in the ParentComp 

//question Q.why to use pure component?

//Pure components by preventing unneccessary re-renders can give you
//a performance boost in certain scenarios for example
//lets say we are rendering the list of 50 items by not rerendering them when it
//is not required they are going to have a good performance boost 
//a key point to keep in mind is that you should not mutate object or arrays
//in props or state
//for ex. if we need to add a new item to the list dont mutate it by pushing the item into the list
//the refrence to the array never changes and beacuse 
//pure componet only check for that the component will not re-rendered even if
//there is a difference
//always return a new object or array when dealing with pure component