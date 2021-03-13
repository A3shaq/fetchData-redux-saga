import React, { useState } from 'react'
// import Parent from "./Parent"


//Assigment
// using state
// email = admin@domain.com
// Password = abc123
// Show login Successfull

function Main() {
    const [name, setName] = useState("")
    // name = ""
    // name = "Ammar"
    //Normal Function



    // Normal function
    function add(a, b) {
        // Any work here
        console.log("add runs", a, b)
        return a + b;
    }

    const subtract = function (a, b) { console.log("Subrtract runs", a, b); return a - b; }

    // Arrow functions in Js
    // Arrow function is always anonyoums   
    // function = ""=>""
    // single line statement does not need return key word in arrow functions

    const myFirstArrowFunction = () => console.log("Arrow function")

    // for set value of input
    const handleChangeName = (e) => {
        console.log("Event", e.target.value)
        // console.log(name)
        setName(e.target.value)
    }

    console.log("name", name)
    return (

        <div>
            <input placeholder="Take an input from users" value={name} onChange={(e) => handleChangeName(e)} />

            <div> <button onClick={() => add(2, 3)}>Run My Function</button>

            </div>
        </div>

    )
}

export default Main;