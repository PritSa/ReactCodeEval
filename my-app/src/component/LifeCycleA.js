import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

            name: 'sayali'
             
        }

        console.log('LifeCyaycleA constructor')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log('LifeCycle A componentDidMount');
    }

    shouldComponentUpdate(){
      console.log('LifeCycleA shouldComponentUpdate')
      return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('LifeCycleA getSnapshotBeforeUpdate')
    return null
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }

      changeState = () => { 
        this.setState({
            name: 'codeevaluation'
        })
    }
    render() {

        console.log('LifeCycle A Rendered')
        return (
            <div>
             
                <h1>LifeCycle A</h1>
                  <button onClick={this.changeState}>Change State</button>
                <div><LifeCycleB/></div>
            </div>
        )
    }
}

export default LifeCycleA

//Mounting Lifecycle method

//1.Constructor(props)
//2.static getDerivedStateFromProps
//3.render()
//4.componentDidMount()

//When we go to the browser and check console we get all the methods in above sequence only
//this is the order of execution 1.constuctor 2.static getDerivedStateFromProps 3.render() 4.componentDidMount()

//now lets check what happens when we add a childcomponent
//Create new file LifeCycleB.js
//copy the content from LifeCycleA .js to that file

//Now LifeCycleA component render a LifeCycleB component
//So LifeCycleA becomes a parent component and LifeCycleB becomes child component

//now, when we save the files and look at browser we get the following order of execution
// LifeCyaycleA constructor
// LifeCycleA.js:18 LifeCycleA getDerivedStateFromProps
// LifeCycleA.js:27 LifeCycle A Rendered
// LifeCycleB.js:13 LifeCyaycleB constructor
// LifeCycleB.js:17 LifeCycleB getDerivedStateFromProps
// LifeCycleB.js:26 LifeCycleB Rendered
// LifeCycleB.js:22 LifeCycleB componentDidMount
// LifeCycleA.js:23 LifeCycle A componentDidMount

//After the childcomponent completely render then only componetDidMount A is executed
//It is really imp to know the sequence of execution it helps us to avoid the 
//writting of code that might have an unexpected behaviour

//----Updating LifeCycle Methods------
//1.static getDerivedStateFromProps
//2.shouldCOmponentUpdate
//3.render()
//4.getSnapShotBeforeUpdate
//5.componentDidUpdate