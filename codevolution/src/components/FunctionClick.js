import React from 'react'
//React events are named using camelCase rather than lower case.(onClick);With jsx we pass a function rather than a string so instead of clickHandler() we have {clickHandler}.If we add () to the {} it will become a function call so we don't want to do that.We want the handler to be a function and not a function call.
function FunctionClick() {

    function clickHandler() {
        console.log("Button Click");
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
