"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function ProgressBar() {
    const ref = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        // старт загрузки
        setLoading(true);

        // фейковый прогресс (визуально приятный)
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

        // завершение загрузки
        timeout = setTimeout(() => {
            if (!ref.current) return;

            ref.current.style.transform = "scaleX(1)";

            setTimeout(() => {
                setLoading(false);
                if (ref.current) {
                    ref.current.style.transform = "scaleX(0)";
                }
            }, 200);
        }, 300);

        return () => clearTimeout(timeout);
    }, [pathname]);

    if (!loading) return null;

    return (
        <div className="progress">
            <div ref={ref} className="progress__bar" />
        </div>
    );
}
