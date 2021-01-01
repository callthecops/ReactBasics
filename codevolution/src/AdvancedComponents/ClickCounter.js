import React, { Component } from 'react'
import UpdateComponent from './withCounter'
class ClickCounter extends Component {



    render() {
        const { count, incrementCount } = this.props;
        return <button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
    }
}

//while exporting we call the updateComponent passing in the ClickCounter component.Also when we talk about higher order components(HOC) the props are passed to the hoc not to the "ClickCOunter"
export default UpdateComponent(ClickCounter, 5)
