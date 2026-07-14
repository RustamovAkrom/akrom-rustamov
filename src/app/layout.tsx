import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Galaxy from "@/components/galaxy/Galaxy";
import Cursor from "@/components/cursor/Cursor";

const siteUrl = "https://akrom-omega.vercel.app";
const siteName = "Akrom Rustamov | Python Backend Developer";
const siteDescription =
    "Akrom Rustamov is a Python backend developer building scalable APIs and backend systems with FastAPI, Django, PostgreSQL, and Docker.";

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
    metadataBase: new URL(siteUrl),
    title: {
        default: siteName,
        template: "%s | Akrom Rustamov",
    },
    description: siteDescription,
    applicationName: "Akrom Rustamov Portfolio",
    keywords: ["Backend Developer", "Python", "FastAPI", "Django", "PostgreSQL", "REST API", "Akrom Rustamov"],
    authors: [{ name: "Akrom Rustamov" }],
    creator: "Akrom Rustamov",
    publisher: "Akrom Rustamov",
    alternates: {
        canonical: "/",
    },
    icons: {
        icon: [{ url: "/icons/icons8-code-50.png", type: "image/png", sizes: "50x50" }],
        apple: [{ url: "/icons/icons8-code-50.png", type: "image/png", sizes: "50x50" }],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    openGraph: {
        title: siteName,
        description: siteDescription,
        url: siteUrl,
        siteName,
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/about_me.jpg",
                width: 736,
                height: 1308,
                alt: "Akrom Rustamov, Python Backend Developer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteName,
        description: siteDescription,
        images: ["/about_me.jpg"],
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
        <html lang="en" className={`${syne.variable} ${jetbrainsMono.variable}`} data-theme="dark" data-scroll-behavior="smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
                />
            </head>
            <body>
                <Providers>
                    <Galaxy />
                    <div className="grain" />
                    {children}
                    <Cursor />
                </Providers>
            </body>
        </html>
    );
}
