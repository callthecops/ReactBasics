import React from 'react'
import ReactDOM from 'react-dom'

//Portals in react help us create and display components outside of the designated area "root" from index.html.We create a portal by importing ReactDom and unsing the createPortal method which takes 2 parameters.First parameter is the JSX we want to render and the second parameter is the DOM node to mount to.
function PortalDemo() {
    return ReactDOM.createPortal(
        <h1>Portals demo</h1>,
        document.getElementById('portal-root')
    )
}

//Portals in react help us create and display components outside of the designated area "root" from index.html
export default PortalDemo
