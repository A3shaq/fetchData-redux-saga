import React from 'react'

const Button = (props) => {

    const { text = "Save", style, onClick } = props

    return (
        <button style={{ backgroundColor: 'green' }} onClick={onClick} {...props} >

            {text}
        </button>
    )

}

export default Button;