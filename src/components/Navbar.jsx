import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [theme, setTheme] = useState(() => localStorage.getItem('selected-theme') || 'light')

    useEffect(() => {
        document.body.classList.toggle('dark-theme', theme === 'dark')
        localStorage.setItem('selected-theme', theme)
    }, [theme])

    useEffect(() => {
        function handleKey(e) {
            if (e.key === 'Escape') setMenuOpen(false)
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [])

    function toggleMenu() {
        setMenuOpen((s) => !s)
    }

    function closeMenu() {
        setMenuOpen(false)
    }

    function toggleTheme() {
        setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
    }

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo">Indrajit</a>
                <div className={menuOpen ? 'nav__menu show-menu' : 'nav__menu'} id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item"><a href="#home" className="nav__link" onClick={closeMenu}>Home</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link" onClick={closeMenu}>About</a></li>
                        <li className="nav__item"><a href="#portfolio" className="nav__link" onClick={closeMenu}>Projects</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link" onClick={closeMenu}>Contact</a></li>
                    </ul>
                    <i className="uil uil-times nav__close" id="nav-close" onClick={closeMenu} />
                </div>
                <div className="nav__btns">
                    <button className="change-theme" id="theme-button" onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === 'dark' ? <i className="uil uil-sun" /> : <i className="uil uil-moon" />}
                    </button>

                    <button className="nav__toggle" id="nav-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                        <i className="uil uil-apps" />
                    </button>
                </div>
            </nav>
        </header>
    )
}
