import React from "react";
import './../CSS/Navbar.css';

function Navbar(){
    return(
        <div className="navbar_main">
            <a href="/tasks" className="links">Tasks</a>
            <a href="/settings" className="links">Settings</a>
            <a href="/" className="links">Info</a>
        </div>
    );
}

export default Navbar;