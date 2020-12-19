import React from 'react'
import {Link} from "react-router-dom"

export const Error = ({location}) => {
    return (
        <main>
            <div className="menu">
                <h1>404 - Not Found! No match for <code>{location.pathname}</code> </h1>
                <Link className="btn" to="/">Go to Home page</Link> 
            </div>
        </main>
        
    )
}
