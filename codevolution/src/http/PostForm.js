import React, { Component } from 'react'
import axios from 'axios'
import { object } from 'prop-types'
class PostForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userId: "",
            title: "",
            body: ""
        }
    }

    //e means the function accepts the event argument
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    //this time we make the post request in the submitHandler.First argument is URL, the second is the data that has to be sent.In our case it is the state object.
    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    //we destructure the state fields in the render method
    render() {
        const { userId, title, body } = this.state;

        //we add the onChange event handler so we can track the change in input values and keep them in sync with the state object.
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="userId" value={userId} onChange={this.changeHandler}></input>
                    <input type="text" name="title" value={title} onChange={this.changeHandler}></input>
                    <input type="text" name="body" value={body} onChange={this.changeHandler}></input>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
