import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

            name: 'sayali'
             
        }

        console.log('LifeCyaycleB constructor')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleB componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate')
        return true
      }
  
      getSnapshotBeforeUpdate(prevProps,prevState) {
      console.log('LifeCycleB getSnapshotBeforeUpdate')
         return null
      }
  
      componentDidUpdate(){
          console.log('LifeCycleB componentDidUpdate')
      }
    render() {

        console.log('LifeCycleB Rendered')
        return (
            <div>
                <h1>LifeCycle B</h1>
            </div>
        )
    }
}

export default LifeCycleB