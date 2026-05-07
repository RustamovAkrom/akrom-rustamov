"use client";

import { useEffect } from "react";

export function useScrollProgress(
    ref: React.RefObject<HTMLDivElement>
) {
    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let raf = 0;
        let current = 0;

        const lerp = (a: number, b: number, n: number) =>
            a + (b - a) * n;

        const update = () => {
            const scrollTop = window.scrollY;
            const height =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const target = height > 0 ? scrollTop / height : 0;

            // smooth animation
            current = lerp(current, target, 0.1);

            el.style.transform = `scaleX(${current})`;

            raf = requestAnimationFrame(update);
        };

        raf = requestAnimationFrame(update);

        return () => cancelAnimationFrame(raf);
    }, [ref]);
}
