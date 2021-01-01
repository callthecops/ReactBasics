import React from 'react'


//Every context object created with this method comes with a provider and a consumer react component.we need these components for steps 2,3 meaning we have to export them.Next we will create more readable names for these and export them.
const UserContext = React.createContext();


const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer }