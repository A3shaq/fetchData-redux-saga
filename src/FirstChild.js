import React from 'react'

function FirstChild(props) {
    console.log(props,"FirstChild")
    return (
        <div>
            <h1>My Name Is{props.name}</h1>
            <h2>I'm {props.age} years old</h2>
            //map here
        </div>
    )
}

export default FirstChild;
