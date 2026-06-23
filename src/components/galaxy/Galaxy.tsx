"use client";

import { useRef, useEffect } from "react";

interface Star {
    nx: number;     // base position, normalized 0..1 of viewport (resolution-independent)
    ny: number;
    depth: number;  // 0 far → 1 near; drives parallax speed, size and brightness
    size: number;   // radius in CSS px (tiny: ~0.15 – 0.75 → 0.3px – 1.5px diameter)
    a: number;      // base alpha
    tw: number;     // twinkle speed (rad/ms); 0 = steady
    ph: number;     // twinkle phase
    color: string;  // "r,g,b"
}

/** Star density tier by viewport width — phone → TV. Lower than before; tiny stars read as "many" already. */
function densityFor(width: number, lowPower: boolean): number {
    if (lowPower) return 240;
    if (width < 640) return 360;       // phone
    if (width < 1024) return 620;      // tablet
    if (width < 1600) return 1000;     // desktop
    if (width < 2400) return 1500;     // large
    return 2100;                        // TV / 4K
}

export default function Galaxy() {
    const canvasRef = useRef<HTMLCanvasElement>(null!);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) return;

        const reduceMQ = window.matchMedia("(prefers-reduced-motion: reduce)");
        const touchMQ = window.matchMedia("(hover: none)");

        let prefersReduced = reduceMQ.matches;
        let lowPower = touchMQ.matches;
        let dpr = Math.min(window.devicePixelRatio || 1, 2);

        let W = 0, H = 0;                       // CSS pixels
        let stars: Star[] = [];
        const mouse = { x: 0, y: 0 };           // -0.5..0.5
        const par = { x: 0, y: 0 };             // smoothed parallax offset

        let raf = 0;
        let running = false;
        let last = 0;
        let drift = 0;                          // accumulated drift distance (px), advanced by dt
        const FRAME = 1000 / 60;                // 60fps cap

        // Subtle, realistic star tints — mostly white, a few cool/warm.
        const palette = ["255,255,255", "214,226,255", "255,246,232", "230,236,255"];

        function rand(min: number, max: number) { return min + Math.random() * (max - min); }

        function createStar(): Star {
            // Bias toward far/small stars; few large ones → natural depth.
            const depth = Math.pow(Math.random(), 1.7);          // skew to small depth (far)
            const size = 0.15 + depth * 0.6 + Math.random() * 0.12;   // ~0.3px..1.5px diameter
            const twinkles = Math.random() < 0.5;
            return {
                nx: Math.random(),
                ny: Math.random(),
                depth,
                size: Math.min(size, 0.75),
                a: 0.18 + depth * 0.42 + Math.random() * 0.1,    // dim → reduced brightness
                tw: twinkles ? rand(0.0008, 0.0022) : 0,
                ph: Math.random() * Math.PI * 2,
                color: palette[Math.floor(Math.random() * palette.length)],
            };
        }

        function buildStars() {
            const count = densityFor(W, lowPower);
            stars = Array.from({ length: count }, createStar);
        }

        function resize() {
            W = window.innerWidth;
            H = window.innerHeight;
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.floor(W * dpr);
            canvas.height = Math.floor(H * dpr);
            canvas.style.width = W + "px";
            canvas.style.height = H + "px";
            ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
            buildStars();
        }

        function isDarkTheme() {
            return document.documentElement.dataset.theme !== "light";
        }

        function frame(now: number) {
            if (!running) return;
            raf = requestAnimationFrame(frame);

            if (last === 0) last = now;
            const dt = now - last;
            if (dt < FRAME) return;
            last = now;

            const isDark = isDarkTheme();

            // Opaque background fill (alpha:false context).
            ctx!.fillStyle = isDark ? "#08080a" : "#eef0f3";
            ctx!.fillRect(0, 0, W, H);

            // Advance very slow drift; ease parallax toward the mouse target.
            if (!prefersReduced) drift += dt * 0.004;            // ~4px / second at depth 1
            par.x += (mouse.x * 26 - par.x) * 0.04;
            par.y += (mouse.y * 18 - par.y) * 0.04;

            const brightness = isDark ? 1 : 0.7;

            for (let i = 0; i < stars.length; i++) {
                const s = stars[i];

                // Parallax drift: nearer stars move a touch faster (depth factor).
                const dx = drift * (0.25 + s.depth) * 0.6 + par.x * s.depth;
                const dy = drift * (0.25 + s.depth) + par.y * s.depth;

                // Wrap seamlessly across the viewport.
                let px = (s.nx * W + dx) % W; if (px < 0) px += W;
                let py = (s.ny * H + dy) % H; if (py < 0) py += H;

                // Subtle twinkle.
                let alpha = s.a;
                if (s.tw && !prefersReduced) {
                    alpha *= 0.7 + 0.3 * Math.sin(now * s.tw + s.ph);
                }
                alpha *= brightness;

                ctx!.fillStyle = `rgba(${s.color},${alpha})`;
                const d = s.size * 2;
                // Tiny dots — fillRect is cheaper than arc and crisp at this scale.
                ctx!.fillRect(px - s.size, py - s.size, d, d);
            }

            // Reduced motion → one static frame, then idle.
            if (prefersReduced) running = false;
        }

        function start() {
            if (running) return;
            running = true;
            last = 0;
            raf = requestAnimationFrame(frame);
        }
        function stop() {
            running = false;
            cancelAnimationFrame(raf);
        }

        function onVisibility() {
            if (document.hidden) stop();
            else if (!prefersReduced) start();
            else { running = true; last = 0; raf = requestAnimationFrame(frame); }
        }

        let resizeTimer = 0;
        function onResize() {
            window.clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(() => {
                resize();
                if (prefersReduced) { running = true; last = 0; raf = requestAnimationFrame(frame); }
            }, 150);
        }

        function onMouseMove(e: MouseEvent) {
            mouse.x = e.clientX / window.innerWidth - 0.5;
            mouse.y = e.clientY / window.innerHeight - 0.5;
        }

        function onReducedChange() {
            prefersReduced = reduceMQ.matches;
            running = true; last = 0; raf = requestAnimationFrame(frame);
        }
        function onTouchChange() {
            lowPower = touchMQ.matches;
            buildStars();
        }

        resize();
        if (!lowPower) window.addEventListener("mousemove", onMouseMove, { passive: true });
        window.addEventListener("resize", onResize);
        document.addEventListener("visibilitychange", onVisibility);
        reduceMQ.addEventListener("change", onReducedChange);
        touchMQ.addEventListener("change", onTouchChange);
        start();

        return () => {
            stop();
            window.clearTimeout(resizeTimer);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", onResize);
            document.removeEventListener("visibilitychange", onVisibility);
            reduceMQ.removeEventListener("change", onReducedChange);
            touchMQ.removeEventListener("change", onTouchChange);
        };
    }, []);

    return <canvas ref={canvasRef} className="galaxy-canvas" aria-hidden="true" />;
}
