import React, { Component } from 'react'

//Error bounderies catch errors during rendering, in lifecycle methods and in constructors of the whole tree below them.    
class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    //We are creating a hasError field in the constructor and then we use this method to set it to true. Now we can use this state to create a falback UI for the error only.This is the first method for Error handling/
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    //This is the second method for error handling.takes 2 parameters.It is used to log the errors.

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }

    //this.props.chilren refers to the component that we are actually rendering.Now the final step in order for this error boundary to work is to wrap the components in App.js with this error boundary.Error Boundaries will catch the errors and display a fall back UI. So the error will be shown but we will also have a second UI we can access by pressing X.Everything that is wrapped with the errorboundary is hidden independently.
    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary
