import React, { Component } from 'react'
/*
class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome {this.props.name} a.k.a {this.props.nickname} have a email id as  {this.props.emailid}</h1>
            </div>
        )
    }
}

export default Welcome
*/

//Destructuring props in class component

class Welcome extends Component {
    render() {
        const {name, nickname, emailid} = this.props
        
        return (
            <div>
                <h1>Welcome {name} a.k.a {nickname} have a email id as  {emailid}</h1>
            </div>
        )
    }
}

export default Welcome


