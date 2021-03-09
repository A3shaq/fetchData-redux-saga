import React from 'react'

function SecondChild(props) {
    console.log(props,'SecondChild')
    return (
        <div>
            <h1>My name is {props.name}</h1>
            <h1>I'm {props.age} years old</h1>
            //map here
        </div>
    )
}

export default SecondChild;
