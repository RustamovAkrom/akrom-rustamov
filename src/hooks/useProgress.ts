"use client";

import { useEffect } from "react";

export function useProgress() {
    useEffect(() => {
        const bar = document.querySelector<HTMLElement>(".progress");

        if (!bar) return;

        const update = () => {
            const scrollTop = window.scrollY;
            const height =
                document.documentElement.scrollHeight - window.innerHeight;

            const progress = height > 0 ? scrollTop / height : 0;

            // 🔥 1:1 как обычно
            bar.style.transform = `scaleX(${progress})`;
        };

        window.addEventListener("scroll", update, { passive: true });

        update();

        return () => {
            window.removeEventListener("scroll", update);
        };
    }, []);
}
