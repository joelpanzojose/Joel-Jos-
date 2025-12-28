import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        function onResize() {
            if (window.innerWidth > 600 && open) setOpen(false);
        }
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [open]);

    const handleLinkClick = () => setOpen(false);

    return (
        <header className="header flex">
            <h1 className="header-title">Joel Jose</h1>

            <button
                className={`hamburger ${open ? "is-active" : ""}`}
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                aria-expanded={open}
                onClick={() => setOpen(v => !v)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`header-nav ${open ? "open" : ""}`}>
                <ul>
                    <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                    <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                    <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
  