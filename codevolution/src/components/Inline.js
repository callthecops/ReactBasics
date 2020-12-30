import React from 'react'
//In react inline statements are not specified as a string, instead they are specified with an object who's key is the camelCase version of the styling and the value is a string.as explained here.Then we add the object to the inline style attribute on the tag.

const heading = {
    fontSize: "72px",
    color: "blue"
}

function Inline() {
    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline
