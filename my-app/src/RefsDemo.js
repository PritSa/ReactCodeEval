//TUtorial 28: Refs

import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
    this.inputRef = React.createRef()
    
    }
    
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef);
    }
    clickHandler = () =>{
alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type="text"  ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo

//Create class component, add input fiels withn JSX, when we save the file and
//look at browser we can see input field on browser

//What we want to achive is that as soon as page is reload that input field should be focused
//Using Refs we can do this in three simple steps

//1.Create Ref - using React.createRef()

//so in the component add constructor and within it we create a property
//this.inputRef and to this property assign React.createRef()

//2.to attached that Ref to our input element in the render method and to attached ref
//we make use of ref attribute so on teh input element ref={this.inputRef}

//3.call the focus method on this input element but first lets us find out
//what a property this.inputRef holds after a refrence is created so
//create componentDidMount() lifecycle hook and within that log to  the console(this.inputRef)

//If go back to the browswer we can see in cosole the object has logged in the console
//{current: input}
// current: input
// [[Prototype]]: Object

//if we expand it you can see property called current of type input and this current property is
//points to actual DOM node

//so to focus on the input element in componentDidMount we simply call
//focus method on thecureent property 

//i.e this.inputRef.current.focus()

//if we now save the file and look at browser the page input field is focused when we refresh the page

//If the field was part of the login form the focus would be on teh username field and 
//user can start typing their name straightaway

//second possible usecase for using ref would be to fetch the input value
//create a button click and click event handler

//now clickHandler = () => {alert(this.inputRef.current.value)}

//basically we are accessing value property of the input DOM node which is available
//as current property

//if we go back to browser and and filled the input filed and click button we get alert
//of whatever we have filled in the input field


//SECOND APPROACH IS TO US  callback ref()
//this is older approach