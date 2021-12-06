import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

 class ParentComp extends PureComponent {
     constructor(props) {
         super(props)
     
         this.state = {
              name: 'sayali'
         }
     }
     
     componentDidMount(){
         setInterval(() => {
             this.setState({
                 name:'sayali'
             })
         },2000)
     }
    render() {
        console.log('***********Parent Component rendered*********');
        return (
            <div>
                <h1>Parent Component</h1>
                {/* <RegComp name = {this.state.name}></RegComp>
                <PureComp name = {this.state.name}></PureComp> */}
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp

//Create a regular class
//Add a constructor
//Set a new propery called name and set the value of it to sayali
//now add the componentDidMount () Lifecycle method and within the body
//I will create a timer setInterval accepats two argument.
//first one is a function which will be an arrow function and 
//second  argument is the interval lets set it two seconds
//i.e componentDidMount(){
//    setInterval(() => {},2000) }

//Within the arrow function body i will call setState but  what i will do is set the anme property
//to sayali again. No change from the  previous value whatsever

//Now i will include regular and pure componets  in the JSX passing
//in name as a prop i.e <RegComp = {this.state.name}> and <PureComp = {this.state.name}>

//Next lets include this name and props in the regular and pure component {this.props.name}

//Finally in App component lets replace PureComp with ParentComp

//If you take the look at browser we should able to see expected output

//What we concerned though is when the render() method is called in each of the components so lets 
//add the console.log statement in all the component

//Now save the file and look at browser and within console we can see
//***********Parent Component rendered*********
//RegComp.js:7 Regular Component rendered
//PureComp.js:10 Pure COmponent Rendered

//But after that every two second setState method call which will rendered parent component
//and if the parent component rerender the child component will also rendered
//unless off course you return false from should return component update 
//so you should see the render method from  both regular and pure components beging logged
//However we see that it is not the case every two second parent and the regular componet
//rendered but the PURE COMPONENT IS NEVER RE-RENDERD
//this is the difference between regular component class and  pure component class

// ***********Parent Component rendered*********
// RegComp.js:7 Regular Component rendered (pure componet is not re-rendered)

//KINDLY CHECK THE NOTES FOR SHALLOW COMPARISOPN

//In our example we are dealing with primitive types and props comparision we 
//are sending a prop which is of type string  and has a value of sayali
//every two second a pure component see that the previous prop value of sayali is
//no difference from the current prop value of sayali
//hence does not re-rendered and beacuse

//the regular component does not implement this check it will always re-rendered

//What we have see is a showllow comparision of a props but
//its pretty much same for the state comparision 

//I will Now change the ParentComponent to  extend PureComponent instead of regular component class
//so class ParentComp extends PureComponent

//if we now take a look at browser we can see there is the initial rendering of all the components 
//i.e parent, regualr and pure
//and two seconds later there is no re-render 
//the parent component checks previous state with current state and sees that there is no
//difference hence there is no re-render
//but what we should keep in mind is that 
//If the parent doesnt re-rendered the children also will never re-rendered
//and that why we dont see any statement logged in two seconds interval

// question Q.why to use pure component?

//Pure components by preventing unneccessary re-renders can give you
//a performance boost in certain scenarios for example
//lets say we are rendering the list of 50 items by not rerendering them when it
//is not required they are going to have a good performance boost 
//a key point to keep in mind is that you should not mutate object or arrays
//in props or state
//for ex. if we need to add a new item to the list dont mutate it by pushing the item into the list
//the refrence to the array never changes and beacuse 
//pure componet only check for that the component will not re-rendered even if
//there is a difference
//always return a new object or array when dealing with pure component


//Now Lets see what is MEMO componet (check notes for refrence)
//we have created another file MemoComp this is functional component

//Now in ParentComp please commentout the Regcomp and PureComp and 
//instead include MemoComp

//We have setInterval in componentDidMount which basically calls setState every two second
//resulting a re-render of parent componet
//we have extended if from  component class 

//now since the name prop is not really changing every two second we can gain performance improvement by
//not re-rendering the MemoComponent <MemoCome name={this.state.name}>
//so when the parents re-render the Memo component also re-renders but
//the name prop is going to stay the same with every re-render so 
//we need a way to avoid re-rendering this Memo functional component
//and we can do that by using React.memo()
//in Memo component what we have to do is export React.memo and then passin Memo component
//as its argument

//i.e export default React.memo(MemoComp)

//Back to the browser we can see parent and component renderd but after two second 
//memo component is not re-rendered

//the props are not changing hence its better to avoid re-rendering the memo component