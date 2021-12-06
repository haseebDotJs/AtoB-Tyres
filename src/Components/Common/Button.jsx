import React from 'react'

const Button = ({ bgColor = "yellow-bg", color = "inherit", text = "Read More", btn = "btn-sm", modify = "hover-dark" }) => {
    return (
        <a href="/">
            <button className={`btn ${btn} ${bgColor} ${color} ${modify} font-bold `} >
                {text}
            </button>
        </a>
    )
}

export default Button
