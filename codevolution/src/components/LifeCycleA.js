import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {

    //Handling all lifecyle methods.First we handle the constructor wich is used to update state, then we use the static method getDeriveStateFromProps.This methods has access to props and state as parameters and has to return the new state or null.The third method is the render method.The final method is componentDidMount.The order of method execution during mounting phase is always constructor,getDerivedStateFromProps , render and lastly componentDidMount.
    constructor(props) {
        super(props)

        this.state = {
            name: "Tudor"
        }
        console.log("LifecycleA Constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("Lifecycle A compoenentDidMount");
    }

    shouldComponentUpdate() {
        console.log('LifeCycleA shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('LifeCycleA componentDIdUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'CodeVolution'
        })
    }

    render() {
        console.log("LifeCycleA render");
        return (
            <div>
                <LifeCycleB />
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>Change State</button>
            </div >
        )
    }
}

export default LifeCycleA
