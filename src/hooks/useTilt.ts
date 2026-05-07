"use client";

import { useEffect } from "react";

export function useTilt() {
    useEffect(() => {
        if (window.matchMedia("(hover: none)").matches) return;

        const cards = document.querySelectorAll<HTMLElement>(".sk, .cert");

        const handleMove = (e: MouseEvent, card: HTMLElement) => {
            const r = card.getBoundingClientRect();

            const x = ((e.clientX - r.left) / r.width - 0.5) * 8;
            const y = ((e.clientY - r.top) / r.height - 0.5) * -8;

            card.style.transform =
                `perspective(700px) rotateY(${x}deg) rotateX(${y}deg) translateY(-4px)`;
        };

        const handleLeave = (card: HTMLElement) => {
            card.style.transform = "";
        };

        cards.forEach((card) => {
            const move = (e: MouseEvent) => handleMove(e, card);
            const leave = () => handleLeave(card);

            card.addEventListener("mousemove", move);
            card.addEventListener("mouseleave", leave);

            (card as any)._tilt = { move, leave };
        });

        return () => {
            cards.forEach((card: any) => {
                if (card._tilt) {
                    card.removeEventListener("mousemove", card._tilt.move);
                    card.removeEventListener("mouseleave", card._tilt.leave);
                }
            });
        };
    }, []);
}
