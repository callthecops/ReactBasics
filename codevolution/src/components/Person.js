import React from 'react'

//if we don't write {person} as parameter to the function then we would have to write person.person.id and so on inside the return method.
function Person({ person }) {
    return (
        <div>
            <h2>{person.id}</h2>
            <br />
            <h2>{person.name}</h2>
            <br />
            <h2>{person.age}</h2>
            <br />
            <h2>{person.skill}</h2>
        </div>
    )
}

export default Person
