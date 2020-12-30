import React, { Component } from 'react'
import ChildComponent from './ChildComponent';
//How to pass methods as props.In the parent component we define the method, then we pass the method as a prop on the child component tag and in the child compoennet we acces the method using the props object.
class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: "Parent"
        }
        //here we bind the method
        this.greetParent = this.greetParent.bind(this);
        this.greetParent2 = this.greetParent2.bind(this);
    }

    //Because we use this in the method we have to bind the method in the constructor
    greetParent() {
        alert(`Hello ${this.state.parentName}`);
    }

    greetParent2(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`);
    }

    //We add a paremeter to the ChildComponent to wich we bind the greetParent method.We are passing a referenc to the greetParent method as a prop called greetHandler
    render() {
        return (
            <div>
                {/* version 1 */}
                {/* <ChildComponent greetHandler={this.greetParent} /> */}
                {/* version 2 */}
                <ChildComponent greetHandler={this.greetParent2} />
            </div>
        )
    }
}

export default ParentComponent
