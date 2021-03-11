import React, { useState } from 'react'
import FirstChild from "./FirstChild"
import SecondChild from "./SecondChild"
import LED from "./assets/images/test.jpg"


// const arrObj1 = [{ user: "Arshaq", age: 25 }, { user: "Areeb", age: 20 }, { user: "Arif", age: 22 }]
// const arrObj2 = [{ user: "Junaid", age: 25 }, { user: "jawwad", age: 20 }, { user: "Addel", age: 22 }]





function Parent() {
    const [name, setName] = useState("Haris Sohail")
    const [flag, setFlag] = useState(false)
    let title1 = 'Mera Babbu'
    let title2 = 'Mere Babu ny thana thaya'


    // Conditional rendering

    return (
        <div>
            {/* <h1>I'm  Parent</h1>
            <FirstChild name={title1} age='22' />
            <SecondChild name={title2} age={19} /> */}

            <h1> {flag === true ? <img style={{ width: "50%" }} src={LED} alt="Image Not Found" /> : "No Image Here"}</h1>

            <button onClick={() => flag === true ? setFlag(false) : setFlag(true)}>{flag === false ? "Add Image" : "Remove Image"}</button>

        </div>
    )
}

export default Parent;
