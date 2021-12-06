import React from 'react'

function FragmentDemo() {
    return (
       <React.Fragment>
            <h1>Fragment Demo</h1>
            <p>This describes the fragment demo component</p>
        </React.Fragment>
    )
}

export default FragmentDemo


//when any time your component has to written multiple elements
//you have to enclose them in a single parent element hence we need to add div tag

//Now when we inspect the element we can notice that we have
//the enclosing div tag included in the DOM tree
//so between the div tag from app component and the h1 tag in fragment demo component
//we have an additional div tag this is where REACT FRAGMENT  come into picture

//we can replace enclosing div tag with react fragment and that will prevent
//the extra node from being added to the DOM so all we have to do is
//in a fragment demo component replace this existing div tag with <React.fragment></React.fragment>
//make sure to add the closing tag as well

//Now save the file and inspect the element
//you can see that we no longer have the div tag between the app component and the h1 tag
//and still we are returning the multiple statement in the JSX

//Fragment basically let you group a list of children elements
//without adding extra node to the DOM


//Lets check another example where react fragments seems much more appropriate
//Create two new files i.e table.js and colums.js






