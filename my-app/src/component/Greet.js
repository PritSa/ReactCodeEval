import React from 'react';
/*
function Greet () {
return <h1>"Hello, I love React"</h1>
}
export default Greet;
*/
/*
const Greet = props => {
    console.log(props);
    return(
        <div>
            <h1>"Hello" {props.name} a.k.a {props.nickname} and have email id as {props.emailid} </h1>
        </div>
    )
}

export default Greet
*/

//Destructuring props in functional component
//1st way passing props in function itself
/*
const Greet = ({name, nickname, emailid}) => {
  
    return(
        <div>
            <h1>"Hello" {name} a.k.a {nickname} and have email id as {emailid} </h1>
        </div>
    )
}

export default Greet
*/
//2nd way of destructuring the props in functional component



const Greet = props => {

    const {name, nickname, emailid} = props
    return (
        <div>
            <h1>"Hello" {name} a.k.a {nickname} and have email id as {emailid} </h1>
        </div>
    )
}

export default Greet

