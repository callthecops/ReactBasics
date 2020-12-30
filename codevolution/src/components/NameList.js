import React from 'react'
import Person from './Person';
function NameList() {

    const names = ['Burce', 'Clark', 'Diana'];

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 22,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 35,
            skill: 'Vue'
        }
    ]
    //With simple array of strings.We use the index parameter in order to render the unique key attribute for the elements.
    const nameList = names.map((name, index) => <h2 key={index}>{index}{name}</h2>)
    //With array of objects.We are building a second class to refactor this. We create an arrow function in which we pass the person argument to the Person component.React also needs to indentify different object from lists so that we need to add the "key"prop to the Person component.It has to be unique for each item.So that we assing person.id as the value since every person has a different id."Key " is also a reserved word. Keys help react identify wich items has changed ,removed, added and have a crucial role in handling UI updates efficiently.When we don't have an unique element we can use the index of an element,also the list has to be static and not change/reordered/refiltered so we can use this succesfully.The index as a key should be the last resort.
    const personList = persons.map(person => <Person key={person.id} person={person} />)
    //We add {} to evaluate stuff in JSX.We can nest {} in JSX to evaluate expressions.

    //With Id from the object
    // return <div>{personList}</div>
    //With index of an element.
    return <div>{nameList}</div>

}

export default NameList;


