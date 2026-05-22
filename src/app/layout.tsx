import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

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
    title: "Akrom Rustamov - Backend Engineer",
    description: "Python Backend Engineer specializing in FastAPI and Django. Building scalable, high-performance backend systems.",
    keywords: ["Backend Developer", "Python", "FastAPI", "Django", "REST API", "Akrom Rustamov"],
    authors: [{ name: "Akrom Rustamov" }],
    openGraph: {
        title: "Akrom Rustamov - Backend Engineer",
        description: "Python Backend Engineer specializing in FastAPI and Django",
        type: "website",
    },
};

const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Akrom Rustamov',
    jobTitle: 'Backend Engineer',
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
        <html lang="en" className={`${syne.variable} ${jetbrainsMono.variable}`}>
            <head>
                <link rel="icon" href="/favicon.ico" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
                />
            </head>
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
