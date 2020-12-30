import React, { Component } from 'react'

//In react we have to bind event handlers by using different methods .
//The first approach is using the bind keyword in the render method and pass it the current instance.
//The second method is to use arrow function in the render method.Here we are calling the event handler and returning that value. That is why we are required to have ().
//The third approach is the best approach and deals with binding the click event handler in the constructor as opposed to doing it in the render method.
//The fourth approach is using an arrow function as a class property.Basicaly change the way we define our method in the class. 
class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }
        //Third Approach - > Best approach along with approach number 4
        // this.clickHandler = this.clickHandler.bind(this);
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Bye'
    //     })
    // }
    //Approach number 4
    clickHandler = () => {
        this.setState({
            message: "GoodBye"
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*First Approach*/}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/*Second Approach*/}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
