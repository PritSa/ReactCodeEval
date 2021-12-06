//Fragment

import React from 'react'
import Columns from './Columns'

function Table() {
    return (
        <div>
          <table>
              <tbody>
                  <tr>
                     <Columns/>
                  </tr>
              </tbody>
          </table>
    
        </div>
    )
}

export default Table

//if we save the file and look at browser 
//in conslole we get warning that is
//index.js:1 Warning: validateDOMNesting(...): <td> cannot appear as a child of <div>

//Basically it is telling us that it is wrong to have td element as a child of div tag

//if we inspect the element we can see that td within the div tag
//and this div tag is necessary as we are writtern multiple elements in the JSX of columns component
//but here now we have alternative we can replace this div with <React.fragment>

//now go back to browser all conslole warning has disapperar

//if we inspect the element we can see that we have the table tag, tbody,tr and td there is no div tag between

//the final point on fragment is that it can accept the key attribute when 
//rendering lists of items for example lets assume
//we have an array of items stored in a variable called items 


