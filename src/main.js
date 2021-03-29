import React, { useState } from 'react'
// import Parent from "./Parent"
import Login from "./screens/Login"


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

        <React.Fragment>
            <Login heading="Login" />
            <Login heading="Signup" />

        </React.Fragment>
    )
}

export default Main;