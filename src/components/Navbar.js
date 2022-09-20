import React from "react"
import grumpyCat from "../images/grumpy_cat.jpeg"

export default function Navbar() {
    return (
        <nav>
            <img src={grumpyCat} className="nav--icon" />
            <h3 className="nav--logo_text">Grumpy Cat</h3>
            <h4 className="nav--title">My Grumpy Cat</h4>
        </nav>
    )
}