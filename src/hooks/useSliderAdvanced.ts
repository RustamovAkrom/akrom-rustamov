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

        const onTouchStart = (e: Event) => {
            const te = e as TouchEvent;
            startX.current = te.touches[0].clientX;
            drag.current = true;
        };

        const onTouchEnd = (e: Event) => {
            if (!drag.current) return;
            const te = e as TouchEvent;
            const dx = te.changedTouches[0].clientX - startX.current;
            if (Math.abs(dx) > 52) {
                go(dx < 0 ? cur.current + 1 : cur.current - 1);
                reset();
            }
            drag.current = false;
        };

        const onMouseDown = (e: Event) => {
            const me = e as MouseEvent;
            startX.current = me.clientX;
            drag.current = true;
        };

        const onMouseUp = (e: Event) => {
            if (!drag.current) return;
            const me = e as MouseEvent;
            const dx = me.clientX - startX.current;
            if (Math.abs(dx) > 60) {
                go(dx < 0 ? cur.current + 1 : cur.current - 1);
                reset();
            }
            drag.current = false;
        };

        track.addEventListener("touchstart", onTouchStart, { passive: true });
        track.addEventListener("touchend", onTouchEnd);
        track.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);

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
            track.removeEventListener("touchstart", onTouchStart);
            track.removeEventListener("touchend", onTouchEnd);
            track.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
            document.removeEventListener("keydown", keyHandler);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [total]);

    return { go };
}