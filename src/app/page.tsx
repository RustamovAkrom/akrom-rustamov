import React from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero/Hero";
import About from "@/components/sections/About";
import QuoteSection from "@/components/sections/QuoteSection";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import GitHubActivity from "@/components/sections/GitHubActivity";
import BlogPreview from "@/components/sections/BlogPreview";
import Certificates from "@/components/sections/Certificates";
import FunFacts from "@/components/sections/FunFacts";
import Contact from "@/components/sections/Contact";

import Galaxy from "@/components/galaxy/Galaxy";
import Cursor from "@/components/cursor/Cursor";


import AppInit from "@/components/AppInit";

export default function HomePage() {
    return (
        <>
            <AppInit />
            <Navbar />
            <Galaxy />
            <Cursor />
            <div className="grain" />

            <main style={{ position: "relative", zIndex: 1 }}>
                <Hero />
                <GitHubActivity />
                <About />
                <QuoteSection />
                <Skills />
                <Portfolio />
                <Services />
                <BlogPreview />
                <Certificates />
                <FunFacts />
                <Contact />
            </main>

            <Footer />
        </>
    );
}
