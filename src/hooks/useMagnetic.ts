"use client";

import { useEffect } from "react";

export function useMagnetic() {
    useEffect(() => {
        if (window.matchMedia("(hover: none)").matches) return;

        const buttons = document.querySelectorAll<HTMLElement>(
            ".btn.solid, .btn.ghost"
        );

        const handleMove = (e: MouseEvent, btn: HTMLElement) => {
            const r = btn.getBoundingClientRect();

            const x = (e.clientX - r.left - r.width / 2) * 0.22;
            const y = (e.clientY - r.top - r.height / 2) * 0.22;

            btn.style.transform = `translate(${x}px, ${y}px) translateY(-2px)`;
        };

        const handleLeave = (btn: HTMLElement) => {
            btn.style.transform = "";
        };

        buttons.forEach((btn) => {
            const move = (e: MouseEvent) => handleMove(e, btn);
            const leave = () => handleLeave(btn);

            btn.addEventListener("mousemove", move);
            btn.addEventListener("mouseleave", leave);

            // cleanup
            (btn as any)._magnetic = { move, leave };
        });

        return () => {
            buttons.forEach((btn: any) => {
                if (btn._magnetic) {
                    btn.removeEventListener("mousemove", btn._magnetic.move);
                    btn.removeEventListener("mouseleave", btn._magnetic.leave);
                }
            });
        };
    }, []);
}
