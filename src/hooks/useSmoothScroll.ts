"use client";

import { useEffect } from "react";

export function useSmoothScroll() {
    useEffect(() => {
        const links = document.querySelectorAll('a[href^="#"]');

        const handler = (e: Event) => {
            const target = e.currentTarget as HTMLAnchorElement;
            const id = target.getAttribute("href")?.slice(1);

            if (!id) return;

            const el = document.getElementById(id);
            if (!el) return;

            e.preventDefault();

            el.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        };

        links.forEach(link => link.addEventListener("click", handler));

        return () => {
            links.forEach(link => link.removeEventListener("click", handler));
        };
    }, []);
}
