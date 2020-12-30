import React from 'react';
import { Component } from 'react';
//Instead of beeing passed as arguments externally like in Greet.js, the properties here are accessed with the "this.props" keyword wich is reserved in class components.Props are immutable.
class Welcome extends Component {
    //in class components we tend do destructure props in the render method.

    render() {
        return <h1>Class component, Welcome {this.props.name} aka {this.props.heroName}</h1>
    }




}

export default Welcome;