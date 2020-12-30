import React, { Component } from 'react'

class Form extends Component {
    //For each form input we have to assign the state in the constructor.
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            comments: "",
            topic: "react"
        }
    }

    //with the help of the event parameter we can extract the value of the input element using
    //event.target.value.So any time we change the input value that value is captured using event.target.value.And all we have to do is assign this capture value back to the state property.
    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value

        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }
    //Because the inputs are assigned as the state of the component, we can access them by using this.state
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
        //preventDefault method will prevent the default form behaviour to occur, so if we submit the data, the page will not be refreshed when we click on the alert box.
        event.preventDefault();
    }

    //this.state.username gives the value of the input the current value of the username field.this means that changing the username field should display a different value.So whenever is a change in the value, that value is propagated to the handleUsernameChange method which assigns the value to the username field(state).the onChange JS event is starting the action.onChange will also rerender the component so the data that was inputed is now the actual state of the component.A STATE CHANGE HAPPENS AFTER A RERENDER
    render() {
        const { username, comments, topic } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div >
                {/* A common approach for form submission is to have a javascript function that handles the submition of the form.That method will also have access to the data the user entered into the form.In order to do that we have to assign an onSubmit event to the form and assign a function to it. */}
                <button type="submit">Submit</button>
            </form >
        )
    }
}

export default Form
