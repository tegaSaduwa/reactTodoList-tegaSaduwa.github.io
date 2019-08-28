import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <header style={headerStyle}> 
             <h1>Todolist</h1> 
             <Link style={linkStyle} to="/">Home</Link>|
             <Link   style={linkStyle} to="/about">About</Link>
            </header>
         
        </div>
    )
}

const headerStyle= {
    background: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '10px'

}

const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}
export default Header;
