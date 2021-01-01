import React, { Component } from 'react'
//This component will be a container componenet where we implement the common props pattern functionalities and that is the state along with the incrementcount method.
class CounterProps extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 };
        })
    }
    //Very important , everything that is passed as an attribute to a custom tag component is passed as an argument to that object, and everything that is passed between the opening and closing tag of that component object will be passed as the children prop which is then accessed to render the UI.
    render() {
        return (
            <div>
                {/* With render prop */}
                {/* {this.props.render(this.state.count, this.incrementCount)} */}
                {/* With children prop */}
                {this.props.children(this.state.count, this.incrementCount)}

            </div>
        )
    }
}

export default CounterProps
