"use client";

import { useRef, useEffect } from "react";

interface Nebula {
    cx: number;
    cy: number;
    radius: number;
    color: string;
    alpha: number;
    driftX: number;
    driftY: number;
}

interface Comet {
    x: number;
    y: number;
    vx: number;
    vy: number;
    len: number;
    alpha: number;
    fade: number;
    color: string;
}

interface Star {
    nx: number;     // base position, normalized 0..1 of viewport (resolution-independent)
    ny: number;
    vx: number;     // individual normalized velocity per millisecond
    vy: number;
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
        let nebulae: Nebula[] = [];
        let comets: Comet[] = [];
        const mouse = { x: 0, y: 0 };           // -0.5..0.5
        const par = { x: 0, y: 0 };             // smoothed parallax offset

        let raf = 0;
        let running = false;
        let last = 0;
        const FRAME = 1000 / 60;                // 60fps cap
        let cometSeed = 0;

        // Subtle, realistic star tints — mostly white, a few cool/warm.
        const palette = ["255,255,255", "214,226,255", "255,246,232", "230,236,255"];
        const nebulaPalette = ["96,118,255", "145,96,255", "255,208,255", "89,212,255", "198,168,255"];

        function rand(min: number, max: number) { return min + Math.random() * (max - min); }

        function createNebula(): Nebula {
            const radius = rand(260, 520);
            return {
                cx: rand(0.05, 0.95) * W,
                cy: rand(0.05, 0.95) * H,
                radius,
                color: nebulaPalette[Math.floor(Math.random() * nebulaPalette.length)],
                alpha: rand(0.08, 0.18),
                driftX: rand(-0.02, 0.02),
                driftY: rand(-0.015, 0.015),
            };
        }

        function createComet(): Comet {
            const edge = Math.random();
            const fromLeft = Math.random() < 0.5;
            const startY = rand(0.1, 0.85) * H;
            const startX = fromLeft ? -40 : W + 40;
            const vx = fromLeft ? rand(0.08, 0.18) : rand(-0.18, -0.08);
            const vy = rand(-0.04, 0.04);
            return {
                x: startX,
                y: startY,
                vx,
                vy,
                len: rand(90, 170),
                alpha: rand(0.28, 0.45),
                fade: rand(0.00018, 0.00028),
                color: "255,255,255",
            };
        }

        function createStar(): Star {
            // Bias toward far/small stars; few large ones → natural depth.
            const depth = Math.pow(Math.random(), 1.7);          // skew to small depth (far)
            const size = 0.2 + depth * 0.68 + Math.random() * 0.12;
            const twinkles = Math.random() < 0.5;
            const star: Star = {
                nx: 0,
                ny: 0,
                vx: 0,
                vy: 0,
                depth,
                size: Math.min(size, 0.88),
                a: 0.18 + depth * 0.42 + Math.random() * 0.1,    // dim → reduced brightness
                tw: twinkles ? rand(0.0008, 0.0022) : 0,
                ph: Math.random() * Math.PI * 2,
                color: palette[Math.floor(Math.random() * palette.length)],
            };
            launchStar(star, Math.sqrt(Math.random()) * 0.72);
            return star;
        }

        function launchStar(star: Star, distance: number) {
            const angle = Math.random() * Math.PI * 2;
            const velocity = rand(0.000035, 0.000065);
            star.nx = 0.5 + Math.cos(angle) * distance;
            star.ny = 0.5 + Math.sin(angle) * distance;
            star.vx = Math.cos(angle) * velocity;
            star.vy = Math.sin(angle) * velocity;
        }

        function buildStars() {
            const count = densityFor(W, lowPower);
            stars = Array.from({ length: count }, createStar);
        }

        function buildNebula() {
            nebulae = Array.from({ length: 5 }, createNebula);
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
            buildNebula();
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
            ctx!.fillStyle = isDark ? "#04040d" : "#eef0f3";
            ctx!.fillRect(0, 0, W, H);

            // Faint cosmic glow overlay for depth.
            const glow = ctx!.createRadialGradient(W * 0.22, H * 0.18, 0, W * 0.22, H * 0.18, Math.max(W, H) * 0.92);
            glow.addColorStop(0, isDark ? "rgba(97, 79, 255, 0.09)" : "rgba(170, 191, 255, 0.06)");
            glow.addColorStop(0.55, "rgba(0,0,0,0)");
            ctx!.fillStyle = glow;
            ctx!.fillRect(0, 0, W, H);

            par.x += (mouse.x * 32 - par.x) * 0.06;
            par.y += (mouse.y * 22 - par.y) * 0.06;

            const brightness = isDark ? 1.15 : 0.78;

            // Nebula glow layers.
            ctx!.globalCompositeOperation = "lighter";
            ctx!.filter = "blur(1px)";
            nebulae.forEach((neb) => {
                neb.cx += neb.driftX * dt;
                neb.cy += neb.driftY * dt;
                neb.cx = (neb.cx + W) % W;
                neb.cy = (neb.cy + H) % H;

                const nebAlpha = neb.alpha * (isDark ? 1.1 : 0.8);
                const grad = ctx!.createRadialGradient(neb.cx, neb.cy, 0, neb.cx, neb.cy, neb.radius);
                grad.addColorStop(0, `rgba(${neb.color}, ${nebAlpha * 0.55})`);
                grad.addColorStop(0.34, `rgba(${neb.color}, ${nebAlpha * 0.24})`);
                grad.addColorStop(1, "rgba(0, 0, 0, 0)");

                ctx!.fillStyle = grad;
                ctx!.beginPath();
                ctx!.arc(neb.cx, neb.cy, neb.radius, 0, Math.PI * 2);
                ctx!.fill();
            });
            ctx!.filter = "none";
            ctx!.globalCompositeOperation = "source-over";

            // Comet trails.
            cometSeed += dt;
            if (!prefersReduced && cometSeed > 900 && comets.length < 4) {
                comets.push(createComet());
                cometSeed = 0;
            }
            comets = comets.filter((c) => c.alpha > 0 && c.x > -120 && c.x < W + 120 && c.y > -120 && c.y < H + 120);
            comets.forEach((c) => {
                c.x += c.vx * dt;
                c.y += c.vy * dt;
                c.alpha -= c.fade * dt;
                const tx = c.x - c.vx * c.len * 0.75;
                const ty = c.y - c.vy * c.len * 0.75;

                const trail = ctx!.createLinearGradient(c.x, c.y, tx, ty);
                trail.addColorStop(0, `rgba(${c.color}, ${Math.max(c.alpha, 0)})`);
                trail.addColorStop(1, "rgba(255,255,255,0)");

                ctx!.strokeStyle = trail;
                ctx!.lineWidth = 1.8;
                ctx!.lineCap = "round";
                ctx!.beginPath();
                ctx!.moveTo(c.x, c.y);
                ctx!.lineTo(tx, ty);
                ctx!.stroke();

                ctx!.fillStyle = `rgba(${c.color}, ${Math.max(c.alpha * 0.9, 0)})`;
                ctx!.beginPath();
                ctx!.arc(c.x, c.y, 2.2, 0, Math.PI * 2);
                ctx!.fill();
            });

            for (let i = 0; i < stars.length; i++) {
                const s = stars[i];

                // Give each star its own gentle drift. Nearer stars move a little
                // faster, but remain small so the field stays refined.
                if (!prefersReduced) {
                    const speed = lowPower ? 0.45 : 1;
                    s.nx += s.vx * dt * (0.45 + s.depth * 0.9) * speed;
                    s.ny += s.vy * dt * (0.45 + s.depth * 0.9) * speed;
                    if (s.nx < -0.05 || s.nx > 1.05 || s.ny < -0.05 || s.ny > 1.05) {
                        launchStar(s, 0.01);
                    }
                }

                const px = s.nx * W + par.x * s.depth * 1.1;
                const py = s.ny * H + par.y * s.depth * 0.9;
                const distanceFromCentre = Math.min(Math.hypot(s.nx - 0.5, s.ny - 0.5), 0.8);

                // Subtle twinkle.
                let alpha = s.a;
                if (s.tw && !prefersReduced) {
                    alpha *= 0.68 + 0.34 * Math.sin(now * s.tw + s.ph);
                }
                alpha *= (0.55 + distanceFromCentre * 0.55) * brightness;
                const radius = s.size * (0.75 + distanceFromCentre * 0.45);

                ctx!.fillStyle = `rgba(${s.color},${alpha})`;
                ctx!.beginPath();
                ctx!.arc(px, py, radius, 0, Math.PI * 2);
                ctx!.fill();

                if (s.depth > 0.82 && alpha > 0.25) {
                    ctx!.fillStyle = `rgba(${s.color}, ${Math.min(alpha * 0.4, 0.36)})`;
                    ctx!.beginPath();
                    ctx!.arc(px, py, radius * 1.75, 0, Math.PI * 2);
                    ctx!.fill();
                }
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
