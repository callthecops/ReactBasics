import React from 'react'

function FragmentDemo() {
    //Every time we return multiple element we have to enclose them in a parent element.We usually use a div for this but we can use a React Fragment aswell. This technique will prevent the addition of an extra node to the DOM.
    return (
        <React.Fragment>
            <h1>
                Fragment Demo
            </h1>
            <p>This describes the fragment paragraph</p>
        </React.Fragment>
    )
}

export default FragmentDemo
