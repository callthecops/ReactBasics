import React from 'react';
import { Component } from 'react';
//Instead of beeing passed as arguments externally like in Greet.js, the properties here are accessed with the "this.props" keyword wich is reserved in class components.Props are immutable.
//In order to manage state first thing we have to do is to create a state object and initialize it, we do this in the class constructor.The state is mutable which will allow us to change it on click or otherwise.we create the state by assigning an empty object at first {} to this.state.State is a build in object that comes inherited from component.
class Message extends Component {

    constructor() {
        super();
        this.state = {
            message: "Welcome visitor STATE"
        }
    }
    //in order to bind the state of the class to the render method we have to add it as an expression.We can also add events dirrectly on the tags.


    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }

    //in order to dynamically change the state of a method we have to use the setState method which takes the new state object as an argument along with the new values.
    changeMessage() {

        if (this.state.message === "Thank you for subscribing") {
            this.setState({
                message: "Welcome visitor State"
            })
        } else {

            this.setState({
                message: "Thank you for subscribing"
            })
        }
    }


}
export default Message;