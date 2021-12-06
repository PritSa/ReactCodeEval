//Tutorial 30: forwarding the Ref

import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParentInput extends Component {
    constructor(props) {
        super(props)
    
       this.inputRef = React.createRef()
    }
    
    clickHandler = () => {
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <FRInput ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput

//what we want to achive is that when we click the button in the parent component
//the input in the child component should receive the focus

//we will use forwarding ref technique to allow the parent component to directly 
//reference the native input element 



