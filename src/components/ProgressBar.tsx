"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ProgressBar() {
    const ref = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        let progress = 0;

        const tick = () => {
            if (!ref.current) return;

            progress += (100 - progress) * 0.08;
            ref.current.style.transform = `scaleX(${progress / 100})`;

            if (progress < 95) {
                requestAnimationFrame(tick);
            }
        };

        tick();

        timeoutRef.current = setTimeout(() => {
            if (!ref.current) return;

            ref.current.style.transform = "scaleX(1)";

            setTimeout(() => {
                if (ref.current) {
                    ref.current.style.transform = "scaleX(0)";
                }
            }, 200);
        }, 300);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [pathname]);

    return (
        <div className="progress">
            <div ref={ref} className="progress__bar" />
        </div>
    );
}