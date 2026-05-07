"use client";

import { useEffect, useRef } from "react";

export function useSliderAdvanced(total: number, onChange: (i: number) => void) {
    const cur = useRef(0);
    const startX = useRef(0);
    const drag = useRef(false);
    const autoT = useRef<number | undefined>(undefined);

    const go = (idx: number) => {
        cur.current = ((idx % total) + total) % total;
        onChange(cur.current);
    };

    const reset = () => {
        if (autoT.current) clearInterval(autoT.current);
        startAuto();
    };

    const startAuto = () => {
        autoT.current = window.setInterval(() => {
            go(cur.current + 1);
        }, 5500);
    };

    useEffect(() => {
        startAuto();

        const track = document.querySelector(".sl-track");
        if (!track) return;

        // touch
        track.addEventListener("touchstart", (e: any) => {
            startX.current = e.touches[0].clientX;
            drag.current = true;
        }, { passive: true });

        track.addEventListener("touchend", (e: any) => {
            if (!drag.current) return;

            const dx = e.changedTouches[0].clientX - startX.current;
            if (Math.abs(dx) > 52) {
                go(dx < 0 ? cur.current + 1 : cur.current - 1);
                reset();
            }
            drag.current = false;
        });

        // mouse
        track.addEventListener("mousedown", (e: any) => {
            startX.current = e.clientX;
            drag.current = true;
        });

        window.addEventListener("mouseup", (e: any) => {
            if (!drag.current) return;

            const dx = e.clientX - startX.current;
            if (Math.abs(dx) > 60) {
                go(dx < 0 ? cur.current + 1 : cur.current - 1);
                reset();
            }
            drag.current = false;
        });

        // keyboard
        const keyHandler = (e: KeyboardEvent) => {
            const pf = document.getElementById("portfolio");
            if (!pf) return;

            const r = pf.getBoundingClientRect();

            if (r.top < window.innerHeight && r.bottom > 0) {
                if (e.key === "ArrowRight") {
                    go(cur.current + 1);
                    reset();
                }
                if (e.key === "ArrowLeft") {
                    go(cur.current - 1);
                    reset();
                }
            }
        };

        document.addEventListener("keydown", keyHandler);

        return () => {
            if (autoT.current) clearInterval(autoT.current);
            document.removeEventListener("keydown", keyHandler);
        };
    }, [total]);

    return { go };
}
