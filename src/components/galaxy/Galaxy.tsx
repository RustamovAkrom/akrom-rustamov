"use client";

import { useRef, useEffect } from "react";

interface Star {
    x: number;
    y: number;
    z: number;
    pz: number;
    r: number;
    a: number;
    speed: number;
}

interface ShootingStar {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    len: number;
}

/** Star density tier by viewport width — phone → TV. */
function densityFor(width: number, lowPower: boolean): number {
    if (lowPower) return 320;
    if (width < 640) return 480;       // phone
    if (width < 1024) return 800;      // tablet
    if (width < 1600) return 1300;     // desktop
    if (width < 2400) return 1900;     // large
    return 2600;                        // TV / 4K
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

        // State that the animation loop reads.
        let prefersReduced = reduceMQ.matches;
        let lowPower = touchMQ.matches;
        let dpr = Math.min(window.devicePixelRatio || 1, 2);

        let W = 0, H = 0;          // CSS pixels
        let stars: Star[] = [];
        const shootingStars: ShootingStar[] = [];
        const mouse = { x: 0, y: 0 };
        let scrollY = 0;

        let raf = 0;
        let running = false;
        let last = 0;
        const FRAME = 1000 / 60;   // 60fps cap

        const cfg = {
            depth: 900,
            fov: 320,
            get speed() { return prefersReduced ? 0 : 0.2; },
            get shootingChance() { return lowPower ? 0.0003 : 0.0009; },
        };

        function createStar(seed = false): Star {
            return {
                x: (Math.random() - 0.5) * cfg.depth * 2,
                y: (Math.random() - 0.5) * cfg.depth * 2,
                z: seed ? Math.random() * cfg.depth : cfg.depth,
                pz: 0,
                r: Math.random() * 1.5 + 0.4,
                a: Math.random() * 0.7 + 0.3,
                speed: Math.random() * 0.6 + 0.4,
            };
        }

        function createShootingStar(): ShootingStar {
            const angle = Math.PI * 0.25 + Math.random() * 0.3;
            const speed = 8 + Math.random() * 6;
            return {
                x: Math.random() * W,
                y: Math.random() * H * 0.4,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 0,
                maxLife: 40 + Math.random() * 30,
                len: 20 + Math.random() * 30,
            };
        }

        function buildStars() {
            const count = densityFor(W, lowPower);
            stars = Array.from({ length: count }, () => createStar(true));
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

        function drawNebula(cx: number, cy: number, isDark: boolean) {
            if (prefersReduced) return;
            const tone = isDark ? "255,255,255" : "20,20,28";
            const mx = mouse.x * 28;
            const my = mouse.y * 18 + scrollY * 0.02;

            const spots: [number, number, number, number][] = [
                [cx * 0.7 + mx, cy * 0.6 + my, W * 0.42, isDark ? 0.05 : 0.035],
                [cx * 1.3 + mx, cy * 1.2 + my, W * 0.36, isDark ? 0.035 : 0.025],
            ];
            for (const [x, y, rad, alpha] of spots) {
                const g = ctx!.createRadialGradient(x, y, 0, x, y, rad);
                g.addColorStop(0, `rgba(${tone},${alpha})`);
                g.addColorStop(1, "transparent");
                ctx!.fillStyle = g;
                ctx!.fillRect(0, 0, W, H);
            }
        }

        function frame(now: number) {
            if (!running) return;
            raf = requestAnimationFrame(frame);

            // 60fps cap
            if (now - last < FRAME) return;
            last = now;

            const isDark = isDarkTheme();
            const tone = isDark ? "255,255,255" : "30,30,36";

            // Background fill (opaque — alpha:false context)
            ctx!.fillStyle = isDark ? "#08080a" : "#ececef";
            ctx!.fillRect(0, 0, W, H);

            const cx = W / 2 + mouse.x * 40;
            const cy = H / 2 + mouse.y * 30;

            drawNebula(cx, cy, isDark);

            // Shooting stars
            if (!prefersReduced && Math.random() < cfg.shootingChance) {
                shootingStars.push(createShootingStar());
            }
            for (let i = shootingStars.length - 1; i >= 0; i--) {
                const ss = shootingStars[i];
                ss.x += ss.vx;
                ss.y += ss.vy;
                ss.life++;
                if (ss.life > ss.maxLife || ss.x > W + 100 || ss.y > H + 100) {
                    shootingStars.splice(i, 1);
                    continue;
                }
                const progress = ss.life / ss.maxLife;
                const alpha = progress < 0.2 ? progress / 0.2 : 1 - (progress - 0.2) / 0.8;
                const tailX = ss.x - ss.vx * (ss.len / 8);
                const tailY = ss.y - ss.vy * (ss.len / 8);
                const grad = ctx!.createLinearGradient(ss.x, ss.y, tailX, tailY);
                grad.addColorStop(0, `rgba(${tone},${alpha})`);
                grad.addColorStop(1, `rgba(${tone},0)`);
                ctx!.beginPath();
                ctx!.moveTo(tailX, tailY);
                ctx!.lineTo(ss.x, ss.y);
                ctx!.strokeStyle = grad;
                ctx!.lineWidth = 1.5;
                ctx!.stroke();
                ctx!.beginPath();
                ctx!.arc(ss.x, ss.y, 1.2, 0, Math.PI * 2);
                ctx!.fillStyle = `rgba(${tone},${alpha})`;
                ctx!.fill();
            }

            // Warp starfield
            const moving = cfg.speed > 0;
            for (let i = 0; i < stars.length; i++) {
                const s = stars[i];
                if (moving) {
                    s.pz = s.z;
                    s.z -= cfg.speed * s.speed;
                    if (s.z <= 0) Object.assign(s, createStar(), { z: cfg.depth });
                }

                const k = cfg.fov / s.z;
                const px = s.x * k + cx;
                const py = s.y * k + cy;
                if (px < 0 || px > W || py < 0 || py > H) continue;

                const alpha = s.a * (1 - s.z / cfg.depth);
                const size = s.r * k * 0.5;
                const baseAlpha = isDark ? alpha : alpha * 0.55;

                if (moving && s.z < 120) {
                    const pk = cfg.fov / s.pz;
                    ctx!.beginPath();
                    ctx!.moveTo(s.x * pk + cx, s.y * pk + cy);
                    ctx!.lineTo(px, py);
                    ctx!.strokeStyle = `rgba(${tone},${baseAlpha * 0.5})`;
                    ctx!.lineWidth = size * 0.5;
                    ctx!.stroke();
                }

                ctx!.beginPath();
                ctx!.arc(px, py, Math.max(size, 0.4), 0, Math.PI * 2);
                ctx!.fillStyle = `rgba(${tone},${baseAlpha})`;
                ctx!.fill();
            }

            // Reduced motion → draw one static frame then idle.
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

        // Pause when tab hidden to save battery/CPU.
        function onVisibility() {
            if (document.hidden) stop();
            else if (!prefersReduced) start();
            else { running = true; last = 0; raf = requestAnimationFrame(frame); } // single static repaint
        }

        // Debounced resize.
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
        function onScroll() { scrollY = window.scrollY; }

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
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize);
        document.addEventListener("visibilitychange", onVisibility);
        reduceMQ.addEventListener("change", onReducedChange);
        touchMQ.addEventListener("change", onTouchChange);
        start();

        return () => {
            stop();
            window.clearTimeout(resizeTimer);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
            document.removeEventListener("visibilitychange", onVisibility);
            reduceMQ.removeEventListener("change", onReducedChange);
            touchMQ.removeEventListener("change", onTouchChange);
        };
    }, []);

    return <canvas ref={canvasRef} className="galaxy-canvas" aria-hidden="true" />;
}
