import React from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";

import Galaxy from "@/components/galaxy/Galaxy";
import Cursor from "@/components/cursor/Cursor";
import ThemeToggle from "@/components/ui/ThemeToggle";

import AppInit from "@/components/AppInit";

export default function HomePage() {

    return (
        <>
            {/* Init (logic only) */}
            <AppInit />

            {/* <!-- NAV --> */}
            <Navbar />

            {/* <!-- 3D GALAXY CANVAS --> */}
            <Galaxy />

            {/* <!-- CURSOR --> */}
            <Cursor />

            {/* <!-- GRAIN TEXTURE --> */}
            <div className="grain"></div>

            {/* <!-- THEME TOGGLE --> */}
            <ThemeToggle />

            <main style={{ position: "relative", zIndex: 1}}>

                {/* <!-- ═══ HERO ═══ --> */}
                <Hero />

                {/* <!-- ═══ ABOUT ═══ --> */}
                <About />

                {/* <!-- ═══ SKILLS ═══ --> */}
                <Skills />

                {/* <!-- ═══ PORTFOLIO ═══ --> */}
                <Portfolio />

                {/* <!-- ═══ SERVICES ═══ --> */}
                <Services />

                {/* <!-- ═══ CERTIFICATES ═══ --> */}
                <Certificates />

                {/* <!-- ═══ CONTACT ═══ --> */}
                <Contact />

            </main>


            <Footer />
        </>
    );
}
