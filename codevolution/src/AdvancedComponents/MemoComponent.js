import React from 'react'
//rfce to create a functional component.Memo is for functional components what PureComponent is for class components.In order to create a memo component we have to simply export a React.Memo component and pass it our created component.
function MemoComponent({ name }) {

    console.log('Rendering Memo Component')
    return (
        <div>
            {name}
        </div>
    )
}
//This is a higher order component. React accepts a componnt as parameter, adds something new to that component and returns a new enhanced component.
export default React.memo(MemoComponent)
