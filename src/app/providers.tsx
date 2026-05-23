"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ProgressBar from "@/components/ProgressBar";

function GlobalEffects() {
    const pathname = usePathname();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        (entry.target as HTMLElement).classList.add("in");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );

        // Observe after hydration completes
        const timer = setTimeout(() => {
            document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
                observer.observe(el);
            });
        }, 100);

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, [pathname]);

    return null;
}

export default function Providers({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <GlobalEffects />
            <ProgressBar />
            {children}
        </>
    );
}
