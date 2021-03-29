import React, { Fragment } from "react"
import { Input, Button } from "../components"
const LoginScreen = (props) => {

    const { heading } = props

    const handleChange = (e) => {

    }
    return (

        <Fragment>
            <h1>{heading}</h1>
            <Input placeholder="Enter Name" style={{ backgroundColor: "White", borderRadius: "10px" }} onChange={handleChange} />
            <Input placeholder="Enter Password" />
            <Button onClick={() => alert("Submit Succeess")} text='Login' />
        </Fragment>
    )
}


export default LoginScreen