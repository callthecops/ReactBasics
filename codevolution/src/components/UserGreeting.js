import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }


    render() {
        //First approach
        // let message;
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Tudor</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return message;

        //Second Approach
        // if (this.state.isLoggedIn) {
        //     return <div><h1>Hello Tudor</h1></div>
        // } else {
        //     return <div><h1>Hello Guest</h1></div>
        // }

        //Third Approach -> Ternary operator, best approach 
        // return (
        //     this.state.isLoggedIn ? <div>Hello Tudor</div> : <div>Hello Guest</div>
        // )
        //Fourth approach -> using ampersand(shortcircuit operator) to return a certain value only if true.

        return this.state.isLoggedIn && <div>Welcome Tudor</div>
    }
}
export default UserGreeting
