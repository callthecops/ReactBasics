import React from 'react';

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Tudor JSX</h1>
    //     </div>
    // )
    return React.createElement("div", { "id": "myId", "className": "myClass" }, React.createElement("h1", null, "Hello Tudor No JSX"));;

}

export default Hello;