"use client";

import { useEffect } from "react";
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
import AppInit from "@/components/AppInit";

export default function HomePage() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("section-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
        );

        document.querySelectorAll(".section-anim").forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <AppInit />
            <main className="flex flex-col justify-center items-center">
                <Hero />
                <GitHubActivity className="section-anim" />
                <About className="section-anim" />
                <QuoteSection className="section-anim" />
                <Skills className="section-anim" />
                <Portfolio className="section-anim" />
                <Services className="section-anim" />
                <BlogPreview className="section-anim" />
                <Certificates className="section-anim" />
                <FunFacts className="section-anim" />
                <Contact className="section-anim" />
            </main>
        </>
    );
}
