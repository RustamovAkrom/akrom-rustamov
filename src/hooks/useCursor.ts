"use client";

import { useEffect } from "react";

export function useCursor(
    dotRef: React.RefObject<HTMLDivElement | null>,
    ringRef: React.RefObject<HTMLDivElement | null>,
    trailRefs?: React.RefObject<HTMLDivElement | null>[]
) {
    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;

        if (!dot || !ring) return;

        const pos = { x: 0, y: 0 };
        const rp = { x: 0, y: 0 };
        const trailPos = trailRefs?.map(() => ({ x: 0, y: 0 })) || [];

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

            trailRefs?.forEach((ref, i) => {
                const el = ref.current;
                if (!el) return;
                const t = trailPos[i];
                const speed = 0.08 + i * 0.04;
                t.x += (pos.x - t.x) * speed;
                t.y += (pos.y - t.y) * speed;
                el.style.transform = `translate(${t.x - 3}px, ${t.y - 3}px)`;
            });

            raf = requestAnimationFrame(animate);
        };

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

            targets.forEach(el => {
                el.removeEventListener("mouseenter", enter);
                el.removeEventListener("mouseleave", leave);
            });
        };
    }, [dotRef, ringRef, trailRefs]);
}
