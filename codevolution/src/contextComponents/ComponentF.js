import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {

    //This is the last component in the coponent tree, and the component which needs to consume the values passed by the Producer.In order to do that we need to include the UserConsumer component in the JSX.the userName will be consumed and rendered as part of the JSX.
    render() {
        return (

            <UserConsumer >
                {
                    (userName) => {
                        return <div>Hello {userName}</div>
                    }
                }
            </UserConsumer>

        )
    }
}

export default ComponentF
