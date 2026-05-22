"use client";

import { useEffect } from "react";

interface GlowEl extends HTMLElement {
    _glow?: { move: (e: MouseEvent) => void; leave: () => void };
}

export function useCardGlow() {
    useEffect(() => {
        if (window.matchMedia("(hover: none)").matches) return;

        const elements = document.querySelectorAll<HTMLElement>(".sk");

        const handleMove = (e: MouseEvent, el: HTMLElement) => {
            const r = el.getBoundingClientRect();

            const x = e.clientX - r.left;
            const y = e.clientY - r.top;

            el.style.setProperty("--mx", `${x}px`);
            el.style.setProperty("--my", `${y}px`);
        };

        const handleLeave = (el: HTMLElement) => {
            el.style.removeProperty("--mx");
            el.style.removeProperty("--my");
        };

        elements.forEach((el) => {
            const move = (e: MouseEvent) => handleMove(e, el);
            const leave = () => handleLeave(el);

            el.addEventListener("mousemove", move);
            el.addEventListener("mouseleave", leave);

            (el as GlowEl)._glow = { move, leave };
        });

        return () => {
            elements.forEach((el: GlowEl) => {
                if (el._glow) {
                    el.removeEventListener("mousemove", el._glow.move);
                    el.removeEventListener("mouseleave", el._glow.leave);
                }
            });
        };
    }, []);
}
