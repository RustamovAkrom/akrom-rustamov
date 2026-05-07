"use client";

import { useEffect } from "react";

export function useCursor(
    dotRef: React.RefObject<HTMLDivElement>,
    ringRef: React.RefObject<HTMLDivElement>
) {
    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;

        if (!dot || !ring) return;

        const pos = { x: 0, y: 0 };
        const rp = { x: 0, y: 0 };

        const applyTheme = () => {
            const theme = document.documentElement.dataset.theme;

            if (theme === "light") {
                dot.style.background = "#111"; // тёмный
                ring.style.borderColor = "rgba(0,0,0,0.4)";
            } else {
                dot.style.background = "#fff"; // светлый
                ring.style.borderColor = "rgba(255,255,255,0.4)";
            }
        };

        applyTheme();

        // следим за сменой темы
        const observer = new MutationObserver(applyTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["data-theme"],
        });

        // 🔹 mouse move
        const onMove = (e: MouseEvent) => {
            pos.x = e.clientX;
            pos.y = e.clientY;

            dot.style.transform = `translate(${pos.x - 3.5}px, ${pos.y - 3.5}px)`;
        };

        let raf: number;

        const animate = () => {
            rp.x += (pos.x - rp.x) * 0.12;
            rp.y += (pos.y - rp.y) * 0.12;

            ring.style.transform = `translate(${rp.x - 17}px, ${rp.y - 17}px)`;

            raf = requestAnimationFrame(animate);
        };

        // 🔹 hover targets
        const targets = document.querySelectorAll(
            "a,button,.sk,.cert,.svc,.slide__vis,.cform-i"
        );

        const enter = () => {
            ring.classList.add("big");
            dot.classList.add("big");
        };

        const leave = () => {
            ring.classList.remove("big");
            dot.classList.remove("big");
        };

        targets.forEach(el => {
            el.addEventListener("mouseenter", enter);
            el.addEventListener("mouseleave", leave);
        });

        document.addEventListener("mousemove", onMove, { passive: true });
        animate();

        return () => {
            document.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(raf);
            observer.disconnect();

            targets.forEach(el => {
                el.removeEventListener("mouseenter", enter);
                el.removeEventListener("mouseleave", leave);
            });
        };
    }, [dotRef, ringRef]);
}
