import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
export const Navbar = () => {
    const [open,setOpen]=useState(false);
    const itemClass=open?"nav_list-item open":"nav_list-item";
    
    return (
        <header>
            <div className="burger-btn" onClick={()=>setOpen(!open)}>
                <i className={open?"open":undefined}></i>
                <i className={open?"open":undefined}></i>
                <i className={open?"open":undefined}></i>
            </div>
            <nav className={open?"navbar open":"navbar"}>          
            <ul onClick={()=>setOpen(!open)} className="nav_list">
                <li className={itemClass}><NavLink to="/" exact activeClassName="current" >HOME</NavLink></li>
                <li className={itemClass}><NavLink to="/aboutme" exact activeClassName="current">ABOUT ME</NavLink></li>
                <li className={itemClass}><NavLink to="/myprojects" exact activeClassName="current" >MY PROJECTS</NavLink></li>
            </ul>
        </nav>
        </header>
    )
}
