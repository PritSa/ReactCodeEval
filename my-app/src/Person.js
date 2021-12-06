import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2> I am {person.name}. My age is {person.age}.
    I know {person.skill}</h2>
        </div>
    )
}

export default Person

////Remove the JSX from the NameList component and include it in Person.js
//so <h2> tag i am going to remove and add it to Person.js

//But how does the Person component know what the person data is
//so lets passdown the data as props from the NameList component
//so in the NameList component map () method include the person componet
//in passing the person as prop

//so after formatting we have personList= persons.map, person as a parameter which is passes as
//the prop to the person component
//i.e     const personList = persons.map(person => <Person person={person}/>)

//finally in the Person component we can restructure the prop right in the paramater so
//i.e function Person({person}) 

//save the file and look at the browser ut will give us same output but
//we have write a better code this time

//The NameList componet is only responsible for rendering the list and the Person component is only
//responsible for rendering the person HTML and 
//let me tell you this is also pattern we commonly see when building applications
//that render list of data