import React from "react";
import './../CSS/Navbar.css';

function Navbar(){
    return(
        <div className="navbar_main">
            <a href="/page1" className="links">Page1</a>
            <a href="/page2" className="links">Page2</a>
            <a href="/" className="links">Info</a>
        </div>
    );
}

export default Navbar;