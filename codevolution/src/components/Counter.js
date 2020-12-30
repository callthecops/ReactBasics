import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                count - {this.state.count}
                <br />
                <button onClick={() => this.incrementFive()}>Counter</button>
            </div>
        )
    }

    //When we modify the state using the setState method react will always call the render method again and rerender the page.Calls to setState are asynchronous.The setState method has 2 parameters, the first one is the State Object and the second parameter is the callback function that is an arrow function.
    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => { console.log("Callback value", this.state.count) })

        //when we want to update the state based on the previous state we have to pass in an arrow function instead of an object because otherwise react will group the values together for performance reason.The functions has access to the previous state.The second parameter is also props.
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();

    }

}

export default Counter;
