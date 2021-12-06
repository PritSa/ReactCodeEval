import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increnemt(){
    //    this.setState({
    //        count: this.state.count + 1
    //    }, ()=> {
    //        console.log('Callback value' , this.state.count);
    //    })

    this.setState((prevState)=>({
        count: prevState.count + 1
    }))
       console.log(this.state.count);
    }
    
    increnemtFive(){
        this.increnemt()
        this.increnemt()
        this.increnemt()
        this.increnemt()
        this.increnemt()
    }
    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick = {() => this.increnemtFive()}>Increment</button>

            </div>
        )
    }
}

export default Counter



//Tutorial 11: setState
//1.Always make use of setState and never modify the state directly
//2.Code has to be executed after the state has been updated? for this we have to 
//Place that code in the callback function which is the second argument to the setState method.

//when you have to update the state based on the previous state value, pass in a function as an
//argument instead of the regular object

