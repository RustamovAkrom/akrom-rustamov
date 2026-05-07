export default function Navbar() {
    return (
        <>
            {/* <!-- NAV --> */}
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
                    </ul>
                    <button className="nav__burger" id="navBurger" aria-label="Menu"><span></span><span></span></button>
                </div>
            </nav>
        </>
    )
}
