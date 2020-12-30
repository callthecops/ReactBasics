import React from 'react';

// function Greet() {
//     return <h1>Hello Tudor</h1>
// }

//Props is a convention name for a parameter and is always an object that is used as parameter for the arrow function.In order to pass arguments to a custom Component Tag we have to add them as tag attributes.Now we will be able to access them by using props.attributeName in curlyBraces {}.These are used by JSX to evaluate the expression.

//if we have multiple children(by writing something between the component tags like in case of Greet component), we have to create that component in the Greet.js file with a single wrapper element.This means all the contained elements should be wrapped with a div tag.This is because the return can return only one html element so everything has to be wrapped inside a larger element like a div.
const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Hello {props.name} aka {props.heroName}</h1>
            { props.children}
        </div>
    )
}

//Example of destructuring
// we are basically extracting name and heroname from the object and then we can use them as sepparate variables.We can destructure in parameter placeholder or in the function body.
export const Greet2 = ({ name, heroName }) => {
    console.log(name + heroName);
    return (
        <div>
            <h1>Hello {name} aka {heroName}</h1>

        </div>
    )
}
export const Greet3 = props => {
    const { name, heroName } = props;
    return (
        <div>
            <h1>{name} aka {heroName}</h1>

        </div>
    )
}

export default Greet;
