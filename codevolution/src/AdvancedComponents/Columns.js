import React from 'react'

function Columns() {
    //By using React.Fragment we can insert these <td>'s in the Table component which otherwise was not possible with using divs because a div node cannot fit inside a <tr>.So fragments allow us to create aditional children elements without creating dom nodes for them.

    const items = [];
    return (
        //key is the only possible attribute that is passable to a react fragment.We can also write <> and </> instead of React.Fragment.
        <>
            {
                items.map(item => (
                    <React.Fragment key={items.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
            <td>Name</td>
            <td>Tudor</td>
        </>
    )
}

export default Columns
