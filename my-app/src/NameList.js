//List Rendering

//Refer the handwritten notes for conceptual understanding
/*
import React from 'react'

function NameList() {
    const names = ['sayali','ruchi','pradnya']
    const nameList = names.map(name => <h2>{name}</h2> )
    return (
             <div>{ nameList}</div>   
    )
}

export default NameList
*/

//Create the functional component
//Within the component create the array of names i.e const names = [sayali,ruchi,pradnya]
//in the return statment i will add an h2 tag to display each name using the array index
//<h2>{name[0]}</h2>
//<h2>{name[1]}</h2>
//<h2>{name[2]}</h2>

//save file and take look at browser we should be able to see the list of names although this works fine
//this is not a proper solution so lets see how to use the map() method to
//render the list of names

//Now in the NameList component lets remove all, h2 tag and instead begin with {} curly braces
//within curly braces names.map() i.e {names.map()}
//the map() method takes function as an argument, we will be using arrow function
//the syntax is parameter followed by the fat arrow followed by the function body
//the parameter i am going to call it as is 'name'then => (fat arrow symbol) followed by the functional body
//which will be the transformation i.e names.map(name => <h2>{name}<h2>)
//what we want is for every name return an h2 tag with the name as the inner HTML
//so its the tag with the name as the inner HTML 


// so once you start writing the HTML you need to reuse curly braces if you have to 
//evaluate the Javascript expression so even though we do already have the pair of outer curly braces
//we need another  pair for the name parameter

//if we now save the file and look at broweser we should be able to see the list of names renderd

//One change you can do though if you wish to do that is
//keeping the return statement simple by moving out list rendering logic so
//I am going to declare new constatnt const nameList and assign the result of the map operation
//i.e const newList = names.map(name => <h2>{name}</h2>)
//then in the return statement simply include the nameList in the JSX
//i.e {nameList}

//this code become much more consize 
//other thing is how simple our JSX is right now 
//Typically we are going to have a list of objects with few properties that have to be 
//rendered in such cases it is always a good idea to refactor the JSX into a separate component
//and then use the component in the map method JSX that sounded more complicated than it should be so
//lets see an example

//lets take a array of person, so for each person in the list we now need to render the name
//age and also there skill
//we simply render them in map() method with additional HTML
//lets start with that

/*
import React from 'react'

export default function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Sayali',
            age: 26,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Ruchi',
            age: 30,
            skill: 'FullStack'
        },
        {
            id: 3,
            name: 'Jui',
            age: 27,
            skill: 'UX dev'
        }
    ]

    const personList = persons.map(person =><h2> I am {person.name}. My age is {person.age}.
    I know {person.skill}</h2>)
    return (
        <div>
            {personList}
        </div>
    )
}
*/

//we are created array of person in the list now need to render there name, age, skill
//in the JSX we are going to have 
//const personList = person.map(person => <h2> I am {person.name}. 
//my age is {person.age} i know{person.skill}  </h2>)

//person represents the object in the list to access the properties we need the dot . operator
//so person.name, person.age and person.skill

//finally in the return statement simply include the personList in the JSX
//i.e{personList}

//Again there is nothing wrong in the code but recommnded way is to refactor 
//the JSX into a separate component and
//that is really simple . I am going to create a new file call Person.js
//Remove the JSX from the list component and include it in Person.js
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

//save the file and look at the browser it will give us same output but
//we have write a better code this time

import React from 'react'
import Person from './Person'

export default function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Sayali',
            age: 26,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Ruchi',
            age: 30,
            skill: 'FullStack'
        },
        {
            id: 3,
            name: 'Jui',
            age: 27,
            skill: 'UX dev'
        }
    ]

    const personList = persons.map(person => <Person key={person.id} person={person}/>)
    return (
        <div>
            {personList}
        </div>
    )
}


//The NameList componet is only responsible for rendering the list and the Person component is only
//responsible for rendering the person HTML and 
//let me tell you this is also pattern we commonly see when building applications
//that render list of data

//Now when we render the list of item
//react through an warning in a console
// Warning: Each child in a list should have a unique "key" prop.
//in simpler word react is telling us hey each item in the list rendered using map operator should have a
//prop called 'Key' and value to that prop should be unique within the list

//so lets add that prop to each item in our list

//in the NameList component within the map() method i am going to add
//Key prop to this prop we need to assign a value that will be
//unique within the list if i were to assign a string 'unique' as a value
//what happens is every item rendered will have  thesame value for the key prop
//so the value is not unique within the list(this is not great choice key="uniquw")

//typically the ID of the item is a great choice for the key prop value
//you can see that every person has an ID propery whose value is unique within the list
//so we can assign person.id as the value to the key prop so key is going to equal to
//{person.id} and this is great choice
//i.e key={person.id}

//SUMMARY
//1.A key is a special string attribute you need to include when creating lists of element
//2.kay gives the element a stable identity
//3.keys help react identify which items have changed or added or removed
//4.help in efficient update of the user interface
