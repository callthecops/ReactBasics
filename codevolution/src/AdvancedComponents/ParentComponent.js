import React, { Component } from 'react'
import MemoComponent from './MemoComponent';
import PureCmpnt from './PureCmpnt';
import RegularComponent from './RegularComponent';

class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "Tudor"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Tudor"
            })
        }, 2000);
    }


    render() {
        console.log("PARENT COMPONENT RENDER")
        return (
            <div>
                Parent Component
                <RegularComponent name={this.state.name} />
                <PureCmpnt name={this.state.name} />
                Memo Component
                <MemoComponent name={this.state.name} />
            </div>
        )
    }
}

export default ParentComponent
