import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Galaxy from "@/components/galaxy/Galaxy";
import LoadingBar from "@/components/LoadingBar";

const syne = Syne({
    variable: "--font-syne",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Akrom Rustamov - Python Backend Developer",
    description: "Python Backend Developer specializing in FastAPI and Django. Building scalable, high-performance backend systems.",
    keywords: ["Backend Developer", "Python", "FastAPI", "Django", "REST API", "Akrom Rustamov"],
    authors: [{ name: "Akrom Rustamov" }],
    openGraph: {
        title: "Akrom Rustamov - Python Backend Developer",
        description: "Python Backend Developer specializing in FastAPI and Django",
        type: "website",
    },
};

const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Akrom Rustamov',
    jobTitle: 'Python Backend Developer',
    url: 'https://akrom-omega.vercel.app',
    sameAs: [
        'https://github.com/RustamovAkrom',
    ],
    knowsAbout: ['Python', 'FastAPI', 'Django', 'PostgreSQL', 'REST API', 'System Design'],
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tashkent',
        addressCountry: 'UZ',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uz" className={`${syne.variable} ${jetbrainsMono.variable}`} data-theme="dark" data-scroll-behavior="smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link rel="icon" href="/favicon.ico" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
                />
            </head>
            <body>
                <Providers>
                    <Galaxy />
                    <div className="grain" />
                    <Navbar />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
