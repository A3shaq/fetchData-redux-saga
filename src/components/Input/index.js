import React from 'react'
import  "./style.css"

const Input = (props) => {
    const { placeholder = "Enter something", onChange, style, className } = props
    return (
        <div>
            <input placeholder={placeholder} onChange={onChange} className={className?className:"inputStyles"} style={style ? style : { border: "solid" }} {...props} />
        </div>
    )
}

export default Input;