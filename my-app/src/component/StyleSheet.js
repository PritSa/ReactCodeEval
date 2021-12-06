import React from 'react'
import './myStyle.css'

function StyleSheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} font-xl`}>I Love React</h1>
        </div>
    )
}

export default StyleSheet

//Styling and CSS Basic

//We can also conditionally apply a class based on props or state of the component for 
//e.g let me pass down the props called primary and set it defaults so on the StyleSheet component
//primary is equal to false now we can use the props in the component
// has props as parameter i.e <StyleSheet primamry={false}/>
//and within body let className=props.primary ? 'primary' : ''

//Now we are going to use that className variable as value to our className attribute
//i.e <h1 className={className}>

//we have set the primary to False hence css will not be applied to our file
//if we set it true we should get the desired output

//If we want to specify a multiple classes the simplest option is to use template literals

//so in CSS file lets create a class .font-xl

//in StyleSheet we change the className attribute to a template literals using backticks so this
//is going to be backticks and beacuse class name is a variable value we include it within
//dollar curly braces and then we can specify our second class
//i.e <h1 className={`${className} font-xl`}>