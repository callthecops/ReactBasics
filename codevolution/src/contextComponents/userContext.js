import React from 'react'


//Every context object created with this method comes with a provider and a consumer react component.we need these components for steps 2,3 meaning we have to export them.Next we will create more readable names for these and export them.

//We can also set a default value to context. This is passed to the createContext method.This value will be used only when a component does not have a provided value to it.
const UserContext = React.createContext("DefaultValue");


const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer }
export default UserContext;