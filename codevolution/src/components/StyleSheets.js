import React from 'react'
import './myStyle.css'

//in order to use css files in compoenents we first have to import them.Since 'primary" is the class we created in myStyle.css we can add it directly to the component as attribute with the className attribute name since "class" is already reserved by html.
function StyleSheets(props) {
    let className = props.primary ? 'primary' : '';
    return (
        <div>
            <h1 className={className}>StyleSheets</h1>
            {/* With template literas */}
            <h1 className={`${className} font-xl`}>StyleSheets</h1>
        </div>
    )
}



export default StyleSheets
