import React, { Component } from 'react'

//in class components methods and handlers are accessed using the "this" keyword.

class ClassClick extends Component {

    clickHandler() {
        console.log("Cliked the button");
    }


    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me </button>
            </div>
        )
    }
}

export default ClassClick
