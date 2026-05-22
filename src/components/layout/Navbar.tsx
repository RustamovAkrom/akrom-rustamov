"use client";

import { useNavbarBehavior } from "@/hooks/useNavbarBehavior";
import { useTheme } from "@/hooks/useTheme";

export default function Navbar() {
    useNavbarBehavior();
    const { toggle } = useTheme();

    return (
        <nav className="nav" id="nav">
            <div className="nav__wrap">
                <a href="#home" className="nav__brand">AR<span className="nav__dot">.</span></a>
                <ul className="nav__list" id="navList">
                    <li><a href="#about" className="nav__a" data-s="about">About</a></li>
                    <li><a href="#skills" className="nav__a" data-s="skills">Skills</a></li>
                    <li><a href="#portfolio" className="nav__a" data-s="portfolio">Work</a></li>
                    <li><a href="#services" className="nav__a" data-s="services">Services</a></li>
                    <li><a href="#certificates" className="nav__a" data-s="certificates">Certs</a></li>
                    <li><a href="#contact" className="nav__a nav__a--cta" data-s="contact">Contact</a></li>
                    <li className="nav__theme-li">
                        <button
                            className="nav__theme"
                            aria-label="Toggle theme"
                            onClick={toggle}
                        >
                            <svg className="nav__theme-icon nav__theme-icon--sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
                                <circle cx="12" cy="12" r="4.5" />
                                <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                            </svg>
                            <svg className="nav__theme-icon nav__theme-icon--moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        </button>
                    </li>
                </ul>
                <div className="nav__actions">
                    <button
                        className="nav__theme nav__theme--standalone"
                        aria-label="Toggle theme"
                        onClick={toggle}
                    >
                        <svg className="nav__theme-icon nav__theme-icon--sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
                            <circle cx="12" cy="12" r="4.5" />
                            <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                        </svg>
                        <svg className="nav__theme-icon nav__theme-icon--moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </svg>
                    </button>
                    <button className="nav__burger" id="navBurger" aria-label="Menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}