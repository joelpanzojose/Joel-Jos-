import React from "react";
import "./Header.css";

function Header() {
    return (
        <header className="header flex">
            <h1 className="header-title">Joel Jose</h1>
            <nav className="header-nav">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;
  