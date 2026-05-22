"use client";

import { useEffect } from "react";

export function useOrb() {
    useEffect(() => {
        const orbs = document.querySelectorAll<HTMLElement>(".orb, .orb-parallax");

        if (!orbs.length) return;

        const mouse = { x: 0, y: 0 };
        const pos = { x: 0, y: 0 };

        const speed = 0.08;

        const onMove = (e: MouseEvent) => {
            mouse.x = (e.clientX / window.innerWidth - 0.5);
            mouse.y = (e.clientY / window.innerHeight - 0.5);
        };

        const animate = () => {
            pos.x += (mouse.x - pos.x) * speed;
            pos.y += (mouse.y - pos.y) * speed;

            orbs.forEach((el) => {
                const depth = Number(el.dataset.depth || 20);

                const x = pos.x * depth;
                const y = pos.y * depth;

                el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            });

            requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", onMove);
        animate();

        return () => {
            window.removeEventListener("mousemove", onMove);
        };
    }, []);
}
