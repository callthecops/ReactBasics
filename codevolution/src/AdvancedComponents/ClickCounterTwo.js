import React, { Component } from 'react'

class ClickCounterTwo extends Component {
    //When we say "this.state" we can destructure variables from the state of the instance of the object component, but when we say this.props we destructure variables from the arguments that where passed directly to the instance of the property in the App.js file.
    render() {
        const { count, incrementCount } = this.props;
        return (
            <button onClick={this.incrementCount}>Clicked {count} times</button>
        )
    }
}

export default ClickCounterTwo
