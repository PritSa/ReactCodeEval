//Tutorial 34 - Higher Order Component (PART)

import React from 'react'

const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        incrementCount = () => {
            this.setState(prevState => {
                return {count: prevState.count + 1}
            })
        }
      render(){
          return <OriginalComponent 
           count = {this.state.count} 
           incrementCount = {this.incrementCount}

           />
             }
      }
      return NewComponent
    }
export default UpdatedComponent





//Lets first import React from react
//Then create a fat arrow function UpdatedComponent HOC accepts the OriginalComponet as its parameter
//HOC also returns new component so within function body lets create a new component
//class NewComponent  extends React.Component
//In a class component the render() method is required but what do we render simply return
//the original componet
//render(){return <OrginalComponent>}
//Now the new component has been defined we return the new component in arrow function 
//return NewComponent and there there you go, we have a very first Higher Order Function

//It is a function that accepts the original component and retuens a new component
//This HOC thogh doesnt really add anything to the original component

//Lets change that- on the original component in the JSX I am going to add a Prop name equal to sayali
//Now to be able to use this HOC function we need to export it export default UpdatedCOmponet
//Now lets apply this HOC pattern to our ClickCounter and HoverCounter

//In clickCounter lets import updatedComponet from withCounter and while exporting
//i will call the updated function passing in the clickCounter componet
//Lets do the same for HoverComponet 

//so what we are doing here is instead of exporting the ClickCounter or the HoverCounter component
//we export the HOC the HOC in addition to be the clickCounter or HoverCounter now has
//a new prop called name so in both the component we can actually render this prop so
//in JSX {this.prop.name}
//so in clickcounter JSX and Hover JSX we will write {this.prop.name}

//Now if we save the file and look at browser we will able to see the 
//prop being rendered i.e Sayali in the Button and Sayali in the heading

//So our HOC injects a named prop to any component where required 
//for our counter example though that is not really we want
//we want the counter functionality to be shared among the components so 
//lets modify our HOC

//I will copypaste the constructor and incrementcount method from CLickCouter to HOC
//The current state and incrementcount method is the common functionality we want to share
//so NweComponet now maintains the state and a method to increment that state
//This is the common functionality we want to share

//Now remove the constructor and incrementcount method from both the ClickCounter and
//HoverCounter, this will avoid duplication of code
//now in the HOC  need to pass down the state and the incrementcount method as props
//so that original componet can make use of that functionality

//hence remove the name from withCounter JSX and add count={this.state.count} and 
//incrementCount = {this.incrementCount}

//We can now make  use of props in clickCounter and HoverCounter

//in clickcounter we are going to destructure count and incrementcount from this.props
// and get rid of the state
//i.e const {count, incrementCounter} = this.props
//hence in onClickhandler just write {incrementCount}
//get rid of the {this.props.name} being render

//Now lets repet the same for HoverCounter as well

//when we look at the browser both the counter is working well
//But the diffrence now is that we reusing code rather than duplicating it
//that is what HOC bring. 

//Now lets talk about the Naming convention 
//in our code the component and function you typically see are 
//different from what i have used so let me change the it
//The function and file name is usually the same it indicates the functionality 
//that will be added to the component 
//so change const UpdatedCounter to const withCounter
// and export the same.
//The original component is usually refrred to wrapped component that is 
//component is wrapped with HOC
//so lets change the Paramater name OriganlComponent to  WrappedComponet
//The new component is usually the same as the function name but in Pascal case
//the NewCopmponent will be withCounter and we will retrun the same

//Also change the names in clickcounter and hovercounter as well

//NOTE: I havent change the Name here because i have written explation of code using UpdatedCounter,
//OriginalCOunter and NewComponent 