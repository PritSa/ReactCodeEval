//Regular component

import React, { Component } from 'react'

class RegComp extends Component {
    render() {
        console.log('Regular Component rendered');
        return (
            <div>
              <h1>Regular Component {this.props.name}</h1>  
            </div>
        )
    }
}

export default RegComp


//Now lets create a parent component file i.e ParentComp.js