import React, { PureComponent } from 'react'
//rpce to create Pure component.
//A pure Component implements the shouldComponentUpdate lifecycle method by performing a shallow comparison on the props and state of the compoenent.It is a good ideea to make sure all the children are pure components aswell. And neve mutate the state, instead return a new object that reflects the new state.
class PureCmpnt extends PureComponent {
    render() {
        console.log("PURE COMPONENT RENDER")
        return (

            <div>
                PureComponent {this.props.name}
            </div>
        )
    }
}

export default PureCmpnt
