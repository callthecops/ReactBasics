import React from 'react'

//Higher order components are components wich take other components as arguments and return a new component instead.The component here accepts an original component and returns a NewComponent. 
const UpdateComponent = (OriginalComponent, incrementNumber) => {
    class NewComponent extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + incrementNumber }
            })
        }
        //in order to pass down props to passed components of the higher order component we have to use the spred operator {...this.props} in the render method of the higher order component.
        render() {
            console.log(this.props.name)
            return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props} />
        }
    }

    return NewComponent
}

export default UpdateComponent;