import React, { Component } from 'react'


class Users extends Component {

    //Version 1
    //When we pass function references to Components ("Users" in App.js) we have to call the function in JSX => "name" since name now contains the reference to that function.Now we can also have arguments to that function and pass in values.

    //Version 2 explanation: The render pattern.
    //Render Props refers to a technique for sharing code between React components using a prop whose value is a function.
    render() {
        return (
            <div>
                {/* Version one */}
                {/* {this.props.name(false)} */}
                {/* Version two */}
                {this.props.render(false)}
            </div>
        )
    }
}

export default Users
