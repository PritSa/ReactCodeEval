//Fragment

import React from 'react'

function Columns() {

    const items = []
    return (
        <React.Fragment>
        {
            items.map(item => (
                <React.Fragment key={item.id}>
                <h1>Title</h1>
                <p> {item.title}</p>
                </React.Fragment>
            ))
        }
            <td>Name</td>
            <td>Sayali</td>
      </React.Fragment>
    )
}

export default Columns

//the final point on fragment is that it can accept the key attribute when 
//rendering lists of items for example lets assume
//we have an array of items stored in a variable called items 

//then we could have items.map and arrow function parameter is item and function can retrun a react fragment
//i.e items.map(item => (<React.fragment></Recat.fragment>))

//Because the items in the list need the key prop though we can specify the 
//key attribute on react fragment key={item.id}

//and within the JSX we can have the multiple elements being returned lets say
//heading title and paragraph tag that renderes {item.title}

//As of now KEY ATTRIBUTE is the only attribute that can be pass throgh react fragment4

//React team hopes to add additional attributes in the future for now we can pass only key attribute

//There is also shorthand syntax we can use for react fragment i.e <></>

//It represent the idea that it wont add an actual element to the DOM if you do use this shorthand syntax
//though there is one limitation we CANNOT PASS IN KAY ATTRIBUTE
