import React from 'react'
//Here we add props as a parameter for the function and than the props object is passed from the parent to the child.Now we can access the object field greetHandler which was passed in the parent .greetHandler has the alert value form the parents method.
function ChildComponent(props) {
    return (
        <div>
            {/* From parent to child */}
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
            {/* From child to parent calling the parent method from the child component*/}
            <button onClick={() => props.greetHandler("child")}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
