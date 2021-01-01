import React, { Component } from 'react'
//to create a ref we use React.createRef method.We do this in the constructor.After creating a ref we have to attach the ref to the input element in our render method, so we use the ref reserved attribute.
class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus();
        console.log(this.inputRef);
    }
    //we alert the value that was inputed in the textbox
    clickHandler = () => {
        alert(this.inputRef.current.value);
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
