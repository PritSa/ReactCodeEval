//Tutorial 19
//Index as a key-Anti pattern

import React from 'react'
import Person from './Person'

function NameList1() {
    const names = ['sayali', 'ruchi', 'pradnya', 'sayali']
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

    const nameList = names.map((name, index )=> <h2 kay={index}>   {index}  {name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList1


//We have taken the code of NameList component 
//add another array of name
//lets render this list of names instead of  the persons array
//const nameList = names.map(name => <h2>{name}</h2>)
//in the function body lets return an h2 tag with the name as shown above
//in retrun statement {nameList}

//save the file and look at the browser we will get output but we we go to console
//warning:Each child in a list should have a unique "key" prop.
//we see the above warning

//But now we dont have any ID that uniquely identifies each item in the array
//hence we could use the name itself as the key so
//in the map () method on the h2 element we can give the key={name}
//lets save the file and look at browser error has gone

//but what if we have same name like sayali then again sayali in array
//now name is not unique anymore and key prop has to be unique.

//if we look at browser we get new warning: Encountered two children with same key

//well, it turns out the arrow function  that is passed to the map() method
//receive the second paramater which is the index of the element in the current iteration

//the arrow function now will accept the two parameteres so we need (name, index)
//we can now use this index as key when rendering the list
// so key={index}

//let me also display the {index} in h2 so as get a better picture to see how it works

//so this is how we can use index value as key for list rendering
//the index is passed as a second paramater to the arrow function within the map method 
//and that index is uded as a value to the key prop

//Let me tell though using index as key will couse some serious UI issues in certain scenarios
