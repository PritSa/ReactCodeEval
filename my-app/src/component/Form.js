import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            username: ''  ,
            comments: '' ,
            Topic: 'Angular'

         }
     }
     
     handleUsernameChange = event => {
         this.setState({

             username: event.target.value
         })
        }
         handleCommentChnage = event => {
             this.setState({
                comments: event.target.value
             })
            }

            handleTopicChange = event => {
                this.setState({
                    Topic: event.target.value
                })
            }

            handleSubmit = event => {
                alert(`${this.state.username}  ${this.state.comments} ${this.state.Topic}`)
                event.preventDefault()
            }
     
    render() {
        return (
           <form onSubmit={this.handleSubmit}>
               <div>
                   <label>Username</label> 
                   <input type="text" 
                   value={this.state.username} 
                   onChange={this.handleUsernameChange} />
               </div>
               <div>
               <label>Comments</label>
                   <textarea 
                   value={this.state.comments}  
                   onChange={this.handleCommentChnage}

                   />
               </div>
               <div>
                   <label htmlFor=""> Topic</label>
                   <select name="" id=""  value={this.state.Topic} onChange={this.handleTopicChange}>
                       <option value="ang">Angular</option>
                       <option value="react">View</option>
                       <option value="vue">React</option>
                   </select>
               </div>
               <div>
                   <button type="submit">Submit</button>
               </div>
           </form>
        )
    }
}

export default Form



//Create class component
//add form tag and within it lable it as username
//Till now we have created Username and it is regular HTML form and 
//not controlled rect component to convert it into controlled component
//we need to follow two step

//1.first step is to create a component state that we control the value of the input elemet so
//within the component, create constructor, add new state property called 'username'
// and initialize it to empty string ''
//next assign this state property as value to the input element so
//<input type="text"  value={this.state.username}>

//if you go back to browser and try to type in a username you're going to find out that the
//input doesn't reflect the changes which brings us to the second step

//2.Handling the onChange event
//so in our component i am going to create an onChange event handler
//on input element lets listen to the onChange event and assign a handler called 'handleUsernameChange'
//Now lets define a method as class property
//i.e handleUsernameChange = () => { }
//so handleUserName change and the property is going to be equal an arrow function it 
//just so happens that when you assign a handler to onChange event 
//the event itself is passed as parameter to the handler 
//so we have one parameter as event i.e handleUsernameChange = (event) => { }
//from this event we can extract the value of input element using event.target.value
//so anytime you change the  input value that value is captured using event.target.value
//all we have to do is simply assign this captured value back to the state property and
//to update the state we will be using the setStatle() method

//so within function body this.setState({username: event.target.value})

//lets save this and look at the browser if i type my name that means it works

//Now we have added form elements like textarea and select
//now lets add sumbit button

//if we go back to browser and click on submit button you can see that page refreshes
//so right now the form have default HTML form behaviour of browsing to a new page
//when submit button is clicked a commom approach however is to have
//javascript function that handles the submission of the form and
//that method will also have access to the data that user enters in the form

//So in form tag we are going to assign a handler to the onSubmit event 
//i.e <form onSubmit = {this.handleSubmit}>

//now we can define the handler
//
//i.e handleSubmit = event => { alert(`${this.state.username} ${this.state.comments} ${this.state.Topic}`)}

//so now when we add data in the form and sumbit the button we should be able to see the 
//alert message with the form data

//But when we dismiss the alert we can see the page refreshes and filled data is lost
//to avoid this we simply add an event.preventDefault() 
//this will prevent the default behaviour of form submission
//so alert statement  write event.preventDefault()
