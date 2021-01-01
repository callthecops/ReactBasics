import React, { Component } from 'react'

class LifeCycleB extends Component {
    // The updating lifecyle methods are : constructor(props), static getDerivedStateFromProps(props,state) render(), getSnapshotBeforeUpdate(prevProps,prevState),componentDidUpdate(prevProps,prevState,snapshot);To trigger an update lifecycle .Unmounting phase has just one method "componentWillUnmount()" which is invoked imediately before a component is unmounted and destroyed.It is performing cleanup.The error handling phase has 2 methods static getDerivedStateFromError(error) and componentDidCatch(error,info);

    constructor(props) {
        super(props)

        this.state = {
            name: "Tudor"
        }
        console.log("LifecycleB Constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleB getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("Lifecycle B compoenentDidMount");
    }

    shouldComponentUpdate() {
        console.log('LifeCycleB shouldComponentUpdate');
        return true;
    }


    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleB getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('LifeCycleB componentDIdUpdate')
    }

    render() {
        console.log("LifeCycleB render");
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB
