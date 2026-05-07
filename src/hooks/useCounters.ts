"use client";

import { useEffect } from "react";

function animate(el: HTMLElement, to: number, duration = 1200) {
    const start = performance.now();

    const step = (now: number) => {
        const p = Math.min((now - start) / duration, 1);

        // easeOutCubic
        const eased = 1 - Math.pow(1 - p, 3);

        const value = Math.floor(eased * to);

        el.textContent = value.toLocaleString();

        if (p < 1) {
            requestAnimationFrame(step);
        } else {
            el.textContent = to.toLocaleString();
        }
    };

    requestAnimationFrame(step);
}

export function useCounters() {
    useEffect(() => {
        const items = document.querySelectorAll("[data-count]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const el = entry.target as HTMLElement;

                    const value = Number(el.dataset.count || 0);

                    animate(el, value);

                    observer.unobserve(el); // 🔥 один раз
                });
            },
            { threshold: 0.4 }
        );

        items.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
}
