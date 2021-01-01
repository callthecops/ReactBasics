import React, { Component } from 'react'
import ComponentE from './ComponentE'

//Context provides a way to pass data through the component tree withput having to pass props down manually at every level.Here we have some nested components.
//There are 3 steps to do when implementing context.
//1.Create the context(userContext.js) => there we use the createContext method from React.
//2.Provide a context value => means basically wraping the components that we wish to have access to with the <UserProvider> we exported from userContext.Next we can provide values directly in the Provider Component.Now these values can be consumed by any components that where nested inside(see part 20 in App.js)
//3.Consume the context value in the necessary components => add UserConsumer to the component that needs to consume the provided data(from step2)
class ComponentC extends Component {
    render() {
        return <ComponentE />
    }
}

export default ComponentC
