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
    return (
        <>
            <AppInit />
            <main className="flex flex-col justify-center items-center">
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
        </>
    );
}
